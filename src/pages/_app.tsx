import GoogleFonts from 'next-google-fonts'

import GlobalStyles from '../styles/GlobalStyles'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { ReactElement } from 'react'

export default function App({ Component, pageProps }): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Merriweather&family=Noto+Sans&display=swap" />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
