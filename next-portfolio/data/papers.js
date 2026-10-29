/**
 * Peer-reviewed publications — straight from the CV. No link/URL fields on
 * purpose: never fabricate DOIs or publisher links.
 */
export const papers = [
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
