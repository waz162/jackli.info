"use client";

import React from "react";
import SectionHeading from "../Components/SectionHeading";
import { useSectionInView } from "../Lib/hooks";
import { projectsData } from "../Lib/data";
import Project from "../Components/Project";

const PortfolioSection: React.FC = () => {
  const { ref } = useSectionInView("Portfolio");

  return (
    <section ref={ref} id="portfolio" className="scroll-mt-2 pb-10">
      <SectionHeading>Portfolio</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
