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
          <SearchBar placeholder="ticker" />
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
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`

const Brand = styled.p`
  color: ${(props) => props.theme.yellow};
  font-family: 'Merriweather', serif;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.15em;
  line-height: 2rem;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  flex-grow: 2;
`

const SearchBar = styled.input`
  outline: none;
  border: none;
  min-width: 35%;
  height: 1.5em;
  font-size: 1em;
  border-radius: 1em;
  padding: 0.25em 1em;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
`
