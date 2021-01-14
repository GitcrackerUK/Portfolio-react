import { asparago, nasa, royal, barber, solicitors, fitnessApp } from 'img';

import React, { useState, useEffect } from 'react'
import '../../../node_modules/aos/dist/aos.css';
import AOS from 'aos';


export default function Projects() {
  
    const [Cards] = useState([
        {
            alt: "Royal Oak Architects",
            githubHref: "https://github.com/GitcrackerUK/Architect",
            src:  royal ,
            text: "Light mobile-first website dedicated for customers who like simple and smart looking solutions.",
            title: "Royal Oak Architects",
            webHref: { href: "https://gitcrackeruk.github.io/Architect/", button: "Visit Royal Oak" },
            _id: "5f818007f14466ba5c71f59b",
        }, {
            alt: "Nasa",
            githubHref: "https://github.com/GitcrackerUK/Nasa",
            src: nasa,
            text: "Website about space related events and topics based on Nasa API. Front page is dedicated to SpaceX. Next pages contains images from space.",
            title: "Nasa",
            webHref: { href: "https://gitcrackeruk.github.io/NASA/", button: "Visit Nasa" },
            _id: "5f822f7ef004f97587496990"
        }, {
            alt: "GENTLEMAN BARBER",
            githubHref: "https://github.com/GitcrackerUK/Barber",
            src: barber,
            text: "Simple bootstrap barber website. It's informative in very friendly tone aimed for every age customers.",
            title: "GENTLEMAN BARBER",
            webHref: { href: "https://gitcrackeruk.github.io/Barber/", button: "Visit Gentleman" },
            _id: "5f8231a6f004f97587496991",
        },
        {
            alt: "Fitness App",
            githubHref: "https://github.com/GitcrackerUK/Architect",
            src: fitnessApp,
            text: "Very simple fitness app to track exercises duration, date. App is created in React/Node.js and deployed on Gcloud. Database used to storage inputs is MongoDb Atlas.",
            title: "Fitness App",
            webHref: { href: "https://code-camp-front.ew.r.appspot.com/", button: "Visit Fitness App" },
            _id: "5f8231c8f004f97587496992",
        }, {
            alt: "Goodwood Solicitors",
            githubHref: "https://github.com/GitcrackerUK/Solicitors",
            src: solicitors,
            text: "Mobile-first webpage with menu to sub pages. Contains light color scheme, parallax image, form, and more.",
            title: "Goodwood Solicitors",
            webHref: { href: "https://gitcrackeruk.github.io/Solicitors/", button: "Visit Goodwood" },
            _id: "5f8231cdf004f97587496993",
        }, {
            alt: "ASPARAGO",
            githubHref: "https://github.com/GitcrackerUK/Architect",
            src: asparago,
            text: "Bootstrap restaurant page with menu, carousel, content, location, parallax background images.",
            title: "ASPARAGO",
            webHref: { href: "https://gitcrackeruk.github.io/asparago.online/", button: "Visit Asparago" },
            _id: "5f8231d2f004f97587496994",
        }
    ])

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div>
            <h2 className="mt-3">Projects</h2>
            <div id="projects" className="mt-3 jumbo d-flex flex-wrap">
                {Cards.map((item, index) => {
                    return (
                        <div data-aos="fade" key={index} className="card col-xs-10 cardSolo mx-auto my-2">
                            <img className="card-img-top mt-0" width="100%" src={item.src} alt={item.alt}></img>
                            <div className="card-body text-center">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.text}</p>
                                <a href={item.webHref.href} target="_blank" className="btn btn-outline-primary">{item.webHref.button}</a>
                                <a href={item.githubHref} target="_blank" className="btn btn-dark m-1">Github Repo</a>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )

}