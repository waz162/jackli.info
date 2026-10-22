"use client";

import { links } from "../Lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "../Context/ActiveSectionContext";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      <div className="pointer-events-none fixed left-1/2 top-0 h-[4.5rem] w-full -translate-x-1/2 rounded-none border border-white/40 bg-white/95 shadow-lg shadow-black/[0.03] dark:border-black/40 dark:bg-slate-950/95 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full" />

      <nav className="fixed left-1/2 top-[0.15rem] z-10 flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-full max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-1 px-2 text-[0.85rem] font-medium text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 sm:px-0 sm:text-[0.9rem]">
          {links.map((link) => (
            <li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
            >
              <a
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-teal-600 dark:text-slate-500 dark:hover:text-teal-200",
                  {
                    "text-teal-500 dark:text-teal-400":
                      activeSection === link.name,
                  },
                )}
                href={link.hash}
                onClick={(event) => {
                  event.preventDefault();
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  document.querySelector(link.hash)?.scrollIntoView({
                    block: "start",
                  });
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-slate-100 dark:bg-slate-800" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
