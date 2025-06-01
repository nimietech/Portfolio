// STORE CONSTANTS VALUES USED THROUGHOUT MY REACT PROJECT (your data written in form of an API. Any changes that need to be done will be changed here only)

import projects1 from "../images/projects1.jpg";
import project2 from "../images/project2.jpg";
import projects3 from "../images/project3.jpg";

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
  { href: "#about", label: "About me" },
  { href: "#project", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// TOP OF MY WEBSITE
export const HERO_SECTION = {
  bio:
    "👋 Hi, I'm Glory Omoruyi,",
  description: "A Front-end Developer, Web Developer and Coding Instructor",

  buttonLinkText: "📩 Contact Me",
  href:"#contact", label: "Contact",

  resumeLinkText: "📄 Download CV",
  resumeLink: `${process.env.PUBLIC_URL}/MY CV 1.pdf`,
};

//MY PROJECTS
export const PROJECTS = [
  {
    name: "Shakuro Services Platform",
    description: "A responsive ReactJS website for showcasing and offering digital services like design and app development.",
    image: projects1,
    link: "https://github.com/nimietech/Shakuro-clone-.git",
  },
  {
    name: "Empire Cars Marketplace",
    description: "A stylish car listing website focused on automotive trends and vehicles for sale.",
    image: project2,
    link: "https://github.com/nimietech/login-validation.git",
  },

  {
    name: "RAWBOT Tech",
    description: "The official site for RAWBOT Tech, built to showcase our robotics and coding services.",
    image: projects3,
    link: "https://github.com/nimietech/RAWBOT"
  },

];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I'm Glory — a Frontend Developer and Coding Instructor dedicated to transforming ideas into powerful, user-focused digital experiences. With a solid foundation in HTML, CSS, and JavaScript, and hands-on experience with modern frameworks like React, Tailwind CSS and Next.js, I craft intuitive, high-performance interfaces that bridge creativity and functionality.",
    "My development journey is backed by a growing understanding of backend technologies, including Node.js, Express, and MongoDB, enabling me to build solutions that are not only beautiful on the surface but also scalable and efficient behind the scenes. As a freelance developer, I collaborate with a diverse range of clients — from ambitious startups to forward-thinking organizations — helping them unlock their digital potential through thoughtful design and reliable code.",
    "Beyond development, I serve as a coding instructor at RAWBOT, an initiative focused on introducing young learners to the world of robotics, programming, and automation. I lead engaging, hands-on training sessions that empower students with practical tech skills, opening doors to future opportunities in STEM. At the core of everything I do is a passion for creativity, education, and purpose-driven technology. Whether building a product or teaching the next generation of coders, my mission is to contribute to a more innovative and inclusive digital future."
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

