import SectionHeading from './SectionHeading'

const PROJECTS = [
    {
        title: 'Project 01',
        description: 'A demo website featuring modern UI and animations.',
        image: '/images/img-1.jpg',
        tag: 'Website',
        href: '#',
    },
    {
        title: 'Project 02',
        description: 'ML model deployment and monitoring example.',
        image: '/images/img-2.jpg',
        tag: 'ML',
        href: '#',
    },
    {
        title: 'Project 03',
        description: 'Mobile app with native features and CI pipelines.',
        image: '/images/img-3.jpg',
        tag: 'Mobile',
        href: '#',
    },
]

export default function Projects() {
    return (
        <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
                id="projects-title"
                eyebrow="Selected work"
                title="Projects"
                description="A few things I have built — from web platforms to ML systems."
            />

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project, index) => (
                    <article
                        key={project.title}
                        /* TODO(customize): replace the title, description, image, tag and link
                           above with your real projects. Drop images into public/images/. */
                        className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift dark:border-slate-800 dark:bg-slate-900 ${
                            index === 0 ? 'reveal' : index === 1 ? 'reveal delay-150' : 'reveal delay-250'
                        }`}
                    >
                        <div className="relative h-44 overflow-hidden">
                            <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between gap-3">
                                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950/60 dark:text-primary-300">
                                    {project.tag}
                                </span>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                                {project.description}
                            </p>
                            <div className="mt-4">
                                <a
                                    href={project.href}
                                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                                    aria-label={`View ${project.title}`}
                                >
                                    View project
                                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
