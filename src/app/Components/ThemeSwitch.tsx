"use client";

import { useTheme } from "../Context/ThemeContext";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border-[0.15rem] border-slate-100 bg-slate-100 bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:border-slate-600 dark:bg-slate-700"
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
