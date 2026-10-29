const YEAR = new Date().getFullYear()

const FOOTER_LINKS = [
    { href: '/#about', label: 'About' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#skills', label: 'Skills' },
    { href: '/#projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' },
]

const SOCIAL_LINKS = [
    { label: 'GitHub', href: 'https://github.com/Anirbanbhk88' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anirbanbhk/' },
    { label: 'Email', href: 'mailto:anirbanbhowmick88@gmail.com' },
]

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div>
                        <p className="font-display text-base font-bold text-slate-900 dark:text-white">
                            Anirban<span className="text-primary-600 dark:text-primary-400">.</span>
                        </p>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            ML Engineer &amp; Data Scientist — Hamburg, Germany
                        </p>
                    </div>

                    <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                        {FOOTER_LINKS.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <ul className="flex items-center gap-4" aria-label="Social profiles">
                        {SOCIAL_LINKS.map(link => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                                    rel="noreferrer"
                                    className="text-sm font-medium text-slate-500 transition-colors hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-300"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
                    © {YEAR} Anirban Bhowmick. Built with Next.js &amp; Tailwind CSS.
                </div>
            </div>
        </footer>
    )
}
