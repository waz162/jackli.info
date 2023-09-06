import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuSearch } from "react-icons/lu";
import { PiIdentificationBadgeBold } from "react-icons/pi";
import corpcommentImg from "../../../public/corpcomment.png";
import rmtdevImg from "../../../public/rmtdev.png";
import wordanalyticsImg from "../../../public/wordanalytics.png";

export const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Portfolio",
    hash: "#portfolio",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer at What If Media Group",
    location: "Fort Lee, NJ",
    description:
      "I'm now a full-stack developer working on small team. I wear a lot of hats and my stack includes React, TypeScript, AWS, DynamoDB, PHP, AJAX. and MariaDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Masters Student at Stevens Institute of Technology",
    location: "Hoboken, NJ",
    description:
      "Graduated an accelerated Masters Program in Engineering Management with a distinct focus on harnessing the power of data-driven strategies. This specialization allowed me to utilize data analytics and decision-making techniques to enhance the efficiency and success of engineering projects.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineering Intern at What If Media Group",
    location: "Fort Lee, NJ",
    description:
      "During my internship, I played a pivotal role in optimizing older web pages, resulting in an average 35% improvement in page load times. The optimized pages not only enhanced user experience but also led to an average 20% increase in user engagement and an average 15% boost in conversion rates.",
    icon: React.createElement(PiIdentificationBadgeBold),
    date: "2021 - 2022",
  },
  {
    title: "Undergraduate Student at Stevens Institute of Technology",
    location: "Hoboken, NJ",
    description: "Graduated with a Bachelors in Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "Infection Simulation Researcher",
    location: "Hoboken, NJ",
    description:
      "I conducted impactful research in crowd simulation and pathogen modeling, employing C# expertise. I designed a plugin-based program using A* pathfinding and C-Drive algorithms for driving and avoiding models. I also explored disease spread with methods like EXPOSED and air circulation modeling using Unity.",
    icon: React.createElement(LuSearch),
    date: "2020-2020",
  },
  {
    title: "Smart Rain Barrel | Hoboken, NJ",
    location: "Hoboken, NJ",
    description:
      "Software Engineering Researcher\nWorked on a small engineering team to build smart rain barrels using Raspberry PI’s, Python, and MongoDB for data collection. Using data analysis capabilities of the Python library, pandas, we gathered essential data to devise an optimal rain collection and water dispersion strategy, aimed at alleviating storm drainage challenges for the city of Hoboken.",
    icon: React.createElement(LuSearch),
    date: "June 2019 – August 2019",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Javascript",
  "Typescript",
  "HTML",
  "CSS",
  "Python",
  "PHP",
  "Typescript",
  "Next.js",
  "Angular",
  "Node",
  "AJAX",
  "Git & Github",
  "Chrome DevTools",
  "Postman",
  "MongoDB",
  "AWS",
  "Docker",
  "Vercel",
  "FramerMotion",
] as const;
