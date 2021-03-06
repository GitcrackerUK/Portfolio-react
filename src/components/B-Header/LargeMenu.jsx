import React, { useEffect, useState } from 'react'
import dropdown from 'img/icon/dropdown.svg'
import 'react-slidedown/lib/slidedown.css'
import styled from 'styled-components'
import { SvgLoader } from 'react-svgmt'
import logo from 'img/pavdev.svg'
import { Menu } from 'store/headerMenu'

const Wrapper = styled.div`
  display: flex;
  height: 110px;
  width: 100%;
`
const InnerMainNav = styled.div`
  display: flex;
  margin: 43px 0px 0px auto;
  width: 600px;
`
const MainLogo = styled(SvgLoader)`
  display: inline-block;
  margin: 30px auto auto 30px;
  width: auto;
  height: 50px;
  > path {
    fill: #fff;
  }
`

const Link = styled.a`
  position: relative;
  font-size: 18px;
  color: #cdcdcd;
  text-transform: capitalize;
  margin-right: 32px;
  font-weight: 700;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
`
const DropDown = styled(Link)`
  width: 200px;
  position: absolute;
  top: 30px;
  left: 0px;
  padding: 0px;
  &:hover {
    color: #fff;
  }
`
const DropdownIcon = styled(SvgLoader)`
  position: absolute;
  top: 25px;
  left: 50%;
`
export default function MainLarge({ ...props }) {
  const [mouseOver, setMouseOver] = useState(false)
  useEffect(() => {})
  function handleMouseHover() {
    setMouseOver((mouseOver) => !mouseOver)
  }
  return (
    <Wrapper>
      <MainLogo path={logo}></MainLogo>
      <InnerMainNav>
        {Menu.map((item, i) => {
          return (
            <Link
              onMouseEnter={item.react ? handleMouseHover : null}
              onMouseLeave={item.react ? handleMouseHover : null}
              key={i}
              href={item.href}
            >
              {item.title}
              {mouseOver ? (
                <DropDown href={item.href}>
                  {item.react ? item.react.title : null}
                </DropDown>
              ) : item.react ? (
                <DropdownIcon path={dropdown}></DropdownIcon>
              ) : null}
            </Link>
          )
        })}
      </InnerMainNav>
    </Wrapper>
  )
}
