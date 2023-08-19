import React from "react";
import Flickity from "react-flickity-component";
import PortfolioImage from "../Components/PortfolioImage"; // Update the path accordingly
import web1 from "../../../public/web1.png";
import web2 from "../../../public/web2.png";
import web3 from "../../../public/web3.png";
import web4 from "../../../public/web4.png";
import web5 from "../../../public/web5.png";
import web6 from "../../../public/web6.png";

// Import the CSS file
import "./Portfolio.css";

const PortfolioSection: React.FC = () => {
  const flickityOptions = {
    initialIndex: 0,
    cellAlign: "center",
    pageDots: true,
    autoPlay: 3000,
    adaptiveHeight: true,
  };

  return (
    <div>
      <div className="py-2 md:py-5 lg:py-8">
        <h3 className="text-3xl py-1 dark:text-slate-100">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-400">
          As a{" "}
          <span className="text-teal-500 dark:text-teal-300">
            Software Engineer
          </span>
          , I&apos;ve shaped my journey through impactful projects. I revamped
          authentication and built a Content Management System with{" "}
          <span className="text-teal-500 dark:text-teal-300">
            React, Typescript,
          </span>{" "}
          and <span className="text-teal-500 dark:text-teal-300">MariaDB</span>{" "}
          , enhancing content workflows. Agile-driven, I&apos;ve resolved bugs,
          improved UI, and explored diverse tech like{" "}
          <span className="text-teal-500 dark:text-teal-300">AWS</span> and{" "}
          <span className="text-teal-500 dark:text-teal-300">Snowflake</span>.
          I&apos;ve worn many hats so take a look at what I&apos;ve done.
          Projects like{" "}
          <span className="text-teal-500 dark:text-teal-300">CookGPT</span> and{" "}
          <span className="text-teal-500 dark:text-teal-300">
            Smart Rain Barrel
          </span>{" "}
          are some of my favorite projects I&apos;ve done. Take a look below!
        </p>
      </div>

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
  );
};

export default PortfolioSection;
