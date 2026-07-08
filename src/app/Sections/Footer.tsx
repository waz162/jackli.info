import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center py-4 text-center text-gray-400">
      <p className="text-xs sm:text-sm">
        Whoa! You made it all the way to the bottom. This page was roughly
        designed in{" "}
        <a
          href="https://www.figma.com/"
          className="font-semibold text-slate-400 hover:text-teal-500 focus-visible:text-teal-500 dark:hover:text-teal-300 dark:focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Figma
        </a>{" "}
        and coded by me. Built with{" "}
        <a
          href="https://nextjs.org"
          className="font-semibold text-slate-400 hover:text-teal-500 focus-visible:text-teal-500 dark:hover:text-teal-300 dark:focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          className="font-semibold text-slate-400 hover:text-teal-500 focus-visible:text-teal-500 dark:hover:text-teal-300 dark:focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://pages.github.com/"
          className="font-semibold text-slate-400 hover:text-teal-500 focus-visible:text-teal-500 dark:hover:text-teal-300 dark:focus-visible:text-teal-300"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Pages
        </a>
        . &copy; {new Date().getFullYear()} Jack Li.
        <br /> Here&apos;s a cute Totoro for your troubles:
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
