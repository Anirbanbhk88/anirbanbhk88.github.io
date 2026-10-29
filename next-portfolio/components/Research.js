/**
 * Research & Publications — publications and the Master's thesis, data-driven
 * via data/papers.js; the author listed in `highlight` is visually emphasized.
 * `pages` and `link` are optional per entry and rendered only when present.
 */
import SectionHeading from './SectionHeading'
import { papers } from '../data/papers'

export default function Research() {
    return (
        <section id="research" aria-labelledby="research-title" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
                id="research-title"
                eyebrow="Publications"
                title="Research & Publications"
                description="Peer-reviewed work in natural language processing — from hate-speech detection in movie subtitles to sentiment analysis for low-resource languages."
            />

            <ol className="mt-12 space-y-6">
                {papers.map(paper => (
                    <li
                        key={paper.title}
                        className="rounded-2xl border border-slate-200 border-l-4 border-l-primary-500 bg-white p-6 shadow-soft dark:border-slate-800 dark:border-l-primary-400 dark:bg-slate-900"
                    >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                                {paper.title}
                            </h3>
                            <span className="text-sm font-medium tabular-nums text-slate-500 dark:text-slate-400">
                                {paper.year}
                            </span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-primary-700 dark:text-primary-300">
                            {paper.venue}
                            {paper.pages ? ` · ${paper.pages}` : ''}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {paper.authors.map((author, index) => (
                                <span key={author}>
                                    {index > 0 && ', '}
                                    <span
                                        className={
                                            author === paper.highlight
                                                ? 'font-semibold text-primary-600 dark:text-primary-400'
                                                : undefined
                                        }
                                    >
                                        {author}
                                    </span>
                                </span>
                            ))}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {paper.description}
                        </p>
                        {paper.link && (
                            <div className="mt-4">
                                <a
                                    href={paper.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 py-2 -my-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                                    aria-label={`View thesis PDF: ${paper.title}`}
                                >
                                    View Thesis (PDF)
                                    <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        )}
                    </li>
                ))}
            </ol>
        </section>
    )
}
