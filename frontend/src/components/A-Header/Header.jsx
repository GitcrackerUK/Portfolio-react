import React, { Component } from "react"
import Particles from 'react-particles-js'
import logo from "../../img/pavdev.png"

import '../../style.css'

const logoStyle = {
    zIndex: 2
}

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: [{
                title: "Home",
                href: "#home",
                style: "Green",

            },
            {
                title: "Projects",
                href: "#projects",


            },
            {
                title: "About",
                href: "#about",


            },
            {
                title: "CV",
                target: "_blank",
                href: "https://gitcrackeruk.github.io/CV/",
            }
            ]
        }
    }

    checkForCv(item) {
        if (item.title === "CV") {
            return item.target
        }
    }

    render() {

        return (
            <nav className="navbar navbar-expand-md navbar-dark fixed-top navbar-shrink" id="mainNav">
                <Particles params={{
                    particles: {
                        number: {
                            value: 25
                        },
                        size: {
                            value: 2.5
                        },
                        autoPlay: true,

                        opacity: {
                            value: 0.3,
                            random: false
                        },
                        links:{
                           enable:true,
                           opacity:0.1
                        },

                    }

                }} width="100vw" height="100px" style={{

                }} />
                <div className="container position-absolute">
                    <img id="logo" src={logo} className={logoStyle} style={{ zIndex: 1 }} alt="pavdev"></img>
                    <button className="navbar-toggler navbar-toggler-right collapsed" type="button" toggle="collapse" target="#navbarResponsive" controls="navbarResponsive" expanded="false" label="Toggle navigation">
                        Menu <i className="fa fa-bars">
                        </i> </button>
                    <div className="navbar-collapse collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto text-dark">
                            {this.state.menu.map((item, i) => {
                                return (
                                    <li key={i} className="nav-item ">
                                        <a className="nav-link" target={this.checkForCv(item)} href={item.href}> {
                                            item.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>


            </nav>);
    }
}

export default Header;