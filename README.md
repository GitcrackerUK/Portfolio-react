# Portfolio

Website to present my projects and skills to whom it may concern.\
It's react app, created with create-react-app and styled with styled-components.\
Source code is hosted on Gcloud.\
Live: [Portfolio](http://pawelsiwek.co.uk/)

<hr>

## Updates

-   added Node.js to skills
-   card component
    -   added text reducer to card text
    -   removed bootstrap
    -   added styled Button with "light" theme
-   removed width passed as props and used for rwd.
-   added css media and styled rwd based on media queries
-   added Bot Chat which slides out from the right on click.
-   created "Contact" section with basic info and parallax background
-   merged with Covid-app
-   added backend in node.js
-   added component Contact with form to send me email directly.
-   animated chat button and chat header "Brain bot"
-   added visitor counter on every intro button click
-   added email notification on every visitor
-   added RWD for Contact and Footer
-   changed contact background parallax and widened it to full width of the page.
-   added stack icons to each project card
-   added Tic Tac Toe to projects

## To Do

#### Portfolio

-   add personal image to "About" component
-   refactor Code
-   run lighthouse test
    -   consider implement sections with lighthouse reports for each of projects
-   add heart/like to project card (implement db to store global counter for all hearts/likes).
-   add db to store cookie
-   create stats component to display visitors
-   <s>add stack icons to project cards.</s>
-   <s> create cookie to get info of visitors (date,time) </s>
-   <s> sort out problem with axios instance for intro. Path function sends empty obj.</s> problem was with axios.create({method:post})
-   <s> add automatic response on submission of Contact form </s>
-   <s>fix showing up square bug on reload next to bot chat window.</s>
-   <s> create backend </s>
-   <s> design and implement footer.</s>
-   <s> Add intro in readme.md to explain some details about this project </s>
-   <s>design and implement "contact me" with details to reach me and form to message me directly(back-end required).</s>
-   <s>implement responsive "main layout" for components.</s>
-   <s>reduce chat window width</s>
-   <s>fix not visible chat icon on entry (need to be reloaded to show up)</s>
-   <s>find better way to display directory tree in readme.md</s>
-   <s>move text and pros out of React.jsx component to store and export it back, then map it out.</s>
-   <s>reduce text line height in "Why React" component</s>
-   <s>reduce "Tick" svg in "Why React"</s>
-   <s>change login project img on content centered.</s>
-   <s>reduce "why react" component height on mobile devices</s>
-   <s> Implement Bot-Chat To Main Page. </s>
-   <s>create backend for chat and maybe even chat history</s>
-   <s>add "Talk to Brian Bot" banner to message window of Bot Chat</s>
-   <s>add send message "hi" on chat open and "writing"</s>
-   <s>get access token for unlimited requests. At the moment 150 per day</s>
-   <s>design modern looking interface, not too big and not too fancy\
    Simple with basic functionally and matching color schemes.</s>

#### To Do Covid-App

-   create component to display latest news related to covid
-   create axios instance to get data from backend
-   consider use of different chart library than nivo
-   create rwd for app
-   fix country picker scroll bug
-   <s>implement live api with fall back to store in case of 404 </s>
-   <s> fix maxValue bug by implementing CheckMax </s>
-   <s>create footer </s>

## Directory

