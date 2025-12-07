import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import AIBanner from '../components/AIBanner'

export default function Home() {
    const [dark, setDark] = useState(false)
    const bannerRef = useRef(null)

    useEffect(() => {
        if (dark) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
    }, [dark])

    useEffect(() => {
        // parallax effect for hero banner: translateY based on banner position
        if (typeof window === 'undefined') return
        let ticking = false
        function onScroll() {
            if (!bannerRef.current) return
            const rect = bannerRef.current.getBoundingClientRect()
            // compute small parallax translate based on distance from viewport top
            // reduced intensity for a subtler effect
            const y = Math.max(Math.min(-rect.top * 0.08, 24), -24)
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    bannerRef.current.style.transform = `translateY(${y}px)`
                    ticking = false
                })
                ticking = true
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        // initial position
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        // cursor-based parallax on banner nodes
        if (typeof window === 'undefined') return
        const container = bannerRef.current
        if (!container) return

        const svgRoot = container.querySelector('svg')
        if (!svgRoot) return

        const nodes = svgRoot.querySelectorAll('.node, .float')
        let rafId = null
        let last = { x: 0, y: 0 }

        function onMove(e) {
            const rect = container.getBoundingClientRect()
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2
            const pointerX = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || cx
            const pointerY = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || cy
            // normalized -1..1
            const nx = (pointerX - cx) / (rect.width / 2)
            const ny = (pointerY - cy) / (rect.height / 2)
            last.x = nx
            last.y = ny
            if (!rafId) {
                rafId = window.requestAnimationFrame(() => {
                    // apply transforms with different depth multipliers
                    nodes.forEach((n, i) => {
                        const depth = (i % 3 + 1) * 6 // 6,12,18
                        const tx = (-last.x) * depth * 0.6
                        const ty = (-last.y) * depth * 0.35
                        n.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
                    })
                    rafId = null
                })
            }
        }

        function onLeave() {
            if (rafId) { window.cancelAnimationFrame(rafId); rafId = null }
            nodes.forEach(n => { n.style.transform = 'translate3d(0,0,0)' })
        }

        container.addEventListener('mousemove', onMove)
        container.addEventListener('touchmove', onMove, { passive: true })
        container.addEventListener('mouseleave', onLeave)
        container.addEventListener('touchend', onLeave)

        return () => {
            container.removeEventListener('mousemove', onMove)
            container.removeEventListener('touchmove', onMove)
            container.removeEventListener('mouseleave', onLeave)
            container.removeEventListener('touchend', onLeave)
            if (rafId) window.cancelAnimationFrame(rafId)
        }
    }, [bannerRef])

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
            <section className="w-full h-96 relative" id="hero-banner">
                <div ref={bannerRef} className="absolute inset-0 w-full h-full" style={{ willChange: 'transform' }}>
                    <AIBanner className="w-full h-full" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-gray-900"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center">
                        <div className="relative inline-block reveal delay-150 floaty">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-full blur-lg opacity-40"></div>
                            <img src="/images/portfolio1.jpeg" alt="Anirban" className="relative w-48 h-48 rounded-full mx-auto border-4 border-white dark:border-slate-800 object-cover object-center shadow-2xl scale-75" />
                        </div>
                        <div className="mt-4 text-lg font-medium text-white drop-shadow-lg reveal delay-250">Anirban Bhowmick</div>
                        <div className="mt-1 text-sm text-gray-100 drop-shadow reveal delay-350">ML Engineer • Data Scientist • Full-stack Developer</div>
                    </div>
                </div>
            </section>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <section className="text-center mb-12">
                    <div className="mt-6 flex justify-center gap-3">
                        <a href="https://drive.google.com/file/d/1F-lm2JaF_nqskqLlLozDVE1Xe5oQ1cA6/view?usp=drive_link" target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 reveal delay-250">Download CV</a>
                        <a href="https://github.com/Anirbanbhk88" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700 reveal delay-300">GitHub</a>
                        <a href="https://www.linkedin.com/in/anirbanbhk/" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-700 reveal delay-350">LinkedIn</a>
                    </div>
                </section>

                <section id="about" className="mt-12">‚
                    <h2 className="text-2xl font-semibold reveal delay-150">About</h2>
                    <p className="mt-3 text-gray-700 dark:text-gray-300 reveal delay-250">I specialise in AI engineering — building end-to-end data pipelines for training, fine-tuning and evaluating large language models (LLMs). I design scalable data ingestion, preprocessing, labeling and evaluation workflows, and implement model versioning, monitoring and CI/CD to keep models production-ready. My strong background in software engineering (mobile apps, backend services, Docker, Git, and CI pipelines) ensures ML systems are robust, maintainable and scalable.</p>
                </section>

                <section id="education" className="mt-16">
                    <h2 className="text-2xl font-semibold">Education</h2>
                    <div className="mt-4 space-y-4">
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-indigo-600 reveal delay-150">
                            <h3 className="font-semibold text-indigo-600">MSc Intelligent Adaptive Systems (IAS)</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">University of Hamburg, Germany</p>
                            <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">International, research-oriented Master's programme integrating computer science, robotics and neurocognition. Admission rate: 5% of applicants.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border-l-4 border-purple-600 reveal delay-250">
                            <h3 className="font-semibold text-purple-600">Bachelor of Engineering (B.E.) in Computer Science</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Visvesvaraya Technological University, India</p>
                            <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">One of the premier Engineering Universities in India with a strong focus on computer science fundamentals and practical engineering skills.</p>
                        </div>
                    </div>
                </section>

                <section id="skills" className="mt-10">
                    <h2 className="text-2xl font-semibold">Skills</h2>
                    <div className="mt-4 grid sm:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm reveal delay-150">
                            <h3 className="font-semibold">Data Science & ML</h3>
                            <ul className="mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Python, TensorFlow, PyTorch</li>
                                <li>Scikit-Learn, MLflow</li>
                                <li>Matplotlib / Seaborn, Power BI</li>
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm reveal delay-250">
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
                        <article className="project-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow reveal delay-150">
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
                        <article className="project-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow reveal delay-250">
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
                        <article className="project-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow reveal delay-350">
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
                    <h2 className="text-2xl font-semibold reveal delay-150">Contact</h2>
                    <div className="mt-3 text-gray-700 dark:text-gray-300 reveal delay-250">
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
