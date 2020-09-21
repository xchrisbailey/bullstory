import { GetServerSideProps } from 'next'
import React, { FC } from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('../components/chart'), { ssr: false })

import { Layout } from '../components/layout'
import styled from 'styled-components'

interface Props {
  data: {
    data: any[]
    pagination: any
  }
  info: any
}

const Stock: FC<Props> = ({ data, info }) => {
  const d = data.data

  return (
    <Layout>
      <CompanyTitle>{info.name}</CompanyTitle>
      <Chart data={d} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const search = query.ticker
  const data_res = await fetch(
    `http://api.marketstack.com/v1/eod?access_key=${process.env.MARKETSTACK_APIKEY}&symbols=${search}&limit=30`
  )
  const data = await data_res.json()

  const info_res = await fetch(
    `http://api.marketstack.com/v1/tickers/${search}?access_key=${process.env.MARKETSTACK_APIKEY}`
  )
  const info = await info_res.json()

  return {
    props: { data, info },
  }
}

export default Stock

const CompanyTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: bold;
`
