"use client";

import React from "react";
import Image from "next/image";
import { useSectionInView } from "../Lib/hooks";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import pic_of_me from "../../../public/pic_of_me.png";

// Import the CSS file
import "./About.css";

const About: React.FC = () => {
  const { ref } = useSectionInView("About", 0.2);
  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <div className="relative justify-center items-center sm:hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 sm:w-80 sm:h-80 mt-10 border-[0.35rem] border-white dark:border-slate-400 shadow-xl overflow-hidden md:h-96 md:w-96 ">
            <Image src={pic_of_me} objectFit="cover" alt="cartoon avatar" />
          </div>
          <motion.span
            className="absolute bottom-2 right-2 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>
      <motion.h2
        className="animate-text pt-10 sm:pt-0 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black md:text-6xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Jack Li
      </motion.h2>
      <motion.h3
        className="text-xl py-2 md:text-3xl dark:text-slate-100 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Software Engineer at What If Media Group
      </motion.h3>
      <motion.p
        className="text-md py-5 leading-7 sm:leading-10 m:leading-15 text-slate-700 dark:text-slate-400 sm:text-md md:text-lg max-w-lg mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Tech enthusiast, code aficionado. From building smarter rain barrels to
        whipping up AI-powered recipes, I bring a dash of innovation to every
        byte. Let&apos;s turn ideas into reality through lines of code!
      </motion.p>
      <motion.div
        className="text-5xl flex justify-center gap-10 sm:gap-16 py-3 text-gray-600"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a href="https://github.com/waz162" className="hover:text-teal-500">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jackli140/"
          className="hover:text-teal-500"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.instagram.com/jackli17/"
          className="hover:text-teal-500"
        >
          <AiFillInstagram />
        </a>
      </motion.div>
      <div className="hidden relative justify-center items-center sm:flex">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 sm:w-80 sm:h-80 mt-10 border-[0.35rem] border-white dark:border-slate-400 shadow-xl overflow-hidden md:h-96 md:w-96 ">
            <Image src={pic_of_me} objectFit="cover" alt="cartoon avatar" />
          </div>
          <motion.span
            className="absolute bottom-9 right-9 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
