import React from "react";
import {
  LuBrainCircuit,
  LuCode2,
  LuDroplets,
  LuFlaskConical,
  LuGraduationCap,
  LuSchool,
} from "react-icons/lu";
import recipeBoxImg from "../../../public/project-recipebox.jpg";
import jackLiImg from "../../../public/project-jackli.jpg";
import leetcodeImg from "../../../public/project-leetcode.jpg";
import complexityImg from "../../../public/project-complexity.jpg";

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
      "Full-stack engineer building AI-assisted product features and data-driven web apps with React, TypeScript, and AWS. Integrate LLM-powered workflows into production systems and ship intelligent tooling across DynamoDB, Snowflake, PHP, and MariaDB services.",
    icon: React.createElement(LuBrainCircuit),
    date: "2021 - Present",
  },
  {
    title: "Masters Student at Stevens Institute of Technology",
    location: "Hoboken, NJ",
    description:
      "Graduated from an accelerated Master's in Engineering Management with a focus on AI-informed, data-driven decision making. Applied analytics and machine learning concepts to improve engineering project outcomes.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineering Intern at What If Media Group",
    location: "Fort Lee, NJ",
    description:
      "Optimized legacy web pages and instrumentation, improving average page load times by 35%. Used performance data and experimentation insights to lift engagement by 20% and conversion by 15% on updated pages.",
    icon: React.createElement(LuCode2),
    date: "2021 - 2022",
  },
  {
    title: "Undergraduate Student at Stevens Institute of Technology",
    location: "Hoboken, NJ",
    description:
      "Graduated with a Bachelor's in Software Engineering, with coursework spanning algorithms, systems, and applied AI/ML foundations.",
    icon: React.createElement(LuSchool),
    date: "2017 - 2021",
  },
  {
    title: "Infection Simulation Researcher",
    location: "Hoboken, NJ",
    description:
      "Built agent-based crowd and pathogen simulations in Unity/C#, combining A* pathfinding with EXPOSED and air-circulation models to study how infections spread through intelligent agent behavior.",
    icon: React.createElement(LuFlaskConical),
    date: "2020",
  },
  {
    title: "Smart Rain Barrel Researcher",
    location: "Hoboken, NJ",
    description:
      "Built IoT smart rain barrels with Raspberry Pis, Python, and MongoDB. Used pandas-driven analysis to optimize collection and dispersion strategies for Hoboken storm drainage — an early data/ML systems project.",
    icon: React.createElement(LuDroplets),
    date: "June 2019 - August 2019",
  },
] as const;

export const projectsData = [
  {
    title: "RecipeBox",
    description:
      "AI-powered SwiftUI cookbook that imports recipes from the web, YouTube, and TikTok using on-device Apple Foundation Models — with SwiftData + iCloud sync, full editing, and private, offline parsing.",
    tags: ["SwiftUI", "Foundation Models", "SwiftData", "CloudKit", "iOS"],
    imageUrl: recipeBoxImg,
    link: "https://github.com/waz162/RecipeBox",
  },
  {
    title: "jackli.info",
    description:
      "My personal portfolio site, designed in Figma and built with Next.js, React, and Tailwind CSS. Deployed to GitHub Pages with animated sections and a contact form.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: jackLiImg,
    link: "https://github.com/waz162/jackli.info",
  },
  {
    title: "LeetCode Solutions",
    description:
      "A growing collection of algorithm and data structure problems solved in Python, focused on clean implementations and consistent problem-solving patterns.",
    tags: ["Python", "Algorithms", "Data Structures"],
    imageUrl: leetcodeImg,
    link: "https://github.com/waz162/leetcode",
  },
  {
    title: "Complexity",
    description:
      "A JavaScript project exploring computational complexity concepts through interactive examples and experiments.",
    tags: ["JavaScript", "Algorithms", "Computer Science"],
    imageUrl: complexityImg,
    link: "https://github.com/waz162/Complexity",
  },
] as const;

export const skillsData = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Swift", "PHP", "HTML", "CSS"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "SwiftUI", "Node.js"],
  },
  {
    category: "AI",
    skills: [
      "Foundation Models",
      "LLMs",
      "RAG",
      "LLM APIs",
      "Vector Databases",
      "MCPs",
    ],
  },
  {
    category: "Cloud & Data",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "MongoDB",
      "DynamoDB",
      "Snowflake",
      "MariaDB",
      "Git & GitHub",
    ],
  },
] as const;
