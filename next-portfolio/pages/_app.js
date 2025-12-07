import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'

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
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
