import { rightData } from 'store/footer'
import { BackgroundBlue } from 'styled'
import styled, { css } from 'styled-components'
import Particles from 'react-particles-js'
import { getYear } from 'factory'
import React, { useState } from 'react'

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
  height: 100%;
  width: 100%;
`
const InnerWrapper = styled.div`
  height: 100px;
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
  width: 60%;
  @media (max-width: 992px) {
    display: none;
  }
`
const Mobile = styled.div`
  margin: auto;
  display: none;
  @media (max-width: 992px) {
    text-align: center;
    padding: 20px;
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
  margin: auto;
  cursor: pointer;
  color: #fff;
  display: flex;
  width: 379px;
  @media (max-width: 400px) {
    display: block;
    width: 300px;
  }
`
const Nick = styled.p`
  margin: 0px 3px;
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
`
export default function Footer() {
  let [nick, setNick] = useState(false)
  function mouseEnterH2() {
    setNick((p) => (nick = !p))
  }
  return (
    <Wrapper onMouseEnter={mouseEnterH2} onMouseLeave={mouseEnterH2}>
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
              value: 0.4,
              random: true,
            },
            links: {
              enable: true,
              opacity: 0.1,
            },
          },
        }}
      />
      <InnerWrapper>
        <Left></Left>
        <Mid>
          <H2>
            All rights reserved <Nick nick={nick}> pavdev </Nick> London
            {getYear()}
          </H2>
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
          <H2>
            All rights reserved <Nick nick={nick}> pavdev </Nick> London
            {` ${getYear()}`}
          </H2>
          <ul>
            {rightData.map((li, i) => {
              return (
                <li key={i}>
                  <Text>{li}</Text>
                </li>
              )
            })}
          </ul>
        </Mobile>
      </InnerWrapper>
    </Wrapper>
  )
}
