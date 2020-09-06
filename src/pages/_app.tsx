import GoogleFonts from 'next-google-fonts'

import GlobalStyles from '../styles/GlobalStyles'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Merriweather&family=Noto+Sans&display=swap" />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
