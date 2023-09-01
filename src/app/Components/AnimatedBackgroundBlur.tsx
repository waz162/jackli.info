"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimationVariants extends Variants {
  start: {
    x: number;
    y: number;
    rotate: number;
  };
  end: {
    x: number;
    y: number;
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
    x: -100,
    y: -100,
    rotate: 0,
  },
  end: {
    x: window.innerWidth + 100,
    y: window.innerHeight + 100,
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
  return (
    <div>
      <motion.div
        className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#963e40] sm:w-[68.75rem]"
        initial="start"
        animate="end"
        variants={animationVariants}
      ></motion.div>
      <motion.div
        className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#49459a] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        initial="start"
        animate="end"
        variants={animationVariants}
      ></motion.div>
    </div>
  );
}

export default AnimatedElements;
