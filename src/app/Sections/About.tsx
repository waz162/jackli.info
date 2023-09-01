"use client";

import React from "react";
import Image from "next/image";
import { useSectionInView } from "../Lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import pic_of_me from "../../../public/pic_of_me.png";
import { useActiveSectionContext } from "../Context/ActiveSectionContext";

// Import the CSS file
import "./About.css";

const About: React.FC = () => {
  const { ref } = useSectionInView("About", 0.2);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="about"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <div className="relative items-center justify-center sm:hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <div className="relative mx-auto mt-10 h-40 w-40 overflow-hidden rounded-full border-[0.35rem] border-white bg-gradient-to-b from-teal-500 shadow-xl dark:border-slate-100 sm:h-80 sm:w-80 md:h-96 md:w-96 ">
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
        className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text pt-0 text-5xl font-black text-transparent sm:pt-5 md:text-6xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Jack Li
      </motion.h2>
      <motion.h3
        className="py-2 text-center text-xl dark:text-slate-100 md:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Software Engineer at What If Media Group
      </motion.h3>
      <motion.p
        className="text-md m:leading-15 sm:text-md mx-auto max-w-lg py-5 leading-7 text-slate-700 dark:text-slate-200 sm:leading-10 md:text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Tech enthusiast, code aficionado. From building smarter rain barrels to
        whipping up AI-powered recipes, I bring a dash of innovation to every
        byte. Let&apos;s turn ideas into reality through lines of code!
      </motion.p>
      <motion.div
        className="justify-center gap-10 py-3 text-5xl text-slate-600 sm:flex sm:gap-16"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full border-none bg-gradient-to-r  from-teal-500 to-cyan-500 px-7 py-3 text-lg text-slate-100 shadow-xl  outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:text-slate-200"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <div className="mt-5 flex justify-center gap-5 dark:text-slate-200 sm:mt-0 sm:flex-none sm:gap-10">
          <motion.a
            href="https://github.com/waz162"
            className="hover:text-teal-500"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jackli140/"
            className="hover:text-teal-500"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillLinkedin />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/jackli17/"
            className="hover:text-teal-500"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillInstagram />
          </motion.a>
        </div>
      </motion.div>
      <div className="relative hidden items-center justify-center sm:flex">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <div className="relative mx-auto mt-10 h-40 w-40 overflow-hidden rounded-full border-[0.35rem] border-white bg-gradient-to-b from-teal-500 shadow-xl dark:border-slate-100 sm:h-[35vh] sm:w-[35vh]">
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
