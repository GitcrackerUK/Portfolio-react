import Button from 'components/common/Button'
import { SvgLoader } from 'react-svgmt';
import styled from 'styled-components'
import logo from 'img/pavdev.svg'
import {Link } from 'react-router-dom'

const LogoTextWrapper = styled.div`
width:300px;
position:relative;
margin:auto;
`
const MobilLogo = styled(SvgLoader)`
display:block;
 width:auto;
 height:50px;
 margin-bottom:10px;

>path{
    fill:#fff;
}
`
const H1 = styled.h5`
margin:0px;
color:#fff;
font-size:20px;
`
const Text = styled.p`
font-family: 'Nunito Sans', sans-serif;
margin:0px;
color:#fff;
line-height:1.25;
`
const StButton = styled(Button)`
margin:40px auto auto auto;
`
const StLink = styled(Link)`
&:hover{
    text-decoration:none;
}
`
function Welcome({...props}) {
    return ( 
    <LogoTextWrapper>
        <H1>I'm</H1>
        <MobilLogo path={logo}></MobilLogo>
        <Text>This is my Portfolio <br /> I hope you will find it interesting.</Text>
        {props.buttonIntro?<StLink to='/content'><StButton>Enter</StButton></StLink>:null}
    </LogoTextWrapper>)
}

export default Welcome