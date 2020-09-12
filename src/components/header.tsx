import React, { FC } from 'react'
import styled from 'styled-components'
import { Container } from '../styles/Container'
import SearchBar from './searchBar'

const Header: FC = () => {
  return (
    <Navbar>
      <HeaderContainer>
        <Brand>BullStory</Brand>
        <SearchBar />
      </HeaderContainer>
    </Navbar>
  )
}

export default Header

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
