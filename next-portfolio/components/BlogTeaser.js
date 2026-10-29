/**
 * Homepage teaser: latest posts (usually 3) passed via getStaticProps.
 * IMPORTANT: post links are plain <a> elements (never next/link) because the
 * posts are plain static HTML files served from /posts/.
 */
function formatDate(iso) {
    try {
        return new Intl.DateTimeFormat('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }).format(new Date(`${iso}T00:00:00`))
    } catch (e) {
        return iso
    }
}

export default function BlogTeaser({ posts = [] }) {
    return (
        <section id="blog" aria-labelledby="blog-title" className="bg-white py-16 dark:bg-slate-900/40 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                    <div className="max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
                            Writing
                        </p>
                        <h2
                            id="blog-title"
                            className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
                        >
                            Latest from the Blog
                        </h2>
                        <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-400">
                            Notes on machine learning, engineering and life between Hamburg and the Himalayas.
                        </p>
                    </div>
                    <a
                        href="/blog"
                        className="shrink-0 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                        View all posts →
                    </a>
                </div>

                {posts.length === 0 ? (
                    <p className="mt-10 rounded-2xl border border-dashed border-slate-300 px-6 py-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                        No posts yet — check back soon.
                    </p>
                ) : (
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map(post => (
                            <article
                                key={post.slug}
                                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:border-slate-800 dark:bg-slate-900"
                            >
                                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                                    {post.tags && post.tags.length > 0 && (
                                        <>
                                            <span aria-hidden="true">·</span>
                                            <span>{post.tags.join(', ')}</span>
                                        </>
                                    )}
                                </div>
                                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300">
                                    <a href={post.url}>{post.title}</a>
                                </h3>
                                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 line-clamp-3 dark:text-slate-400">
                                    {post.excerpt}
                                </p>
                                <a
                                    href={post.url}
                                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                                    aria-label={`Read post: ${post.title}`}
                                >
                                    Read post
                                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                                </a>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