```bash
.
├── app.yaml
├── gist.md
├── jsconfig.json
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── README.md
└── src
    ├── components
    │   ├── A-Intro
    │   │   ├── axiosData.js
    │   │   ├── intro.jsx
    │   │   └── welcome.jsx
    │   ├── app.jsx
    │   ├── B-Header
    │   │   ├── Header.jsx
    │   │   ├── JumboText.jsx
    │   │   ├── LargeMenu.jsx
    │   │   └── MobileMenu.jsx
    │   ├── C-About
    │   │   └── top-intro.jsx
    │   ├── common
    │   │   ├── Burger.jsx
    │   │   ├── Button.jsx
    │   │   ├── ComponentLayout.jsx
    │   │   ├── JumboSectionHeader.jsx
    │   │   ├── Logo.jsx
    │   │   └── typography.js
    │   ├── D-Stack
    │   │   ├── card.jsx
    │   │   └── stack.jsx
    │   ├── E-React
    │   │   ├── pros.jsx
    │   │   └── React.jsx
    │   ├── F-Projects
    │   │   ├── card.jsx
    │   │   ├── covid-app
    │   │   │   ├── api
    │   │   │   │   ├── Global.js
    │   │   │   │   ├── Test.js
    │   │   │   │   └── UK.js
    │   │   │   ├── components
    │   │   │   │   ├── common
    │   │   │   │   │   ├── Covid.jsx
    │   │   │   │   │   └── SectionHeader.jsx
    │   │   │   │   ├── factory.js
    │   │   │   │   ├── Footer
    │   │   │   │   │   └── Footer.jsx
    │   │   │   │   ├── Header
    │   │   │   │   │   └── Header.jsx
    │   │   │   │   ├── index.js
    │   │   │   │   ├── Main
    │   │   │   │   │   ├── Chart.jsx
    │   │   │   │   │   ├── CountryPicker.jsx
    │   │   │   │   │   ├── Global.jsx
    │   │   │   │   │   ├── index.js
    │   │   │   │   │   ├── Main.jsx
    │   │   │   │   │   └── Summary.jsx
    │   │   │   │   └── styled.js
    │   │   │   ├── Covid.jsx
    │   │   │   ├── img
    │   │   │   │   ├── covidIcon.svg
    │   │   │   │   ├── covidMain.png
    │   │   │   │   ├── demo.png
    │   │   │   │   ├── graph.png
    │   │   │   │   └── index.js
    │   │   │   └── store
    │   │   │       ├── countries.json
    │   │   │       ├── PageFeed
    │   │   │       │   └── Footer.js
    │   │   │       └── total.json
    │   │   ├── projects.jsx
    │   │   ├── Stack.jsx
    │   │   └── TicTacToe
    │   │       ├── API
    │   │       │   └── routes.js
    │   │       ├── components
    │   │       │   ├── Board
    │   │       │   │   ├── Board.jsx
    │   │       │   │   ├── BottomButtons.jsx
    │   │       │   │   ├── Row.jsx
    │   │       │   │   └── TopButtons.jsx
    │   │       │   ├── common
    │   │       │   │   └── Button.js
    │   │       │   ├── Header.jsx
    │   │       │   └── PlayerList.jsx
    │   │       ├── factory.js
    │   │       ├── img
    │   │       │   ├── Group1.png
    │   │       │   ├── Group2.png
    │   │       │   ├── Group3.png
    │   │       │   ├── Group4.png
    │   │       │   ├── Group5.png
    │   │       │   ├── Group7.png
    │   │       │   ├── Group8.png
    │   │       │   ├── Group9.png
    │   │       │   └── index.js
    │   │       ├── readme.md
    │   │       ├── store.js
    │   │       ├── styled.js
    │   │       └── TicTacToe.jsx
    │   ├── G-Contact
    │   │   ├── axiosCreate.js
    │   │   └── Contact.jsx
    │   ├── H-Footer
    │   │   └── Footer.jsx
    │   ├── I-CV
    │   │   ├── cv.css
    │   │   └── cv.jsx
    │   └── Z-Chat
    │       ├── BlueMSG.jsx
    │       ├── Chat.jsx
    │       ├── Input.jsx
    │       └── WhiteMSG.jsx
    ├── factory.js
    ├── img
    │   ├── asparagogit.png
    │   ├── asparago.png
    │   ├── barber.jpg
    │   ├── bootstrap.png
    │   ├── bot.png
    │   ├── BrainBot.png
    │   ├── ChatButtonLarge1px.svg
    │   ├── computer-2982270_1920.jpg
    │   ├── CovidApp.png
    │   ├── css.jpeg
    │   ├── express.png
    │   ├── figma.png
    │   ├── FitnessApp.png
    │   ├── gcloud.png
    │   ├── github.png
    │   ├── html.png
    │   ├── icon
    │   │   ├── done_24px.svg
    │   │   └── dropdown.svg
    │   ├── index.js
    │   ├── JavaScript.png
    │   ├── login1.png
    │   ├── login.png
    │   ├── materialUI.png
    │   ├── mongoDb.png
    │   ├── MyPhoto.png
    │   ├── nasa.png
    │   ├── node.jpg
    │   ├── npm.png
    │   ├── pavdev.png
    │   ├── pavdev.svg
    │   ├── React.png
    │   ├── ReactRouter.png
    │   ├── react.svg
    │   ├── royal.png
    │   ├── skyScrapers.png
    │   ├── solicitors.png
    │   ├── styled.jpeg
    │   ├── tictactoe.png
    │   ├── ubuntu.png
    │   └── vscode.png
    ├── index.js
    ├── store
    │   ├── footer.js
    │   ├── headerMenu.js
    │   ├── projects.js
    │   ├── reactComponent.js
    │   └── stack.js
    └── styled.js
```
