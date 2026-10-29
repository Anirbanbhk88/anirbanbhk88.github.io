/**
 * Work experience — newest first, straight from the CV. Edit or extend entries
 * here; the Experience section renders this list automatically.
 */
export const experience = [
    {
        role: 'Research Engineer',
        org: 'Fraunhofer IAIS',
        location: 'Sankt Augustin, Germany',
        period: '12/2023 – Present',
        current: true,
        bullets: [
            'Designed and maintained data pipelines for training large language models (e.g., Teuken 7B).',
            'Built and scaled an automated synthetic-data generation pipeline from scratch, introducing LLM-as-a-Judge and faithfulness/relevance metrics to validate model readiness for public applications.',
            'Owned an end-to-end LLM evaluation framework for a continuously pre-trained model optimised for German administrative data, and developed a data-visualisation tool with a custom UI that cut data-selection time by ~20%.',
            'Curated PDF files for the document-processing pipeline in KIMBA, a joint research project with BMW, plus domain-specific and commercial datasets for RAG-based language models.',
            'Co-led a Gaia-X node unifying fragmented datasets and software into a federated catalog, led data-catalog tool evaluation, and mentored a junior engineer and students on LLM training-data curation.',
        ],
    },
    {
        role: 'Founding Engineer',
        org: 'Healthcare Startup',
        location: 'Germany',
        period: 'Earlier',
        bullets: [
            'Co-founded a healthcare platform, transforming initial product concepts into a production-ready MVP.',
            'Engineered a Flutter mobile app from scratch, Python backend services and a self-hosted LLM integration.',
            'Set up DevOps pipelines to ship and iterate reliably.',
            'Led cross-functional collaboration between medical researchers, product design and engineering to iterate rapidly on user feedback and technical feasibility.',
        ],
    },
    {
        role: 'Master Thesis Student',
        org: 'Aptiv',
        location: 'Wuppertal, Germany',
        period: '02/2022 – 10/2022',
        bullets: [
            'Researched and improved a LiDAR–camera sensor-fusion deep neural network for 3D object detection in autonomous driving (ADAS).',
            'Automated ground-truth generation, saving ~25% of effort hours in the process.',
            'Containerised trained models with Docker and deployed them via CI/CD pipelines for stakeholder use.',
        ],
    },
    {
        role: 'Internship',
        org: 'Omdena',
        location: 'Germany (remote)',
        period: '08/2022 – 10/2022',
        bullets: [
            'Performed web scraping of product data from German supermarkets and other websites.',
            'Cleaned and processed heterogeneous data sources for analysis.',
            'Built a dashboard displaying and comparing CO₂ emissions across food categories.',
        ],
    },
    {
        role: 'Student Assistant (HiWi)',
        org: 'Language Technology Group, Universität Hamburg',
        location: 'Hamburg, Germany',
        period: '07/2021 – 03/2022',
        bullets: [
            'Prepared data and performed exploratory data analysis for natural language processing research.',
            'Built Bi-LSTM and BERT models for hate-speech classification in movie subtitles.',
            'Deployed the model as a Flask web app with Docker and Kubernetes, and open-sourced it on Hugging Face.',
            'Performed statistical analysis of large datasets for training ML models for second-language learning.',
        ],
    },
    {
        role: 'Working Student',
        org: 'NXP Semiconductors',
        location: 'Hamburg, Germany',
        period: '09/2020 – 04/2021',
        bullets: [
            'Developed an Android app for IoT (“Internet of Food and Farms”).',
            'Performed critical debugging and bug-fixing in C++ code for IoT devices.',
        ],
    },
    {
        role: 'Consultant',
        org: 'Tata Consultancy Services (TCS)',
        location: 'Kolkata, India',
        period: '12/2013 – 09/2019',
        bullets: [
            'Performed predictive analysis of app-usage data using deep learning (LSTM, RNN) and built statistical ML POCs (SVM, regression).',
            'Managed iOS and SAP UI5 development for KPMG’s enterprise application serving 10,000+ users — driving Agile delivery, code reviews and bug-fixing that elevated code quality by 50%, and mentoring junior team members.',
            'Delivered an iOS app for Philip Morris across the Ukraine, South Africa and Switzerland markets, representing the team to stakeholders during on-site deputation in South Africa.',
            'Enhanced hybrid mobile app features to ensure compatibility across multiple devices.',
        ],
    },
    {
        role: 'Senior Software Developer',
        org: 'Indusnet Technologies',
        location: 'Kolkata, India',
        period: '11/2011 – 11/2013',
        bullets: [
            'Started my career as an iOS app developer, shipping several native iOS applications.',
            'Developed RESTful APIs for seamless app functionality.',
            'Collaborated closely with design and backend teams to ensure effective coordination and integration.',
        ],
    },
]
