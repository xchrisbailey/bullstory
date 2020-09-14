import React, { FC } from 'react'
import { LineChart, XAxis, YAxis, Line, Tooltip } from 'recharts'
import styled from 'styled-components'

interface Props {
  data: any[]
}

const Chart: FC<Props> = ({ data }) => {
  return (
    <ChartBox>
      <LineChart width={700} height={400} data={data}>
        <XAxis dataKey="date" reversed hide />
        <YAxis hide />
        <Tooltip
          labelFormatter={(v) => {
            const cleanDate = new Date(v)
            return cleanDate.toDateString()
          }}
        />
        <Line type="monotone" dataKey="adj_close" stroke="#3a86ff" />
        <Line type="monotone" dataKey="adj_low" stroke="#ff006e" />
      </LineChart>
    </ChartBox>
  )
}

const ChartBox = styled.div`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`

export default Chart
