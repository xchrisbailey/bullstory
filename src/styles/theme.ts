import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string
    fg: string
    primary: string
    secondary: string
    red: string
    yellow: string
    darkGrey: string
  }
}

export const theme: DefaultTheme = {
  bg: '#fffffc',
  fg: '#333',
  primary: '#3a86ff',
  secondary: '#8338ec',
  yellow: '#ffbe0b',
  red: '#ff006e',
  darkGrey: '#252422',
}
