import React, { FC, ReactNode } from 'react'

import { Container } from '../styles/Container'
import Header from './header'

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}
