// STORE CONSTANTS VALUES USED THROUGHOUT MY REACT PROJECT (your data written in form of an API. Any changes that need to be done will be changed here only)

import projects1 from "../images/projects1.jpg";
import project2 from "../images/project2.jpg";
import projects3 from "../images/project3.jpg";
import projects33 from "../images/projects33.png";
import projects34 from "../images/projects34.png";

import html from '../images/skills-imgs/html.svg'
import css from '../images/skills-imgs/css.svg'
import tailwind from '../images/skills-imgs/tailwindcss.svg'
import javascript from '../images/skills-imgs/javascript.svg'
import nodeJS from '../images/skills-imgs/nodeJS.svg'
import react from '../images/skills-imgs/React.svg'
import mongoDB from '../images/skills-imgs/mongoDB.svg'
import git from '../images/skills-imgs/git.svg'
import github from '../images/skills-imgs/github.svg'
import next from '../images/skills-imgs/next.svg'
import typescript from '../images/skills-imgs/typescript.svg'
import vsc from '../images/skills-imgs/vsc.svg'
import postman from '../images/skills-imgs/postman.svg'

export const LINKS = [
  { href: "#about", label: "About me" },
  { href: "#project", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

// TOP OF MY WEBSITE
export const HERO_SECTION = {
  bio:
    "👋 Hi, I'm Glory Omoruyi.",
  description: "Founder of NimieTech, I build modern websites and digital solutions for businesses & startups.",

  buttonLinkText: "📩 Contact Me",
  href:"#contact", label: "Contact",

  resumeLinkText: "📄 Download CV",
  resumeLink: `${process.env.PUBLIC_URL}/Glory_O CV.pdf`,
};

//MY PROJECTS
export const PROJECTS = [
  {
    name: "Shakuro Digital Agency Platform",
    // description: "A responsive React website for showcasing and offering digital services like design and app development.",
    image: projects1,
    url: "https://shakuro-clone.vercel.app/",
  },
  {
    name: "Empire Cars Marketplace",
    // description: "A stylish car listing website focused on automotive trends and vehicles for sale.",
    image: project2,
    url: "https://nimietech.github.io/Login-validation/",
  },

  {
    name: "RAWBOT Tech Platform",
    // description: "The official site for RAWBOT Tech, built to showcase our robotics and coding services.(Still on-going)",
    image: projects3,
    url: "https://nimietech.github.io/RAWBOT/"
  },

  {
    name: "Movie app Home-page Clone",
    // description: "A fully responsive movie app homepage inspired by Netflix, built to replicate modern streaming UI patterns and showcase clean layout, responsiveness, and user-friendly design.",
    image: projects33,
    url: "https://movie-web-app-home.onrender.com/"
  },
  {
    name: "UI Design of an Ecommerce online store",
    // description: "Modern e-commerce platform with product catalog, shopping cart integration, and responsive UI, built to showcase scalable front-end architecture. (still on-going)",
    image: projects34,
    url: "https://e-commerce-shopper-rosy.vercel.app/"
  },

];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I’m a Frontend & Web Developer focused on transforming ideas into impactful, user-centered digital experiences. With a strong foundation in HTML, CSS, and JavaScript, and hands-on experience using React, Next.js, TypeScript, and Tailwind CSS, I build clean, high-performing interfaces that balance creativity with functionality.",

    "I also have a growing understanding of backend technologies such as Node.js, Express, and MongoDB, allowing me to create solutions that are not only visually appealing but also scalable and efficient behind the scenes. As a remote / freelance developer, I work seamlessly across time zones and collaborate with founders, teams, and businesses worldwide.",

    "From fast-moving startups to established organizations, I help bring ideas to life through clean UI, purposeful design, and reliable code. Whether it’s a one-off project, a long-term contract, or ongoing product support, I work as a technical partner, delivering solutions aligned with business goals, brand identity, and user experience.",

    "Beyond development, I’m also a coding instructor, leading hands-on training sessions that equip students with practical, real-world tech skills. At the core of everything I do is a passion for creativity, education, and purpose-driven technology, whether I’m building products or helping the next generation step into tech."
  ],
};

export const SKILLS = [

  { name: "HTML", image: html },
  { name: " CSS", image: css },
  { name: "JAVASCRIPT", image: javascript },
  { name: "TYPESCRIPT", image: typescript },
  { name: "REACT", image: react },
  { name: "NEXT.JS", image: next },
   { name: "TAILWIND CSS", image: tailwind },
  { name: "NODEJS", image: nodeJS },
  { name: "GIT", image: git },
  { name: "GITHUB", image: github },
  { name: "POSTMAN", image: postman },
  { name: "VISUAL STUDIO CODE", image: vsc},
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

