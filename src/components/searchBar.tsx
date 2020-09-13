import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import styled from 'styled-components'

const SearchBar: FC = () => {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')
  const submitSearch = (e: any) => {
    e.preventDefault()
    router.push({
      pathname: `/stock`,
      query: { ticker: searchText },
    })
  }

  return (
    <form onSubmit={submitSearch}>
      <SearchInput
        placeholder="ticker"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  )
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
