// CV is now self-hosted at /anirban_bhowmick_cv.pdf (was previously hosted on
// Google Drive; original URL kept here as fallback history:
// https://drive.google.com/file/d/1F-lm2JaF_nqskqLlLozDVE1Xe5oQ1cA6/view?usp=drive_link)
const CV_URL = '/anirban_bhowmick_cv.pdf'

function GitHubIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
            />
        </svg>
    )
}

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452Z" />
        </svg>
    )
}

function MailIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
        </svg>
    )
}

const SOCIALS = [
    { label: 'GitHub', href: 'https://github.com/Anirbanbhk88', Icon: GitHubIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anirbanbhk/', Icon: LinkedInIcon },
    { label: 'Email', href: 'mailto:anirbanbhowmick88@gmail.com', Icon: MailIcon },
]

/**
 * Static, tasteful gradient hero. No parallax / heavy animation — the only
 * motion is a gentle float on the avatar halo, disabled for users who prefer
 * reduced motion (see globals.css).
 */
export default function Hero() {
    return (
        <section aria-labelledby="hero-title" className="relative overflow-hidden">
            {/* Decorative gradient backdrop (static) */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-950 dark:via-slate-950 dark:to-primary-950/40" />
                <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary-300/30 blur-3xl dark:bg-primary-600/20" />
                <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-secondary-300/30 blur-3xl dark:bg-secondary-700/20" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
                <div className="flex flex-col items-center text-center">
                    {/* Avatar with gradient halo */}
                    <div className="floaty relative">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 -m-1.5 rounded-full bg-gradient-to-tr from-primary-500 to-secondary-500 opacity-50 blur-lg dark:opacity-40"
                        />
                        <img
                            src="/images/portfolio1.jpeg"
                            alt="Portrait of Anirban Bhowmick"
                            width="144"
                            height="144"
                            className="relative h-36 w-36 rounded-full object-cover object-center shadow-xl ring-4 ring-white dark:ring-slate-900"
                        />
                    </div>

                    <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-950/60 dark:text-primary-300">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                        AI Engineer — LLMs, RAG &amp; Data Pipelines
                    </p>

                    <h1
                        id="hero-title"
                        className="reveal mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
                    >
                        Anirban Bhowmick
                    </h1>

                    <p className="reveal delay-150 mt-3 text-lg font-medium text-primary-700 dark:text-primary-300 sm:text-xl">
                        8+ years bridging research &amp; enterprise software
                    </p>

                    <p className="reveal delay-250 mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
                        I build end-to-end data pipelines for training, fine-tuning and evaluating large
                        language models — and draw on a decade of software engineering to ship ML systems
                        that are robust, maintainable and production-ready.
                    </p>

                    {/* CTAs */}
                    <div className="reveal delay-350 mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="#projects"
                            className="rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400"
                        >
                            View Projects
                        </a>
                        <a
                            href={CV_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-slate-300 bg-white/60 px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-900"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="rounded-lg px-5 py-2.5 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50 dark:text-primary-300 dark:hover:bg-primary-950/50"
                        >
                            Get in Touch →
                        </a>
                    </div>

                    {/* Social links */}
                    <ul className="reveal delay-350 mt-8 flex items-center gap-4" aria-label="Social profiles">
                        {SOCIALS.map(({ label, href, Icon }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-soft transition-colors hover:border-primary-300 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-primary-700 dark:hover:text-primary-300"
                                >
                                    <Icon />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
