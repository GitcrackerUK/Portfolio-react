import { bot, asparago, nasa, royal, barber, solicitors, fitnessApp, CovidApp, register, TicTacToe } from 'img';
import { react, git, mongo, nodeJS, gcloud, bootstrap, figma, html, css, scss, js, styled, router, express, vscode, npm } from 'img'

export const projects = [
    {
        alt: "TicTacToe",
        githubHref: "https://github.com/GitcrackerUK/Portfolio-react/tree/master/src/components/F-Projects/TicTacToe",
        src: TicTacToe,
        text: "Tic-tac-toe is a game in which two players take turns in drawing either an 'O' or an 'X' in one square of a grid consisting of nine squares.",
        title: "Tic Tac Toe",
        webHref: { href: "/TicTacToe", button: "Visit" },
        stack: [react, js, figma, styled, nodeJS, npm]
    },
    {
        alt: "Covid-app",
        githubHref: "https://github.com/GitcrackerUK/Covid-Tracker",
        src: CovidApp,
        text: "Application for informational purpose with data related to Covid-19. It is react application created with create-react-app and styled with styled-components.",
        title: "Covid-Data",
        webHref: { href: "/covid", button: "Visit" },
        stack: [react, js, figma, styled, gcloud, nodeJS, npm]
    },
    {
        alt: "Chat Bot",
        githubHref: "https://github.com/GitcrackerUK/Messenger ",
        src: bot,
        text: "Bot Chat is a simple app allowing any one to have conversation with AI. It’s simple and fun. At the moment app contains only chat but will be added chat history in MERN stack.",
        title: "Chat Bot",
        webHref: { href: "https://botchat-301119.ew.r.appspot.com/", button: "Visit" },
        stack: [react, router, js, figma, styled, gcloud, git, npm]
    }, {
        alt: "Fitness App",
        githubHref: "https://github.com/GitcrackerUK/Architect",
        src: fitnessApp,
        text: "Very simple fitness app to track exercises duration, date. App is created in React/Node.js and deployed on Gcloud. Database used to storage inputs is MongoDb Atlas.",
        title: "Fitness App",
        webHref: { href: "https://code-camp-front.ew.r.appspot.com/", button: "Visit" },
        stack: [react, bootstrap, nodeJS, express, mongo, gcloud, git]
    },
    {
        alt: "Nasa",
        githubHref: "https://github.com/GitcrackerUK/Nasa",
        src: nasa,
        text: "Website about space related events and topics based on Nasa API. Front page is dedicated to SpaceX. Next pages contains images from space.",
        title: "Nasa",
        webHref: { href: "https://gitcrackeruk.github.io/NASA/", button: "Visit" },
        stack: [js, html, css, bootstrap, git, vscode]
    },
    {
        alt: "Register",
        githubHref: "https://github.com/GitcrackerUK/Portfolio-react/tree/RegisterLogin/src/components/F-Projects/Register_Login",
        src: register,
        text: "Simple app with home component and login. App has two color schemes and is created in React with use of styled-components and React-router-dom.",
        title: "Register/Sign in Page",
        webHref: { href: "/RegisterSignIn", button: "Visit" },
        stack: [react, scss, html, css, vscode, git]
    },
    {
        alt: "Royal Oak Architects",
        githubHref: "https://github.com/GitcrackerUK/Architect",
        src: royal,
        text: "Light mobile-first website dedicated for customers who like simple and smart looking solutions. Website is done with use of Bootstrap",
        title: "Royal Oak Architects",
        webHref: { href: "https://gitcrackeruk.github.io/Architect/", button: "Visit" },
        stack: [html, css, bootstrap, git, vscode]
    }, {
        alt: "Gentlemen Barber",
        githubHref: "https://github.com/GitcrackerUK/Barber",
        src: barber,
        text: "Simple bootstrap barber website. It's informative in very friendly tone aimed for every age range customers. ",
        title: "Gentlemen Barber",
        webHref: { href: "https://gitcrackeruk.github.io/Barber/", button: "Visit" },
        stack: [html, css, bootstrap, git, vscode]
    },
    {
        alt: "Goodwood Solicitors",
        githubHref: "https://github.com/GitcrackerUK/Solicitors",
        src: solicitors,
        text: "Mobile-first webpage with menu to sub pages. Contains light color scheme, parallax image, form, and more.",
        title: "Goodwood Solicitors",
        webHref: { href: "https://gitcrackeruk.github.io/Solicitors/", button: "Visit" },
        stack: [html, css, bootstrap, git, vscode]
    }, {
        alt: "Asparago",
        githubHref: "https://github.com/GitcrackerUK/Architect",
        src: asparago,
        text: "Bootstrap restaurant page with menu, carousel, content, location, parallax background images. These modern design with great and easy access to every information makes it very attractive",
        title: "Asparago",
        webHref: { href: "https://gitcrackeruk.github.io/asparago.online/", button: "Visit" },
        stack: [html, css, bootstrap, git, vscode]
    }
]