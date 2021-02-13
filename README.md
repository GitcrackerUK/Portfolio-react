Website to present my projects and skills to whom it may concern.<br>  It's react based created with create-react-app and styled with styled-components. <br>
Source code is hosted on Gcloud. <br>
Live on:<br>
http://portfolio-client-293919.appspot.com/content

## Directory
```bash
.
├── app.yaml
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── README.md
└── src
    ├── components
    │   ├── A-Intro
    │   │   ├── intro.jsx
    │   │   └── welcome.jsx
    │   ├── app.jsx
    │   ├── B-Header
    │   │   ├── Header.jsx
    │   │   ├── JumboText.jsx
    │   │   ├── LargeMenu.jsx
    │   │   └── MobileMenu.jsx
    │   ├── C-About
    │   │   └── top-intro.jsx
    │   ├── common
    │   │   ├── burger.jsx
    │   │   ├── button.jsx
    │   │   ├── JumboSectionHeader.jsx
    │   │   ├── logo.jsx
    │   │   └── typography.js
    │   ├── D-Stack
    │   │   ├── card.jsx
    │   │   └── stack.jsx
    │   ├── E-React
    │   │   ├── pros.jsx
    │   │   └── React.jsx
    │   ├── F-Projects
    │   │   ├── card.jsx
    │   │   └── projects.jsx
    │   ├── G-Footer
    │   │   ├── footer.jsx
    │   │   └── FooterYear.jsx
    │   ├── H-CV
    │   │   ├── cv.css
    │   │   └── cv.jsx
    │   └── Z-Chat
    │       ├── BlueMSG.jsx
    │       ├── Chat.jsx
    │       ├── Input.jsx
    │       └── WhiteMSG.jsx
    ├── factory.js
    ├── img
    ├── index.js
    └── store.js
```
<hr>

#### Updates
* Added Node.js to skills
* Card component
  * Added text reducer to card text 
  * Removed bootstrap
  * Added styled Button with "light" theme
* Removed width passed as props and used for rwd.
* Added css media and styled rwd based on media queries
* Added Bot Chat which slides out from the right on click.
* Created "Contact" section with basic info and parallax background
* merged with Covid-app 

### To Do
#### Covid-App

* create footer
* implement live api with fall back to store in case of 404
* create rwd for app
* fix country picker scroll bug
* <s>fix maxValue bug by implementing CheckMax</s>

#### Portfolio
* Add intro in readme.md to explain some details aobout this project
* Add personal image to "About" component
* Refactor Code
* run lighthouse test
  * consider implement sections with lighthouse reports for each of projects
* design and implement footer.
* add github theme to button.
* add stack icons to project cards.
* add heart/like to project card (implement db to store global counter for all hearts/likes).
* fix showing up square bug on reload next to bot chat window.
* Set up automatic app deploy when project is commited and pushed on GitHub 
* <s>design and implement "contact me" with details to reach me</s> and form to message me directly(back-end required).
* <s>implement responsive "main layout" for components.</s>
* <s>reduce chat window width</s>
* <s>fix not visible chat icon on entry (need to be reloaded to show up)</s>
* <s>find better way to display directory tree in readme.md</s>
* <s>move text and pros out  of React.jsx component to store and export it back, then map it out.</s> 
* <s>reduce text line height in "Why React" component</s>
* <s>reduce "Tick" svg in "Why React"</s>
* <s>change login project img on content centered.</s>
* <s>reduce "why react" component height on mobile devices</s>


##### Swap-Bot Chat to texting directly to my mobile from the chat window.
* implement moving button for a chat
* create backend for chat and maybe even chat history

##### <s>Implement Bot-Chat To Main Page.</s>
* <s>add "Talk to Brian Bot" banner to message window of Bot Chat</s>
* <s>add send message "hi" on chat open and "writing"</s0>
* <s>get access token for unlimited requests. At the moment 150 per day</s>
* <s>design modern looking interface, not too big and not too fancy\
  Simple with basic functionally and matching color schemes.</s>
