const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://bperkins1.github.io/Portfolio',
  title: 'BP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Billy Perkins',
  role: 'Fullstack Developer',
  description:
    'My varied background with non-profits led me to an internship managing county data. There I discovered my love of coding. Since then I\'ve done freelance and internship work delivering custom websites, applications, and data. I\'m now looking for a job in development.',
  resume: '/resume_website.pdf',
  social: {
    // linkedin: 'https://www.linkedin.com/in/billy-perkins-4298aa242/',
    github: 'https://github.com/bperkins1',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Where in the World?',
    description:
      'A single page application that displays information about the countries of the world. Includes API integration, complex state, filter components, React Hooks, and a dark mode toggle',
    stack: ['React', 'Bootstrap'],
    sourceCode: 'https://github.com/bperkins1/rest-countries-api',
    livePreview: 'https://bperkins1.github.io/rest-countries-api/',
  },
  {
    name: 'Consumer Power Initiative',
    description:
      'The website for the Consumer Power Initiative, A 501c3 Non-profit and social movement aimed at ethical consumption. Features several pages, server rendering, route pre-fetching, and interactive components. (Work in Progress)',
    stack: ['Next', 'React', 'React-Bootstrap'],
    sourceCode: 'https://github.com/bperkins1/ConsumerPowerInitiativeSite',
    livePreview: 'https://consumer-power-initiative-site-fuwqyrqvx-bperkins1.vercel.app/',
  },
  {
    name: 'Keeper App',
    description:
      'A note taking app. Demonstrates a highly interactive component through adding and deleting notes.',
    stack: ['React'],
    sourceCode: 'https://github.com/bperkins1/keeper-app',
    livePreview: 'https://codesandbox.io/p/github/bperkins1/keeper-app/csb-flx3nu/draft/charming-bas',
  },
  {
    name: 'DiamondSchool.com',
    description:
      'A website for the American Institute of Diamond Cutting. Includes 32 pages of information, PayPal transaction integration, application forms, and image modals.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    sourceCode: 'https://github.com/bperkins1/diamond_site',
    livePreview: 'https://diamondschool.com',
  },
  {
    name: 'ToDo list with database',
    description:
      'A Live ToDoList fullstack webapp deployed on Heroku and MongoDB Cloud. Features CRUD database operations.',
    stack: ['Node.JS', 'Express', 'EJS','MongoDB', 'Mongoose'],
    sourceCode: 'https://github.com/bperkins1/to-do-list',
    livePreview: 'https://stormy-eyrie-01273.herokuapp.com/',
  },
  {
    name: 'Gutenberg Typing Test',
    description:
      'A native typing test application that allows the user to input a book they would like to type a passage from. The passage is scraped from project Gutenberg.',
    stack: ['Python', 'Tkinter GUI'],
    sourceCode: 'https://github.com/bperkins1/Type_the_passage',
    livePreview: 'https://giphy.com/gifs/UQtd0nc8RrSKLeEZAg/fullscreen',
  },
  {
  name: 'Tip Splitter',
  description:
    'A web app to calculate the tip from multiple people. Accepts and calculates tip amount based on multiple user inputs',
  stack: ['HTML', 'CSS', 'JavaScript'],
  sourceCode: 'https://github.com/bperkins1/tip-calculator',
  livePreview: 'https://bperkins1.github.io/tip-calculator/index.html',
},
]

// add newsletter heroku app?

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript/ES11',
  'ReactJS',
  'NextJS',
  'Bootstrap',
  'JQuery',
  'Node.JS',
  'Express',
  'Mongoose',
  'MongoDB',
  'Python',
  'Django',
  'SQL',
  'Vercel',
  'Heroku',
  'Cloud based deployment',
  'Web Scraping',
  'Git',
  'Bash',
  'Powershell',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bperkins1@protonmail.com',
}

export { header, about, projects, skills, contact }
