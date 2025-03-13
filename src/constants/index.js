// STORE CONSTANTS VALUES USED THROUGHOUT MY REACT PROJECT (your data written in form of an API. Any changes that need to be done will be changed here only)

import projects1 from "../images/projects1.webp";
import projects2 from "../images/projects2.jpg";
import projects3 from "../images/projects3.png";
import projects4 from "../images/projects4.webp";
import projects5 from "../images/projects5.jpg";
import projects6 from "../images/projects6.jpg";

import html from '../images/skills-imgs/html.svg'
import css from '../images/skills-imgs/css.svg'
import tailwind from '../images/skills-imgs/tailwindcss.svg'
import javascript from '../images/skills-imgs/javascript.svg'
import nodeJS from '../images/skills-imgs/nodeJS.svg'
import react from '../images/skills-imgs/React.svg'
import mongoDB from '../images/skills-imgs/mongoDB.svg'
import git from '../images/skills-imgs/git.svg'
import github from '../images/skills-imgs/github.svg'

export const LINKS = [
  { href: "#project", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// TOP OF MY WEBSITE
export const HERO_SECTION = {
  greeting: "Hello there! 🖐️",
  introduction:
    "I'm Glory Omoruyi, a Full Stack Web Developer passionate about building dynamic, user-friendly, and efficient web applications that deliver seamless digital experiences.",
  description:
    "I am continuously improving my skills in modern technologies while pursuing web development job opportunities.",
  resumeLinkText: "Get My Resume",
  resumeLink: `${process.env.PUBLIC_URL}/OMORUYI GLORY CV (1).pdf`,
}; 

//MY PROJECTS
export const PROJECTS = [
  {
    name: " Shakuro Website (CLONE)",
    description: "A responsive website using REACTJS",
    image: projects1,
    link: "https://github.com/nimietech/Shakuro-clone-.git",
  },
  {
    name: "Login validation",
    description: "A simple login system built using HTML, CSS, and JavaScript that validates a single username and password.",
    image: projects2,
    link: "https://github.com/nimietech/login-validation.git",
  },
  {
    name: "Netflix clone",
    description: "An innovative Netflix clone using MongoDB for database management.",
    image: projects3,
    link: "https://github.com/nimietech/Netflix-clone.git",
  },
  {
    name: "A clock",
    description:
      "A simple clock created using html, css and javascript",
    image: projects4,
    link: "https://github.com/nimietech/Clock-project.git",
  },
  {
    name: "A University website",
    description: "A comprehensive website for a university, designed to provide an interactive platform for students",
    image: projects5,
    link: "https://github.com/nimietech/responsive-website.git",
  },
  {
    name: "A search engine",
    description: "An aesthetically pleasing and user-friendly image search engine.",
    image: projects6,
    link: "https://github.com/nimietech/Search-engine.git",
  },
  
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I love building cool websites and apps that not only look great but also feel like magic to use! Whether it’s frontend or backend, I enjoy crafting experiences that just click for users",

    "I am committed to writing clean and maintainable code and enjoy collaborating with cross-functional teams to deliver projects that align with business goals and user needs. I thrive in dynamic environments that push me to continuously learn and grow. I’m excited about the opportunity to contribute to a team, share my knowledge, and further develop my skills in web development.",
  ],
};

export const SKILLS = [

  { name: "HTML", image: html },
  { name: " CSS", image: css },
  { name: "JAVASCRIPT", image: javascript },
  { name: "NODEJS", image: nodeJS },
  { name: "REACT", image: react },
  { name: "TAILWIND CSS", image: tailwind },
  { name: "GIT", image: git },
  { name: "GITHUB", image: github },
  { name: "MONGODB", image: mongoDB },

  
]

export const CONTACT_CONTENT = {
  headline: "Let's Connect",
  description:
    "I'm excited to join a company where I can collaborate on projects that push boundaries and create meaningful impact. I'm eager to contribute to innovative initiatives and help build something exceptional together as part of the team.",
  email: "gloryomoruyi00@gmail.com",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/nimietech",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/nimie-tech/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} My portfolio. All rights reserved.`,
};

