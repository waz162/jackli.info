import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="slate-900 font-large mb-4 text-center text-3xl capitalize dark:text-slate-100 sm:mb-8">
      {children}
    </h2>
  );
}
