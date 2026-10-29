#!/usr/bin/env node
/**
 * build-posts.js
 *
 * Scans public/posts/*.html and generates data/posts.json — the manifest used
 * by pages/blog/index.js and the homepage BlogTeaser.
 *
 * Manifest contract:
 * {
 *   "generatedAt": "ISO-8601 timestamp",
 *   "posts": [{
 *     "slug":    "sandakphu-diary",
 *     "title":   "The Sandakphu Diary",
 *     "date":    "YYYY-MM-DD",
 *     "tags":    ["Travel"],
 *     "excerpt": "...",
 *     "author":  "Anirban Bhowmick",
 *     "url":     "/posts/sandakphu-diary.html"
 *   }]
 * }
 *
 * Fallbacks:
 *   - missing date    -> file modification time
 *   - missing title   -> humanized filename (e.g. my-post.html -> "My Post")
 *   - missing tags    -> []
 *   - missing excerpt -> <meta name="description">, else ""
 *   - missing author  -> "Anirban Bhowmick"
 *
 * Files whose name starts with "_" (e.g. _template.html) are ignored.
 *
 * Stdlib only (fs/path) — no npm dependencies.
 */
'use strict'

const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const POSTS_DIR = path.join(ROOT, 'public', 'posts')
const DATA_DIR = path.join(ROOT, 'data')
const OUT_FILE = path.join(DATA_DIR, 'posts.json')
const DEFAULT_AUTHOR = 'Anirban Bhowmick'

/** Decode the handful of HTML entities that show up in titles/excerpts. */
function decodeEntities(str) {
    return String(str)
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&#0?39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .trim()
}

/** Collapse internal whitespace and trim. */
function clean(str) {
    return String(str).replace(/\s+/g, ' ').trim()
}

/**
 * Extract the `content` of `<meta name="<name>" content="...">`.
 * Handles any attribute order and single/double/unquoted values.
 */
function extractMeta(html, name) {
    const metas = html.match(/<meta\b[^>]*>/gi) || []
    for (const tag of metas) {
        const nameMatch = tag.match(/\bname\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/i)
        if (!nameMatch) continue
        const nameValue = (nameMatch[1] || nameMatch[2] || nameMatch[3] || '').toLowerCase()
        if (nameValue !== name.toLowerCase()) continue
        const contentMatch = tag.match(/\bcontent\s*=\s*(?:"([^"]*)"|'([^']*)')/i)
        if (contentMatch) {
            return decodeEntities(contentMatch[1] !== undefined ? contentMatch[1] : contentMatch[2])
        }
        return ''
    }
    return undefined
}

/** my-cool-post -> "My Cool Post" */
function humanizeSlug(slug) {
    return slug
        .split(/[-_\s]+/)
        .filter(Boolean)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

/** Date -> "YYYY-MM-DD" (local time). */
function toDateStr(date) {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
}

/** Title from <title>, falling back to the humanized filename. */
function extractTitle(html, slug) {
    const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
    const fromTag = match ? decodeEntities(clean(match[1])) : ''
    return fromTag || humanizeSlug(slug)
}

/**
 * Date from <meta name="date"> (must start with YYYY-MM-DD), falling back to
 * the file's modification time.
 */
function extractDate(html, filePath) {
    const raw = extractMeta(html, 'date')
    if (raw && /^\d{4}-\d{2}-\d{2}/.test(raw)) {
        return raw.slice(0, 10)
    }
    try {
        return toDateStr(fs.statSync(filePath).mtime)
    } catch (e) {
        return toDateStr(new Date())
    }
}

function main() {
    if (!fs.existsSync(POSTS_DIR)) {
        console.error(`build-posts: ${path.relative(ROOT, POSTS_DIR)} not found — nothing to scan.`)
        process.exitCode = 1
        return
    }

    const files = fs
        .readdirSync(POSTS_DIR)
        .filter(f => f.toLowerCase().endsWith('.html') && !f.startsWith('_'))

    const posts = files.map(file => {
        const slug = file.replace(/\.html$/i, '')
        const fullPath = path.join(POSTS_DIR, file)
        const html = fs.readFileSync(fullPath, 'utf8')

        const title = extractTitle(html, slug)
        const date = extractDate(html, fullPath)

        const tagsRaw = extractMeta(html, 'tags') || ''
        const tags = tagsRaw
            .split(',')
            .map(t => clean(t))
            .filter(Boolean)

        const excerpt = extractMeta(html, 'excerpt') ?? extractMeta(html, 'description') ?? ''
        const author = extractMeta(html, 'author') || DEFAULT_AUTHOR

        return {
            slug,
            title,
            date,
            tags,
            excerpt: clean(excerpt),
            author: clean(author),
            url: `/posts/${slug}.html`,
        }
    })

    // Newest first; ties keep their relative directory order (stable sort).
    posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

    const manifest = {
        generatedAt: new Date().toISOString(),
        posts,
    }

    fs.mkdirSync(DATA_DIR, { recursive: true })
    fs.writeFileSync(OUT_FILE, JSON.stringify(manifest, null, 2) + '\n', 'utf8')
    console.log(`build-posts: wrote ${posts.length} post(s) -> ${path.relative(ROOT, OUT_FILE)}`)
}

main()
