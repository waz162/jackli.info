import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-400 py-4 text-center flex items-center justify-center">
      <p className="text-sm">
        Whoa! You made it all the way to the bottom. This page was roughly
        designed in{" "}
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
        , and deployed with{" "}
        <a
          href="https://pages.github.com/"
          className="font-semibold text-slate-400 hover:text-teal-500 dark:hover:text-teal-300 focus-visible:text-teal-500 dark:focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Pages
        </a>
        . Here's a cute Totoro for your troubles:
      </p>
      <Image
        src="/totorojumping.gif"
        alt="Totoro spinning"
        width={80}
        height={80}
      />
    </footer>
  );
};

export default Footer;
