import React, { FC, ReactNode } from 'react'

import styled from 'styled-components'
import { Container } from '../styles/Container'

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar>
        <HeaderContainer>
          <Brand>BullStory</Brand>
        </HeaderContainer>
      </Navbar>
      <Container>{children}</Container>
    </>
  )
}

const Navbar = styled.section`
  width: 100%;
  background: #222;
  height: 3rem;
`

const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  align-content: center;
`

const Brand = styled.p`
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  line-height: 2rem;
  letter-spacing: 0.1em;
  color: #ccc;
  text-transform: uppercase;
  font-family: 'Merriweather', serif;
`
