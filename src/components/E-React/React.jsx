import JumboSectionHeader from 'components/common/JumboSectionHeader'
import { ReactComponentData } from 'config/reactComponent.config'
import styled, { keyframes } from 'styled-components'
import { P } from 'components/common/typography'
import Pros from 'components/E-React/pros'
import { SvgLoader } from 'react-svgmt'
import Reacticon from 'img/react.svg'
import React from 'react'
import { getPLineHight } from 'selectors/pageContent.selector'
import { connect } from 'react-redux'

const height = '350px'
const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }

`
const Wrapper = styled.div`
  margin: 0px;
  width: 100%;
  background-color: #17293f;
`
const ContentWrapper = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    width: 80%;
  }
  width: 1000px;
  margin: auto;
`

const LeftWrapper = styled.div`
  margin: 20px 0px;
  @media (max-width: 992px) {
    width: 100%;
  }
  width: 60%;
`

const ProsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`
const ReactIcon = styled(SvgLoader)`
  animation: ${rotate} 30s infinite linear;
  display: flex;
  height: 270px;
  width: 300px;
  .background {
    fill: rgba(41, 87, 111, 0.46);
  }
  .ring {
    fill: #17293f;
  }
`
const RightWrapper = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: ${height};
`
const StP = styled(P)`
  line-height: ${p=>p.p_line_height}px;
  @media (min-width: 1000px) {
    margin-top: 17px;
  }
  margin-bottom: 15px;
`
function ReactSection(props) {
  return (
    <Wrapper id="react">
      <ContentWrapper>
        <LeftWrapper>
          <JumboSectionHeader dark>
            {ReactComponentData.Header}
          </JumboSectionHeader>

          <StP p_line_height={props.pLineHeight} dark>{ReactComponentData.MainText}</StP>

          <ProsWrapper>
            {ReactComponentData.Pros.map((pro, i) => {
              return (
                <Pros key={i} dark>
                  {pro}
                </Pros>
              )
            })}
          </ProsWrapper>
        </LeftWrapper>
        <RightWrapper>
          <ReactIcon path={Reacticon}> </ReactIcon>
        </RightWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const mapStateToProps = (state)=>{
 return { pLineHeight: getPLineHight(state) }
}

export default connect(mapStateToProps)(ReactSection)