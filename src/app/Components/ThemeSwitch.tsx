"use client";

import { useTheme } from "../Context/ThemeContext";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-slate-100 dark:bg-slate-700 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-slate-100 border-[0.15rem] dark:border-slate-600 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsFillSunFill className="cursor-pointer text-2xl text-yellow-600" />
      ) : (
        <BsFillMoonStarsFill className="cursor-pointer text-slate-400 text-2xl" />
      )}
    </button>
  );
}
