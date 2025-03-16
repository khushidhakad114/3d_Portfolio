import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  express,
  firebase,
  daisyui,
  restaurant,
  weather,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "myprojects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "daisyui",
    icon: daisyui,
  },
];

const experiences = [
  {
    title: "B.Tech Student - Computer Science and Engineering",
    company_name: "Madhav Institute of Technology & Science, Gwalior",
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Currently pursuing my Bachelor's in Technology (B.Tech) in the Computer Science and Engineering (CSE) branch. Focused on developing a strong foundation in software development, algorithms, data structures, and various technologies related to web development and computer science.",
    ],
  },
  {
    title: "Senior Secondary (12th Grade)",
    company_name: "Model Convent High School",
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Completed my Senior Secondary Education (12th grade) with a focus on science. Developed an understanding of the core subjects like Physics, Chemistry, and Mathematics, which laid the foundation for my future studies in computer science.",
    ],
  },
  {
    title: "Secondary (10th Grade)",
    company_name: "Model Convent High School",
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "Completed my Secondary Education (10th grade) with a strong academic performance and a focus on building a strong understanding of core subjects. This phase marked the beginning of my interest in technology and programming.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Restaurant Website",
    description:
      "A fully functional Restaurant website with features like product listing restaurants with configue driven UI, add to cart dishes, and user authentication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "daisyui",
        color: "yellow-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/khushidhakad114/React",
  },
  {
    name: "Weather Web-App",
    description:
      "An application for checking live weather updates with features like location search, weather forecast.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javscript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/khushidhakad114/Weather",
  },
  {
    name: "Portfolio",
    description:
      "A showcase of my skills, projects, and experiences as a Full-Stack Developer. Built using React.js, Tailwind CSS, and Framer Motion, this website delivers a smooth, modern, and interactive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/khushidhakad114/Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
