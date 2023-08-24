import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Flickity from "react-flickity-component";
import PortfolioImage from "../Components/PortfolioImage"; // Update the path accordingly
import SectionHeading from "../Components/SectionHeading";
import { useSectionInView } from "../Lib/hooks";
import web1 from "../../../public/web1.png";
import web2 from "../../../public/web2.png";
import web3 from "../../../public/web3.png";
import web4 from "../../../public/web4.png";
import web5 from "../../../public/web5.png";
import web6 from "../../../public/web6.png";

// Import the CSS file
import "./Portfolio.css";

const PortfolioSection: React.FC = () => {
  const { ref } = useSectionInView("Portfolio");

  const flickityOptions = {
    initialIndex: 0,
    cellAlign: "center",
    pageDots: true,
    autoPlay: 3000,
    contains: true,
    wrapAround: true,
  };

  return (
    <section id="#portfolio">
      <div className="py-2 md:py-5 lg:py-8 overflow-hidden">
        <SectionHeading>Portfolio</SectionHeading>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-400">
          As a{" "}
          <span className="text-teal-500 dark:text-teal-300">
            Software Engineer
          </span>
          , I&apos;ve shaped my learning through some pretty cool projects. In
          my current role I leveraged modern tech and frameworks to upgrade and
          replace many outdated sites and frameworks. Using{" "}
          <span className="text-teal-500 dark:text-teal-300">
            React and Typescript
          </span>{" "}
          allowed for old workflows to be speedier and cleaner for countless
          internal teams. <br />
          In agile bi-weekly sprints, I&apos;ve resolved bugs, improved UI, and
          explored diverse tech like{" "}
          <span className="text-teal-500 dark:text-teal-300">AWS</span> and{" "}
          <span className="text-teal-500 dark:text-teal-300">Snowflake</span>{" "}
          for backend work. I&apos;ve worn many hats so take a look at what
          I&apos;ve done! Projects like{" "}
          <span className="text-teal-500 dark:text-teal-300">CookGPT</span> and{" "}
          <span className="text-teal-500 dark:text-teal-300">
            Smart Rain Barrel
          </span>{" "}
          are some of my favorite projects I&apos;ve done. Take a look below!
        </p>
      </div>

      <div className="no-horizontal-scroll">
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <PortfolioImage alt="project" src={web1} />
          <PortfolioImage alt="web2" src={web2} />
          <PortfolioImage alt="web3" src={web3} />
          <PortfolioImage alt="web4" src={web4} />
          <PortfolioImage alt="web5" src={web5} />
          <PortfolioImage alt="web6" src={web6} />
        </Flickity>
      </div>
    </section>
  );
};

export default PortfolioSection;
