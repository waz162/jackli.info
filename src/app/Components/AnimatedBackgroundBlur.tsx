"use client";

import React from "react";
import { motion } from "framer-motion";

function AnimatedElements() {
  const variants = {
    start: {
      x: -100,
      y: -100,
      rotate: 0,
    },
    end: {
      x: window.innerWidth + 100,
      y: window.innerHeight + 100,
      rotate: 360, // Rotate the elements as they move
      transition: {
        duration: 2, // Adjust the duration for a faster movement
        ease: "linear", // Linear easing for a consistent motion
        repeat: Infinity, // Loop the animation indefinitely
        repeatType: "loop", // Restart the animation smoothly
      },
    },
  };

  return (
    <div>
      <motion.div
        className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#963e40] sm:w-[68.75rem]"
        initial="initial"
        animate="animate"
        variants={variants}
      ></motion.div>
      <motion.div
        className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#49459a] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        initial="initial"
        animate="animate"
        variants={variants}
      ></motion.div>
    </div>
  );
}

export default AnimatedElements;
