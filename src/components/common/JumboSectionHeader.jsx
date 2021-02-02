import React, {useEffect} from 'react'
import {SectionHeader,JumboHeader } from './typography'
import styled from 'styled-components'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Wrapper = styled.div`
@media(max-width:992px){
    height:80px;
    position:relative;
}
height:100px;
position:relative;
margin:5px;
`
const Header = styled(SectionHeader)`

@media(max-width:992px){
    margin:0px;
    padding:0px;
    position:absolute;
    left:7px;
    top:30px;
}
margin:0px;
padding:0px;
position:absolute;
left:7px;
top:30px;
`
const Jumbo = styled(JumboHeader)`
@media(max-width:992px){
    opacity:0.5;
    font-size:50px;
    height:60px;
    margin:0px;
    padding:0px;
    position:absolute;
    top:0px;
}
position:absolute;
top:0px;
`

export default function JumboSectionHeader({ ...props }) {

    useEffect(() => AOS.init({ duration: 1000 }))

    return (
        <Wrapper>
            <Jumbo  {...props}data-aos="zoom-in">{props.children}</Jumbo>
            <Header {...props} >{props.children}</Header>
        </Wrapper>


    )
}