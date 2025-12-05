import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        if (dark) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
    }, [dark])

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
            <Head>
                <title>Anirban Bhowmick — Portfolio</title>
                <meta name="description" content="Anirban Bhowmick — Data Scientist / ML Engineer" />
            </Head>

            <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-xl font-semibold">Anirban Bhowmick</div>
                    <nav className="space-x-4 text-sm">
                        <a href="#about" className="hover:underline">About</a>
                        <a href="#education" className="hover:underline">Education</a>
                        <a href="#skills" className="hover:underline">Skills</a>
                        <a href="#work" className="hover:underline">Work</a>
                        <a href="#contact" className="hover:underline">Contact</a>
                        <button onClick={() => setDark(d => !d)} className="ml-3 px-3 py-1 rounded-md border text-sm">{dark ? 'Light' : 'Dark'}</button>
                    </nav>
                </div>
            </header>

            {/* Full-width Hero Banner */}
            <section className="w-full h-96 relative">
                <img src="/ai-banner.svg" alt="AI Portfolio Banner" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-900"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full blur-lg opacity-40"></div>
                            <img src="/images/portfolio1.jpeg" alt="Anirban" className="relative w-48 h-48 rounded-full mx-auto border-4 border-white dark:border-slate-800 object-cover object-center shadow-2xl scale-75" />
                        </div>
                        <div className="mt-4 text-lg font-medium text-white drop-shadow-lg">Anirban Bhowmick</div>
                        <div className="mt-1 text-sm text-gray-100 drop-shadow">ML Engineer • Data Scientist • Full-stack Developer</div>
                    </div>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <section className="text-center mb-12">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">I build production-ready machine learning systems, web & mobile applications, and research tools. I'm currently working as a Research Engineer at Fraunhofer IAIS.</p>
                    <div className="mt-6 flex justify-center gap-3">
                        <a href="https://drive.google.com/file/d/1U0QgozbjKam-I7ecLs6rKTmGlSInWODk/view?usp=sharing" target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">Download CV</a>
                        <a href="https://github.com/Anirbanbhk88" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700">GitHub</a>
                        <a href="https://www.linkedin.com/in/anirbanbhk/" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700">LinkedIn</a>
                    </div>
                </section>

                <section id="education" className="mt-16">
                    <h2 className="text-2xl font-semibold">Education</h2>
                    <div className="mt-4 space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-indigo-600">
                            <h3 className="font-semibold text-indigo-600">MSc Intelligent Adaptive Systems (IAS)</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">University of Hamburg, Germany</p>
                            <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">International, research-oriented Master's programme integrating computer science, robotics and neurocognition. Admission rate: 5% of applicants.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-purple-600">
                            <h3 className="font-semibold text-purple-600">Bachelor of Engineering (B.E.) in Computer Science</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Visvesvaraya Technological University, India</p>
                            <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">One of the premier Engineering Universities in India with a strong focus on computer science fundamentals and practical engineering skills.</p>
                        </div>
                    </div>
                </section>

                <section id="skills" className="mt-10">
                    <h2 className="text-2xl font-semibold">Skills</h2>
                    <div className="mt-4 grid sm:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <h3 className="font-semibold">Data Science & ML</h3>
                            <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Python, TensorFlow, PyTorch</li>
                                <li>Scikit-Learn, MLflow</li>
                                <li>Matplotlib / Seaborn, Power BI</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <h3 className="font-semibold">Software Engineering</h3>
                            <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li>JavaScript, React, Next.js</li>
                                <li>Flask, Django</li>
                                <li>Swift, Kotlin, Docker, Git</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="work" className="mt-10">
                    <h2 className="text-2xl font-semibold">Selected Projects</h2>
                    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Project card 1 */}
                        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/img-1.jpg')" }}></div>
                            <div className="p-4">
                                <h3 className="font-semibold">Project 01</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">A demo website featuring modern UI and animations.</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <a className="text-indigo-600 text-sm" href="#">View</a>
                                    <span className="text-xs text-gray-500">Website</span>
                                </div>
                            </div>
                        </article>

                        {/* Project card 2 */}
                        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/img-2.jpg')" }}></div>
                            <div className="p-4">
                                <h3 className="font-semibold">Project 02</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">ML model deployment and monitoring example.</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <a className="text-indigo-600 text-sm" href="#">View</a>
                                    <span className="text-xs text-gray-500">ML</span>
                                </div>
                            </div>
                        </article>

                        {/* Project card 3 */}
                        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/img-3.jpg')" }}></div>
                            <div className="p-4">
                                <h3 className="font-semibold">Project 03</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Mobile app with native features and CI pipelines.</p>
                                <div className="mt-3 flex items-center justify-between">
                                    <a className="text-indigo-600 text-sm" href="#">View</a>
                                    <span className="text-xs text-gray-500">Mobile</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <section id="contact" className="mt-10">
                    <h2 className="text-2xl font-semibold">Contact</h2>
                    <div className="mt-3 text-gray-700 dark:text-gray-300">
                        <p>Email: <a href="mailto:anirbanbhowmick88@gmail.com" className="text-indigo-600">anirbanbhowmick88@gmail.com</a></p>
                        <p className="mt-1">Location: Hamburg, Germany</p>
                        <p className="mt-1">Phone: +49 17657986552</p>
                    </div>
                </section>

            </main>

            <footer className="border-t bg-white dark:bg-gray-800">
                <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Anirban Bhowmick.</div>
            </footer>
        </div>
    )
}
