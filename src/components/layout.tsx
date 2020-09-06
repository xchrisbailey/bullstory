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
  background: ${(props) => props.theme.darkGrey};
  height: 6em;
  margin: 0 0 1em 0;
  width: 100%;
`

const HeaderContainer = styled(Container)`
  align-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: left;
`

const Brand = styled.p`
  color: ${(props) => props.theme.primary};
  font-family: 'Merriweather', serif;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: 2rem;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`
