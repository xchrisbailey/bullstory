import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {
    font-size: 112.5%;
  } /*18px*/

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${(props) => props.theme.bg};
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    line-height: 1.65;
    color: ${(props) => props.theme.fg};
  }

  p {
    margin-bottom: 1.15rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.75rem 0 1.05rem;
    font-family: 'Merriweather', serif;
    font-weight: 400;
    line-height: 1.15;
  }

  h1 {
    margin-top: 0;
    font-size: 4.209em;
  }

  h2 {
    font-size: 3.157em;
  }

  h3 {
    font-size: 2.369em;
  }

  h4 {
    font-size: 1.777em;
  }

  h5 {
    font-size: 1.333em;
  }

  small,
  .text_small {
    font-size: 0.75em;
  }
`

export default GlobalStyles
