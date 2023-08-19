import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="py-8 sm:py-10 sm:mb-12 flex justify-between">
      <h1 className="text-xl font-burtons dark:text-slate-100">
        developedbyJack
      </h1>
      <ul className="flex items-center">
        <li>
          {darkMode ? (
            <BsFillSunFill
              className="cursor-pointer text-2xl text-yellow-500"
              onClick={() => setDarkMode(!darkMode)}
            />
          ) : (
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl"
              onClick={() => setDarkMode(!darkMode)}
            />
          )}
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-100 px-4 py-2 border-none rounded-md ml-8 dark:text-slate-200"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
