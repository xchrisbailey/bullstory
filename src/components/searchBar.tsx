import React, { FC } from 'react'
import styled from 'styled-components'

const SearchBar: FC = () => {
  return <SearchInput placeholder="ticker" />
}

export default SearchBar

const SearchInput = styled.input`
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
