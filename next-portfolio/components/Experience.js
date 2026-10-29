/**
 * Experience timeline — all roles, newest first. Data-driven via data/experience.js
 * so entries can be added/edited without touching the markup.
 */
import SectionHeading from './SectionHeading'
import { experience } from '../data/experience'

export default function Experience() {
    return (
        <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
                id="experience-title"
                eyebrow="Career"
                title="Experience"
                description="From leading enterprise development teams to researching LLM data pipelines — a decade across industry and academia."
            />

            <ol className="relative mt-12 space-y-10 border-l-2 border-slate-200 pl-8 dark:border-slate-800">
                {experience.map(job => (
                    <li key={`${job.org}-${job.period}`} className="relative">
                        {/* Timeline dot */}
                        <span
                            aria-hidden="true"
                            className={`absolute -left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                                job.current
                                    ? 'border-primary-600 bg-primary-600 dark:border-primary-400 dark:bg-primary-400'
                                    : 'border-primary-400 bg-white dark:border-primary-600 dark:bg-slate-950'
                            }`}
                        />
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                                {job.role}
                                {job.current && (
                                    <span className="ml-2 inline-flex items-center rounded-full bg-primary-50 px-2 py-0.5 align-middle text-xs font-medium text-primary-700 dark:bg-primary-950/60 dark:text-primary-300">
                                        Current
                                    </span>
                                )}
                            </h3>
                            <span className="text-sm font-medium tabular-nums text-slate-500 dark:text-slate-400">
                                {job.period}
                            </span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-primary-700 dark:text-primary-300">
                            {job.org} · {job.location}
                        </p>
                        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {job.bullets.map(bullet => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </section>
    )
}
