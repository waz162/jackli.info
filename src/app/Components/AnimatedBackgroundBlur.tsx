"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface AnimationVariants extends Variants {
  start: {
    x: number;
    y: number;
    rotate: number;
  };
  end: {
    x: string;
    y: string;
    rotate: number;
    transition: {
      duration: number;
      ease: string;
      repeat: number;
      repeatType: "reverse" | "loop" | "mirror" | undefined;
    };
  };
}

const animationVariants: AnimationVariants = {
  start: {
    x: 0,
    y: 0,
    rotate: 0,
  },
  end: {
    x: "30vh",
    y: "30vh",
    rotate: 5,
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

function AnimatedElements() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        className="absolute -right-24 top-[-6rem] h-[20rem] w-[20rem] rounded-full bg-[#ffc7c9] blur-[10rem] dark:bg-[#963e40] sm:right-[11rem] sm:h-[31.25rem] sm:w-[31.25rem] sm:blur-[10rem] md:w-[50rem] lg:w-[68.75rem]"
        initial="start"
        animate={prefersReducedMotion ? "start" : "end"}
        variants={animationVariants}
      ></motion.div>
      <motion.div
        className="absolute -left-24 top-[-1rem] h-[20rem] w-[20rem] rounded-full bg-[#bdb4ff] blur-[10rem] dark:bg-[#49459a] sm:-left-48 sm:h-[31.25rem] sm:w-[50rem] md:-left-[33rem] lg:-left-[28rem] xl:-left-[15rem] 2xl:-left-[5rem] lg:w-[68.75rem]"
        initial="start"
        animate={prefersReducedMotion ? "start" : "end"}
        variants={animationVariants}
      ></motion.div>
    </div>
  );
}

export default AnimatedElements;
