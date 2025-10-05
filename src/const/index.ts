import web from "../../public/services/web.png";
import backend from "../../public/services/backend.png";
import creator from "../../public/services/creator.png";
import javascript from "../../public/skills/javascript.svg";
import html from "../../public/skills/html.png";
import express from "../../public/skills/express.svg";
import mongodb from "../../public/skills/mongodb.svg";
import nodejs from "../../public/skills/nodejs.svg";
import react from "../../public/skills/react.svg";
import redux from "../../public/skills/redux.png";
import tailwindcss from "../../public/skills/tailwindcss.svg";
import book from "../../public/projects/book_shop.jpg";
import doctor from "../../public/projects/doctor-appointment.png";
import spotify from "../../public/projects/spotify-clone.png";

export const services = [
  {
    title: "React Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Developer",
    icon: creator,
  },
];

export const techStack = [
  { name: "Javascript", icon: javascript },
  { name: "React", icon: react },

  { name: "Node.js", icon: nodejs },

  { name: "MongoDB", icon: mongodb },
  { name: "Express.js", icon: express },
  { name: "HTML", icon: html },
  { name: "Tailwind CSS", icon: tailwindcss },
  { name: "Redux", icon: redux },
];

export const projectsDetails = [
  {
    name: "Book Shop",
    description:
      "The app is responsive across all devices. It features login, signup and google sign in options. Redux is used for state management of the cart functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: book,
    source_code_link: "https://github.com/shaonexplorer/book-store",
    website_link: "https://calm-maamoul-d1af45.netlify.app/",
  },
  {
    name: "Doctor Appointment App",
    description:
      "This is a full stack app which features form validation, admin page with data table which includes search, filter, modify and pagination features.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: doctor,
    source_code_link: "https://github.com/shaonexplorer/doctor-appointment",
    website_link: "https://doctor-appointment-six-pied.vercel.app/",
  },
  {
    name: "Music App",
    description:
      "A spotify clone built in next js. redux is used for state management. search, play, pause  functionalities are included.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/shaonexplorer/spotify-clone",
    website_link: "https://spotify-clone-seven-beige.vercel.app/",
  },
];
