"use client";

import React from "react";
import SectionHeading from "../Components/SectionHeading";
import { skillsData } from "../Lib/data";
import { useSectionInView } from "../Lib/hooks";
import { motion, useReducedMotion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 scroll-mt-28 justify-center text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        {skillsData.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
              {group.category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {group.skills.map((skill, index) => (
                <motion.li
                  className="rounded-xl border border-slate-200/80 bg-slate-100 px-5 py-3 text-slate-800 transition hover:border-teal-300 hover:text-teal-600 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:border-teal-500/40 dark:hover:text-teal-300"
                  key={skill}
                  variants={fadeInAnimationVariants}
                  initial={prefersReducedMotion ? false : "initial"}
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
