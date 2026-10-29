import SectionHeading from './SectionHeading'

const HIGHLIGHTS = [
    {
        title: 'LLM & AI Data Pipelines',
        body: 'Scalable ingestion, preprocessing, labeling and evaluation workflows for training and fine-tuning large language models.',
    },
    {
        title: 'MLOps & Reliability',
        body: 'Model versioning, monitoring and CI/CD that keep ML systems robust, maintainable and production-ready.',
    },
    {
        title: 'Full-stack Engineering',
        body: 'A decade of experience across mobile apps, backend services, Docker, Git and CI pipelines.',
    },
]

const EDUCATION = [
    {
        title: 'MSc Intelligent Adaptive Systems (IAS)',
        school: 'University of Hamburg, Germany',
        body: 'International, research-oriented Master’s programme integrating computer science, robotics and neurocognition. Admission rate: 5% of applicants.',
        accent: 'primary',
    },
    {
        title: 'B.E. in Computer Science',
        school: 'Visvesvaraya Technological University, India',
        body: 'One of the premier engineering universities in India, with a strong focus on computer science fundamentals and practical engineering skills.',
        accent: 'secondary',
    },
]

const ACCENTS = {
    primary: 'border-primary-500 dark:border-primary-400',
    secondary: 'border-secondary-500 dark:border-secondary-400',
}

const ACCENT_TEXT = {
    primary: 'text-primary-600 dark:text-primary-400',
    secondary: 'text-secondary-600 dark:text-secondary-400',
}

export default function About() {
    return (
        <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
                id="about-title"
                eyebrow="About"
                title="Turning data into models that work"
                description="Research engineer with a software engineering backbone."
            />

            <p className="reveal mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-slate-600 dark:text-slate-300">
                I specialise in AI engineering — building end-to-end data pipelines for training, fine-tuning
                and evaluating large language models (LLMs). I design scalable data ingestion, preprocessing,
                labeling and evaluation workflows, and implement model versioning, monitoring and CI/CD to keep
                models production-ready. My strong background in software engineering (mobile apps, backend
                services, Docker, Git, and CI pipelines) ensures ML systems are robust, maintainable and scalable.
            </p>

            {/* Highlight cards */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {HIGHLIGHTS.map(item => (
                    <div
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900"
                    >
                        <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.body}</p>
                    </div>
                ))}
            </div>

            {/* Education */}
            <div className="mt-16">
                <h3 className="text-center font-display text-xl font-semibold text-slate-900 dark:text-white">
                    Education
                </h3>
                <div className="mx-auto mt-6 grid max-w-4xl gap-6 sm:grid-cols-2">
                    {EDUCATION.map(item => (
                        <div
                            key={item.title}
                            className={`rounded-2xl border border-slate-200 border-l-4 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900 ${
                                ACCENTS[item.accent]
                            }`}
                        >
                            <h4 className={`font-display text-base font-semibold ${ACCENT_TEXT[item.accent]}`}>
                                {item.title}
                            </h4>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.school}</p>
                            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
