import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import Projects from './F-Projects/projects'
import Footer from './H-Footer/footer.jsx'
import TopIntro from './C-About/top-intro'
import ReactSection from './E-React/React'
import Stack from './D-Stack/stack.jsx'
import Header from "./B-Header/Header"
import Intro from "./A-Intro/intro"
import CV from './I-CV/cv'
import React from "react"
import Chat from './Z-Chat/Chat'

const GlobalStyle = createGlobalStyle`
body{
    background-color:#fff;
font-family:'Nunito Sans', sans-serif;
width:100%;
margin:0px;
padding:0px;
}
`
const Wrapper = styled.div`
position:relative;
width:100%;
`
const Container = styled.div`
width:80%;
@media(min-width:992px){
    width:1000px;
}
margin: auto;
padding:0px;
`

function App() {
    return (
        <Router>
            <Wrapper>
                <GlobalStyle />
                <Switch>
                    <Route exact path='/content'>
                        <Header></Header>
                        <Chat></Chat>
                        <Container>
                            <TopIntro></TopIntro>
                            <Stack></Stack>
                        </Container>
                        <ReactSection></ReactSection>
                        <Container>
                            <Projects></Projects>
                        </Container>
                        <Footer></Footer>
              
                    </Route>
                    <Route exact path='/cv'>
                        <CV></CV>
                    </Route>
                    <Route exact path='/'>
                        <Intro></Intro>
                    </Route>
                </Switch>
            </Wrapper>
        </Router>
    )
}
export default App