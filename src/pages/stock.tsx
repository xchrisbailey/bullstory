import { GetServerSideProps } from 'next'
import React, { FC } from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('../components/chart'), { ssr: false })

import { Layout } from '../components/layout'
import styled from 'styled-components'

interface IProps {
  data: {
    data: IDayInfo[]
    pagination: {
      count: number
      limit: number
      offset: number
      total: number
    }
  }
  info: {
    country: string
    has_eod: boolean
    has_intraday: boolean
    name: string
    stock_exchange: {
      acronym: string
      city: string
      country: string
      country_code: string
      mic: string
      name: string
      website: string
    }
  }
}

interface IDayInfo {
  adj_close: number
  adj_high: number
  adj_low: number
  adj_open: number
  adj_volume: number
  close: number
  date: string
  exchange: string
  high: number
  low: number
  open: number
  symbol: string
  volume: number
}

const Stock: FC<IProps> = ({ data, info }): JSX.Element => {
  const d = data.data

  return (
    <Layout>
      <CompanyTitle>{info.name}</CompanyTitle>
      <HighLowDisplay high={d[0].high} low={d[0].low} />
      <Chart data={d} />
    </Layout>
  )
}

const HighLowDisplay: FC<{ high: number; low: number }> = ({
  high,
  low,
}): JSX.Element => {
  return (
    <>
      <DayLevels>
        <p style={{ color: 'green', marginRight: '1rem' }}>☝️ {high}</p>
        <p style={{ color: 'red' }}>☟ {low}</p>
      </DayLevels>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
}): Promise<{ props: { data: any; info: any } }> => {
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

const DayLevels = styled.div`
  display: flex;
  justifycontent: start;
`
