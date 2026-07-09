"use client";

import { useTheme } from "../Context/ThemeContext";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border-[0.15rem] border-slate-200/80 bg-slate-100 bg-opacity-80 text-slate-700 shadow-2xl backdrop-blur-[0.5rem] transition-all motion-safe:hover:scale-[1.15] motion-safe:active:scale-105 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsFillSunFill className="cursor-pointer text-2xl text-yellow-600" />
      ) : (
        <BsFillMoonStarsFill className="cursor-pointer text-2xl text-slate-400" />
      )}
    </button>
  );
}
