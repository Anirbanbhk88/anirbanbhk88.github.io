import { Html, Head, Main, NextScript } from 'next/document'

// Runs before first paint: restores the persisted theme (localStorage "theme")
// or falls back to the OS preference, so there is no flash of the wrong theme.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = stored ? stored === 'dark' : prefersDark;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`

export default function Document() {
    return (
        <Html lang="en" suppressHydrationWarning>
            <Head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f8fafc" />
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0b1120" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
