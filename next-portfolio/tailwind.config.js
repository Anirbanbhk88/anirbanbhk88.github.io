const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './data/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Refined professional accent scale (indigo → violet)
                primary: {
                    50: '#eef2ff',
                    100: '#e0e7ff',
                    200: '#c7d2fe',
                    300: '#a5b4fc',
                    400: '#818cf8',
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                    950: '#1e1b4b',
                },
                secondary: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#7c3aed',
                    700: '#6d28d9',
                    800: '#5b21b6',
                    900: '#4c1d95',
                    950: '#2e1065',
                },
                // Semantic surface tokens backed by CSS variables (see styles/globals.css)
                surface: {
                    light: 'var(--surface)',
                    muted: 'var(--surface-2)',
                },
                ink: {
                    DEFAULT: 'var(--text)',
                    muted: 'var(--text-muted)',
                },
                line: 'var(--border)',
            },
            fontFamily: {
                sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
                display: ['var(--font-display)', 'var(--font-inter)', ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                soft: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.08)',
                lift: '0 12px 32px rgba(15, 23, 42, 0.16)',
            },
        },
    },
    plugins: [],
}
