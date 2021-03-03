import React from 'react'
import styled from 'styled-components'
import { flexCenter } from '../styled'
import { StButton } from './common/Button'

const Wrapper = styled.div`
  ${flexCenter}
  height: 50px;
`

export default function Header(props) {
  return (
    <Wrapper>
      <StButton
        variant="contained"
        size="medium"
        color="primary"
        onClick={props.PlayerX}
        header
      >
        X
      </StButton>

      <StButton
        variant="contained"
        size="medium"
        color="primary"
        onClick={props.PlayerO}
        header
      >
        O
      </StButton>
    </Wrapper>
  )
}
