/**
 * Publications and the Master's thesis — straight from the CV. Never fabricate
 * DOIs or publisher links: `link` is optional and only set where an
 * author-provided document actually exists (currently the thesis PDF).
 */
export const papers = [
    {
        title: 'Temporal Sensor Fusion for 3D Object Detection in Autonomous Driving',
        year: 2023,
        venue: "Master's Thesis — MSc Intelligent Adaptive Systems, Universität Hamburg (conducted at Aptiv, Germany)",
        authors: ['Anirban Bhowmick'],
        highlight: 'Anirban Bhowmick',
        description:
            'Developed and improved a LiDAR–camera sensor-fusion deep neural network for 3D object detection in autonomous driving (ADAS). Enhanced the fusion network with temporal features from sequential data using ConvLSTM layers and automated ground-truth generation during the industry project at Aptiv.',
        link: 'https://drive.google.com/file/d/1QD8jGzeL489dAFbRFqMOVpNOr-Inh73a/view?usp=drive_link',
    },
    {
        title: 'How Hateful are Movies? A study and prediction of Hate content on Movies',
        year: 2021,
        venue: 'KONVENS 2021 — 17th Conference on Natural Language Processing',
        pages: 'pp. 37–48',
        authors: [
            'Niklas von Boguszewski',
            'Sana Moin',
            'Anirban Bhowmick',
            'Seid Muhie Yimam',
            'Chris Biemann',
        ],
        highlight: 'Anirban Bhowmick',
        description:
            'Hate-speech detection classifiers (Bi-LSTM, mBERT, BoW) for movie subtitles; established a pioneering benchmark dataset of 11k movie subtitles; model open-sourced on Hugging Face for future research.',
    },
    {
        title: 'Sentiment Analysis of Low Resource Languages (Bengali) using Transformers',
        year: 2021,
        venue: 'ICON 2021 — 18th International Conference on Natural Language Processing',
        pages: 'pp. 481–486',
        authors: ['Anirban Bhowmick', 'Abhik Jana'],
        highlight: 'Anirban Bhowmick',
        description:
            'Transfer learning on Transformer architectures for low-resource Indian languages (Bengali); fine-tuned BERT classifiers on wiki, news and YouTube datasets; validated the optimal model through A/B testing.',
    },
]
