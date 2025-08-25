import { P } from 'components/common/typography'
import styled from 'styled-components'
import { ReactComponent as IconSvg } from 'img/icon/done_24px.svg'
import React from 'react'

const Wrapper = styled.div`
  margin: 0px;
  width: 190px;
  display: flex;
  align-items: center;
`
const Icon = styled(IconSvg)`
  margin: 0px 4px 0px 0px;
  height: 20px;
`
const StP = styled(P)`
  margin: 0px;
  padding: 0px;
`
export default function Pros({ ...props }) {
  return (
    <Wrapper>
      <Icon />
      <StP {...props}>{props.children}</StP>
    </Wrapper>
  )
}
