import React, {useEffect, useState} from 'react'
import dropdown from 'img/icon/dropdown.svg'
import 'react-slidedown/lib/slidedown.css'
import styled from 'styled-components'
import {SvgLoader} from 'react-svgmt'
import logo from 'img/pavdev.svg'
import {connect} from 'react-redux'
import {getMenu, getLang} from 'selectors/pageContent.selector'
import LangSwitch from 'components/B-Header/LangSwitch'

const Wrapper = styled.div`
  display: flex;
  height: 110px;
  width: 100%;
`
const InnerMainNav = styled.div`
  position:relative;
  display: flex;
  margin: 55px 0px 0px auto;
  width:${p=>p.EngLang?574:671}px;
`
const LangWrapper = styled.div`
  display: flex;
  z-index: 2500;
  position: absolute;
  top:-50px;
  right:23px;
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
  color: 
  #fff;
  text-transform: capitalize;
  margin-right: 25px;
  font-weight: 700;
  &:hover {
    text-decoration: none;
    color: #cdcdcd;
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
function MainLarge({ ...props }) {

  const [mouseOver, setMouseOver] = useState(false)
  useEffect(() => {})
  function handleMouseHover() {
    setMouseOver((mouseOver) => !mouseOver)
  }
  function getLangMenu(obj){
    let PolishTitle = obj.PolishLang ? obj.PolishLang.title : obj.title
    return  props.EngLang ? obj.title : PolishTitle
  }

  return (
    <Wrapper>
      <MainLogo path={logo}></MainLogo>
      <InnerMainNav EngLang={props.EngLang}>
        <LangWrapper>
          <LangSwitch></LangSwitch>
        </LangWrapper> 
          {props.menu.map((item, i) => {
            return (
              <Link
                onMouseEnter={item.react ? handleMouseHover : null}
                onMouseLeave={item.react ? handleMouseHover : null}
                key={i}
                href={item.href}
                target={item.target ? item.target : ""}
              >
                {getLangMenu(item)}
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

const mapStateToProps = (state) => {
  return {
    menu:getMenu(state),
    EngLang:getLang(state),
  }
}

export default connect(mapStateToProps)(MainLarge)