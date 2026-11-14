"use client";

import { links } from "../Lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "../Context/ActiveSectionContext";
import type { SectionName } from "../Lib/types";

const headerOffset = 88;

function scrollToSection(hash: string) {
  const section = document.getElementById(hash.slice(1));
  if (!section) return;
  const top =
    section.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({ top: Math.max(0, top) });
  history.replaceState(null, "", hash);
}

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const openSection = (name: SectionName, hash: string) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    scrollToSection(hash);
  };

  return (
    <header className="relative z-[999]">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-14 border-b border-white/40 bg-white/95 shadow-lg shadow-black/[0.03] dark:border-black/40 dark:bg-slate-950/95 sm:inset-x-auto sm:left-1/2 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:-translate-x-1/2 sm:rounded-full sm:border" />

      <nav className="fixed inset-x-0 top-0 z-10 flex h-14 items-center justify-center px-2 sm:inset-x-auto sm:left-1/2 sm:top-[1.7rem] sm:h-[3.25rem] sm:w-[36rem] sm:-translate-x-1/2 sm:px-0">
        <ul className="flex w-full max-w-full flex-nowrap items-center justify-between gap-0 sm:w-auto sm:justify-center sm:gap-5">
          {links.map((link) => (
            <li
              className="relative flex shrink-0 items-center justify-center"
              key={link.hash}
            >
              <button
                type="button"
                className={clsx(
                  "relative flex cursor-pointer items-center justify-center border-0 bg-transparent px-2.5 py-2 text-[0.8rem] font-medium text-slate-500 hover:text-teal-600 dark:text-slate-500 dark:hover:text-teal-200 sm:px-3 sm:py-3 sm:text-[0.9rem]",
                  {
                    "text-teal-500 dark:text-teal-400":
                      activeSection === link.name,
                  },
                )}
                onClick={() => openSection(link.name, link.hash)}
              >
                {link.name}
                {link.name === activeSection && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-slate-100 dark:bg-slate-800" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
