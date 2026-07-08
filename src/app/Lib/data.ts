import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap, LuSearch } from "react-icons/lu";
import { PiIdentificationBadgeBold } from "react-icons/pi";
import jackLiLogoImg from "../../../public/jack-li-logo.png";
import codeImg from "../../../public/code.png";
import consultingImg from "../../../public/consulting.png";

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
      "Full-stack developer building and maintaining web applications across the stack with React, TypeScript, AWS, DynamoDB, PHP, AJAX, and MariaDB.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Present",
  },
  {
    title: "Masters Student at Stevens Institute of Technology",
    location: "Hoboken, NJ",
    description:
      "Graduated from an accelerated Master's program in Engineering Management with a focus on data-driven strategies. Applied analytics and decision-making techniques to improve engineering project outcomes.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineering Intern at What If Media Group",
    location: "Fort Lee, NJ",
    description:
      "Optimized legacy web pages, improving average page load times by 35%. The work increased user engagement by 20% and conversion rates by 15% on the updated pages.",
    icon: React.createElement(PiIdentificationBadgeBold),
    date: "2021 - 2022",
  },
  {
    title: "Undergraduate Student at Stevens Institute of Technology",
    location: "Hoboken, NJ",
    description: "Graduated with a Bachelor's in Software Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Infection Simulation Researcher",
    location: "Hoboken, NJ",
    description:
      "Conducted research in crowd simulation and pathogen modeling using C#. Built a plugin-based program with A* pathfinding and C-Drive algorithms, and modeled disease spread with EXPOSED and air circulation techniques in Unity.",
    icon: React.createElement(LuSearch),
    date: "2020",
  },
  {
    title: "Smart Rain Barrel Researcher",
    location: "Hoboken, NJ",
    description:
      "Worked on a small engineering team to build smart rain barrels using Raspberry Pis, Python, and MongoDB. Used pandas for data analysis to design an optimal rain collection and water dispersion strategy for Hoboken storm drainage.",
    icon: React.createElement(LuSearch),
    date: "June 2019 - August 2019",
  },
] as const;

export const projectsData = [
  {
    title: "jackli.info",
    description:
      "My personal portfolio site, designed in Figma and built with Next.js, React, and Tailwind CSS. Deployed to GitHub Pages with animated sections and a contact form.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: jackLiLogoImg,
    link: "https://github.com/waz162/jackli.info",
  },
  {
    title: "LeetCode Solutions",
    description:
      "A growing collection of algorithm and data structure problems solved in Python, focused on clean implementations and consistent problem-solving patterns.",
    tags: ["Python", "Algorithms", "Data Structures"],
    imageUrl: codeImg,
    link: "https://github.com/waz162/leetcode",
  },
  {
    title: "Complexity",
    description:
      "A JavaScript project exploring computational complexity concepts through interactive examples and experiments.",
    tags: ["JavaScript", "Algorithms", "Computer Science"],
    imageUrl: consultingImg,
    link: "https://github.com/waz162/Complexity",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Python",
  "PHP",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "AWS",
  "Docker",
  "MongoDB",
  "MariaDB",
  "DynamoDB",
  "Git & GitHub",
  "Chrome DevTools",
  "Postman",
  "Framer Motion",
] as const;
