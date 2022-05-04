import { rightData } from 'config/footer.config'
import { BackgroundBlue } from 'styled'
import styled, { css } from 'styled-components'
import Particles from 'react-particles-js'
import { getYear } from 'factory'
import React, { Component } from 'react'
import VisitorCounter from 'components/H-Footer/VisitorCounter'

const center = css`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`

const Wrapper = styled.div`
  position: relative;
  ${BackgroundBlue}
  width: 100%;
`
const StParticles = styled(Particles)`
  position: absolute;
  height: 90%;
  width: 100%;
`
const InnerWrapper = styled.div`
  height: 90px;
  display: flex;
  margin: auto;
  width: 95%;
  @media (max-width: 992px) {
    display: block;
    height: auto;
  }
`
const Left = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
  ${center};
  width: 20%;
`

const Mid = styled.div`
  ${center};
  flex-direction:column;
  width: 60%;
  @media (max-width: 992px) {
    display: none;
  }
`
const Mobile = styled.div`
  display: none;
  @media (max-width: 992px) {
    text-align: center;
    padding: 10px;
    display: block;
    margin: auto;
  }
`

const Right = styled.div`
  ${center};
  width: 20%;
  @media (max-width: 992px) {
    display: none;
  }
`
const NickHover = css`
  color: #01579b;
  font-size: 20px;
`

const H2 = styled.h2`
width:100%;
  opacity:80%;
  font-size:13px ;
  cursor: pointer;
  color: #fff;
  padding:0px;
  margin:5px 0px 0px 0px;
  display:flex;
  justify-content:center ;
`
const Nick = styled.p`
  margin: -4px 3px;
  font-size: 20px;
  font-weight: 600;
  ${(p) =>
    p.nick
      ? css`
          ${NickHover}
        `
      : css`
          color: #fff;
        `};
`
const Text = styled.p`
  color: #fff;
  opacity:80%;
  font-size:13px ;
`
class Footer extends Component{

  constructor(props){
    super(props)
    this.state = {
      nick:false
    }

    this.mouseEnterH2 =this.mouseEnterH2.bind(this)
  }

  mouseEnterH2() {
   this.setState({
     nick:!this.state.nick
   })
  }

  FooterHeader(nick){
    const HeaderWrapper = styled.div`
    text-align:center;
    padding: 0px !important;
    margin:0px auto;
    width: 280px;
    @media (max-width: 400px) {
      width: 265px;
    }
    `
    return(
      <HeaderWrapper>
        <H2> 
          All rights reserved <Nick nick={nick}> pavdev </Nick>
        </H2>
        <H2>
          London {getYear()}
        </H2>
      </HeaderWrapper> 
    )
  }

  render(){
    return (
      <Wrapper onMouseEnter={this.mouseEnterH2} onMouseLeave={this.mouseEnterH2}>
        <StParticles
          params={{
            particles: {
              number: {
                value: 30,
              },
              size: {
                value: 1,
              },
              autoPlay: true,
  
              opacity: {
                value: 0.06,
                random: true,
              },
              links: {
                enable: true,
                opacity: 0.06,
              },
            },
          }}
        />
        <InnerWrapper>
          <Left></Left>
          <Mid>
            {this.FooterHeader(this.state.nick)}
            <VisitorCounter visitors={this.props.visitors} ></VisitorCounter>
          </Mid>
          <Right>
            <ul>
              {rightData.map((li, i) => {
                return (
                  <li key={i}>
                    <Text>{li}</Text>
                  </li>
                )
              })}
            </ul>
          </Right>
          <Mobile>
            {this.FooterHeader(this.state.nick)}
          </Mobile>
        </InnerWrapper>
      </Wrapper>
    )
  }
}
