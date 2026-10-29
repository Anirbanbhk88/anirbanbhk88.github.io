/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Emit directory-style URLs (out/blog/index.html instead of out/blog.html)
    // so pages resolve naturally on GitHub Pages (/blog/ -> /blog/index.html).
    trailingSlash: true,
}

module.exports = nextConfig
