/**
 * Consistent section heading with an optional eyebrow ("kicker") and description.
 */
export default function SectionHeading({ eyebrow, title, description, align = 'center', id }) {
    const isCenter = align === 'center'
    return (
        <div className={`flex flex-col ${isCenter ? 'items-center text-center mx-auto' : 'items-start text-left'} max-w-2xl`}>
            {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
                    {eyebrow}
                </p>
            )}
            <h2
                id={id}
                className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            >
                {title}
            </h2>
            {description && (
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-400">{description}</p>
            )}
        </div>
    )
}
