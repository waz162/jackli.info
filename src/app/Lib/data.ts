import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import { HiOutlineMagnifyingGlass } from "react-icons";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Infection Simulation Researcher",
    location: "Hoboken, NJ",
    description:
      "I conducted impactful research in crowd simulation and pathogen modeling, employing C# expertise. I designed a plugin-based program using A* pathfinding and C-Drive algorithms for driving and avoiding models. I also explored disease spread with methods like EXPOSED and air circulation modeling using Unity.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2020",
  },
  {
    title: "Masters Student at Stevens Institute of Technology",
    location: "Hoboken, NJ",
    description:
      "Graduated through an accelerated Masters Program with a Masters in Engineering Management.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "Undergraduate Student at Stevens Institute of Technology",
    location: "Hoboken, NJ",
    description: "Graduated with a Bachelors in Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
] as const;

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

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
