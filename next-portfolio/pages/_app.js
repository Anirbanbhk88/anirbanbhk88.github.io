import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'
import { Inter, Sora } from 'next/font/google'

// Self-hosted at build time (works with `next export`). If the Google Fonts
// download ever fails in a sandboxed environment, the CSS variables fall back
// to a system font stack (see --font-* fallbacks in styles/globals.css and
// tailwind.config.js).
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
})

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (typeof window === 'undefined') return
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                    obs.unobserve(entry.target)
                }
            })
        }, { threshold: 0.12 })

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

        // Smooth scrolling for internal anchor links (respect sticky header)
        function onClick(e) {
            const a = e.target.closest && e.target.closest('a[href^="#"]')
            if (!a) return
            const href = a.getAttribute('href')
            if (!href || href === '#') return
            const id = href.slice(1)
            const target = document.getElementById(id)
            if (!target) return
            e.preventDefault()
            // header height (sticky)
            const header = document.querySelector('header')
            const headerHeight = header ? header.getBoundingClientRect().height : 0
            const top = window.scrollY + target.getBoundingClientRect().top - headerHeight - 12
            window.scrollTo({ top, behavior: 'smooth' })
        }

        document.addEventListener('click', onClick)

        return () => {
            observer.disconnect()
            document.removeEventListener('click', onClick)
        }
    }, [])

    return (
        <div className={`${inter.variable} ${sora.variable} font-sans`}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}
