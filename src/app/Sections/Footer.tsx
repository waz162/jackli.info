import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-400 py-4 text-center flex items-center justify-center">
      <p className="text-sm">
        Roughly designed in{" "}
        <a
          href="https://www.figma.com/"
          className="font-semibold text-slate-400 hover:text-teal-500 dark:hover:text-teal-300 focus-visible:text-teal-500 dark:focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Figma
        </a>{" "}
        and coded in Visual Studio Code by me! Built with{" "}
        <a
          href="https://nextjs.org"
          className="font-semibold text-slate-400 hover:text-teal-500 dark:hover:text-teal-300 focus-visible:text-teal-500 dark:focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          className="font-semibold text-slate-400 hover:text-teal-500 dark:hover:text-teal-300 focus-visible:text-teal-500 dark:focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://pages.github.com/"
          className="font-semibold text-slate-400 hover:text-teal-500 dark:hover:text-teal-300 focus-visible:text-teal-500 dark:focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Pages
        </a>
        .
      </p>
      <img
        src="/totorojumping.gif"
        alt="Totoro Spinning"
        className="w-20 h-20"
      />
    </footer>
  );
};

export default Footer;
