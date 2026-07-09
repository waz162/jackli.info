"use client";

import React from "react";
import Image from "next/image";
import { useSectionInView } from "../Lib/hooks";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import pic_of_me from "../../../public/pic_of_me.jpeg";
import { useActiveSectionContext } from "../Context/ActiveSectionContext";

// Import the CSS file
import "./About.css";

const About: React.FC = () => {
  const { ref } = useSectionInView("About", 0.2);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
  } as const;

  const popIn = {
    initial: prefersReducedMotion ? false : { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  } as const;

  return (
    <section
      ref={ref}
      id="about"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <div className="relative items-center justify-center sm:hidden">
        <motion.div
          initial={popIn.initial}
          animate={popIn.animate}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <div className="relative mx-auto mt-10 h-40 w-40 overflow-hidden rounded-full border-[0.35rem] border-white bg-gradient-to-b from-teal-500 shadow-xl dark:border-slate-700 sm:h-80 sm:w-80 md:h-96 md:w-96">
            <Image
              src={pic_of_me}
              alt="Jack Li"
              fill
              className="scale-[2.4] object-cover object-[center_38%]"
              sizes="(max-width: 640px) 10rem, 30vh"
              priority
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        className="flex items-center justify-center gap-2 pt-2 sm:pt-5"
        initial={fadeUp.initial}
        animate={fadeUp.animate}
      >
        <h2 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-5xl font-black text-transparent md:text-6xl">
          Jack Li
        </h2>
        <motion.span
          className="text-4xl md:text-5xl"
          initial={popIn.initial}
          animate={popIn.animate}
          transition={{
            type: "spring",
            stiffness: 125,
            delay: prefersReducedMotion ? 0 : 0.1,
            duration: prefersReducedMotion ? 0 : 0.7,
          }}
          aria-hidden="true"
        >
          👋
        </motion.span>
      </motion.div>
      <motion.h3
        className="py-2 text-center text-xl dark:text-slate-100 md:text-3xl"
        initial={fadeUp.initial}
        animate={fadeUp.animate}
      >
        Full-Stack Engineer · AI Products
      </motion.h3>
      <motion.p
        className="text-md m:leading-15 sm:text-md mx-auto max-w-lg py-5 leading-7 text-slate-700 dark:text-slate-200 sm:leading-10 md:text-lg"
        initial={fadeUp.initial}
        animate={fadeUp.animate}
      >
        I build full-stack products with AI at the core — from on-device
        Foundation Models in RecipeBox to LLM-powered workflows in production.
        Curious, hands-on, and always shipping the next intelligent feature.
      </motion.p>
      <motion.div
        className="justify-center gap-10 py-3 text-5xl text-slate-600 sm:flex sm:gap-16"
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={{
          delay: prefersReducedMotion ? 0 : 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full border-none bg-gradient-to-r from-teal-500 to-cyan-500 px-7 py-3 text-lg text-slate-100 shadow-xl outline-none transition motion-safe:hover:scale-110 motion-safe:focus:scale-110 motion-safe:active:scale-105 dark:text-slate-200"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition motion-safe:group-hover:translate-x-1" />
        </Link>
        <div className="mt-5 flex justify-center gap-5 dark:text-slate-200 sm:mt-0 sm:flex-none sm:gap-10">
          <motion.a
            href="https://github.com/waz162"
            className="hover:text-teal-500"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.2 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.9 }}
          >
            <AiFillGithub />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/jackli17/"
            className="hover:text-teal-500"
            whileHover={prefersReducedMotion ? undefined : { scale: 1.2 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.9 }}
          >
            <AiFillInstagram />
          </motion.a>
        </div>
      </motion.div>
      <div className="relative hidden items-center justify-center sm:flex">
        <motion.div
          initial={popIn.initial}
          animate={popIn.animate}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <div className="relative mx-auto mt-10 h-40 w-40 overflow-hidden rounded-full border-[0.35rem] border-white bg-gradient-to-b from-teal-500 shadow-xl dark:border-slate-700 md:h-[30vh] md:w-[30vh] md:min-h-[10rem] md:min-w-[10rem]">
            <Image
              src={pic_of_me}
              alt="Jack Li"
              fill
              className="scale-[2.4] object-cover object-[center_38%]"
              sizes="(max-width: 640px) 10rem, 30vh"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
