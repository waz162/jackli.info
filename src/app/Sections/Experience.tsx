"use client";

import React, { useState } from "react";
import SectionHeading from "../Components/SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../Lib/data";
import { useSectionInView } from "../Lib/hooks";
import { useTheme } from "../Context/ThemeContext";

// Import the CSS file
import "./Experience.css";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  const itemsToShowInitially = 3; // Number of items to show initially
  const [itemsToShow, setItemsToShow] = useState(itemsToShowInitially);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + itemsToShowInitially);
  };

  return (
    <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="rgb(204 251 241)">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#e2e8f0" : "#475569",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>
              <p className="!mt-0 font-normal text-teal-500">{item.location}</p>
              <p className="!mt-1 !font-normal text-slate-700 dark:text-slate-200">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      {itemsToShow < experiencesData.length && (
        <button onClick={handleLoadMore} className="load-more-button">
          Load More
        </button>
      )}
    </section>
  );
}
