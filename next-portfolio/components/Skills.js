import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/skills'

export default function Skills() {
    return (
        <section id="skills" aria-labelledby="skills-title" className="bg-white py-16 dark:bg-slate-900/40 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <SectionHeading
                    id="skills-title"
                    eyebrow="Toolbox"
                    title="Skills"
                    description="The technologies I reach for when turning research ideas into working systems."
                />

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {skillGroups.map(group => (
                        <div
                            key={group.title}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900"
                        >
                            <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                                {group.title}
                            </h3>
                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{group.description}</p>
                            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                                {group.skills.map(skill => (
                                    <li
                                        key={skill}
                                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
