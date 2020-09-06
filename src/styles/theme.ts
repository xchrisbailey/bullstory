import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string
    fg: string
    primary: string
    darkGrey: string
  }
}

export const theme: DefaultTheme = {
  bg: '#fff',
  fg: '#333',
  primary: '#7F96FF',
  darkGrey: '#222',
}
