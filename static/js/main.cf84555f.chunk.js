(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(9),c=n(3),s=n(1),a=n(0),o=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("light"),i=Object(c.a)(n,2),r=i[0],l=i[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");l(e.matches?"dark":"light"),e.addEventListener("change",(function(e){l(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(o.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),l(e)}}],children:t})},l="https://bperkins1.github.io/Portfolio",h="BP.",d="Billy Perkins",j="Fullstack Developer",b="My varied background with non-profits led me to an internship managing county data. There I discovered my love of coding. Since then I've done freelance and internship work delivering custom websites, applications, and data. I'm now looking for a job in development.",p="/resume_website.pdf",u={github:"https://github.com/bperkins1"},m=[{name:"Where in the World?",description:"A single page application that displays information about the countries of the world. Includes API integration, complex state, filter components, React Hooks, and a dark mode toggle",stack:["React","Bootstrap"],sourceCode:"https://github.com/bperkins1/rest-countries-api",livePreview:"https://bperkins1.github.io/rest-countries-api/"},{name:"Consumer Power Initiative",description:"The website for the Consumer Power Initiative, A 501c3 Non-profit and social movement aimed at ethical consumption. Features several pages, server rendering, route pre-fetching, and interactive components. (Work in Progress)",stack:["Next","React","React-Bootstrap"],sourceCode:"https://github.com/bperkins1/ConsumerPowerInitiativeSite",livePreview:"https://consumerpowerinitiative.org"},{name:"Keeper App",description:"A note taking app. Demonstrates a highly interactive component through adding and deleting notes.",stack:["React"],sourceCode:"https://github.com/bperkins1/keeper-app",livePreview:"https://codesandbox.io/p/github/bperkins1/keeper-app/csb-flx3nu/draft/charming-bas"},{name:"DiamondSchool.com",description:"A website for the American Institute of Diamond Cutting. Includes 32 pages of information, PayPal transaction integration, application forms, and image modals.",stack:["HTML","CSS","JavaScript","Bootstrap"],sourceCode:"https://github.com/bperkins1/diamond_site",livePreview:"https://diamondschool.com"},{name:"ToDo list with database",description:"A Live ToDoList fullstack webapp deployed on Heroku and MongoDB Cloud. Features CRUD database operations.",stack:["Node.JS","Express","EJS","MongoDB","Mongoose"],sourceCode:"https://github.com/bperkins1/to-do-list",livePreview:"https://stormy-eyrie-01273.herokuapp.com/"},{name:"Gutenberg Typing Test",description:"A native typing test application that allows the user to input a book they would like to type a passage from. The passage is scraped from project Gutenberg.",stack:["Python","Tkinter GUI"],sourceCode:"https://github.com/bperkins1/Type_the_passage",livePreview:"https://giphy.com/gifs/UQtd0nc8RrSKLeEZAg/fullscreen"},{name:"Tip Splitter",description:"A web app to calculate the tip from multiple people. Accepts and calculates tip amount based on multiple user inputs",stack:["HTML","CSS","JavaScript"],sourceCode:"https://github.com/bperkins1/tip-calculator",livePreview:"https://bperkins1.github.io/tip-calculator/index.html"}],f=["HTML","CSS","JavaScript/ES11","ReactJS","NextJS","Bootstrap","JQuery","Node.JS","Express","Mongoose","MongoDB","Python","Django","SQL","Vercel","Heroku","Cloud based deployment","Web Scraping","Git","Bash","Powershell"],g="bperkins1@protonmail.com",k=n(16),O=n.n(k),x=n(14),v=n.n(x),N=n(18),_=n.n(N),w=n(17),C=n.n(w),S=(n(28),function(){var e=Object(s.useContext)(o),t=Object(c.a)(e,1)[0],n=t.themeName,i=t.toggleTheme,r=Object(s.useState)(!1),l=Object(c.a)(r,2),h=l[0],d=l[1],j=function(){return d(!h)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:h?"flex":null},className:"nav__list",children:[m.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:j,className:"link link--nav",children:"Projects"})}):null,f.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:j,className:"link link--nav",children:"Skills"})}):null,g?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:j,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(v.a,{}):Object(a.jsx)(O.a,{})}),Object(a.jsx)("button",{type:"button",onClick:j,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:h?Object(a.jsx)(C.a,{}):Object(a.jsx)(_.a,{})})]})}),y=(n(32),function(){var e=l,t=h;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(S,{})]})}),P=n(11),T=n.n(P),I=n(19),A=n.n(I),E=(n(33),function(){var e=d,t=j,n=b,i=p,c=u;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[i&&Object(a.jsx)("a",{href:i,download:!0,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(a.jsxs)(a.Fragment,{children:[c.github&&Object(a.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(T.a,{})}),c.linkedin&&Object(a.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(A.a,{})})]})]})]})}),B=n(7),D=n.n(B),J=n(20),L=n.n(J),M=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},D()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(T.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",target:"_blank",rel:"noreferrer noopener",children:Object(a.jsx)(L.a,{})})]})}),R=(n(36),function(){return m.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:m.map((function(e){return Object(a.jsx)(M,{project:e},D()())}))}),"    "]}):null}),H=(n(37),function(){return f.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},D()())}))})]}):null}),F=n(21),G=n.n(F),W=(n(38),function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(G.a,{fontSize:"large"})})}):null}),Q=(n(39),function(){return g?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(g),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Cleanfolio"})})}),K=(n(41),function(){var e=Object(s.useContext)(o),t=Object(c.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(y,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(E,{}),Object(a.jsx)(R,{}),Object(a.jsx)(H,{}),Object(a.jsx)(Q,{})]}),Object(a.jsx)(W,{}),Object(a.jsx)(U,{})]})});n(42);Object(i.render)(Object(a.jsx)(r,{children:Object(a.jsx)(K,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.cf84555f.chunk.js.map