import React from 'react'
import { flexCenter, boxShadow1 } from '../styled'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const Cell = styled.div`
  cursor: pointer;
  border-radius: 5px;
  height: 100px;
  width: 100px;
  background: #a1cae2;
  margin: 30px;
  ${flexCenter};
  font-size: 40px;
  color: black;
  ${boxShadow1}
`

export default function Row(props) {
  return (
    <Wrapper>
      {props.row[props.index].map((item, i) => {
        return (
          <Cell
            onClick={(index) => {
              props.CellClick(index)
            }}
            key={i}
            id={i}
          >
            {item}
          </Cell>
        )
      })}
    </Wrapper>
  )
}
