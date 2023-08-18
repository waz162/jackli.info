import React from "react";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import pic_of_me from "../../../public/pic_of_me.png";

const About: React.FC = () => {
  return (
    <div className="text-center p-10">
      <h2 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black md:text-6xl">
        Jack Li
      </h2>
      <h3 className="text-2xl py-2 md:text-3xl dark:text-slate-100">
        Fullstack Developer
      </h3>
      <p className="text-md py-5 leading-8 text-slate-700 dark:text-slate-400 md:text-xl max-w-lg mx-auto">
        Tech enthusiast, code aficionado. From building smarter rain barrels to
        whipping up AI-powered recipes, I bring a dash of innovation to every
        byte. Let&apos;s turn ideas into reality through lines of code!
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillGithub />
        <AiFillLinkedin />
        <AiFillInstagram />
        <AiFillMail />
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image src={pic_of_me} fill objectFit="cover" alt="cartoon avatar" />
      </div>
    </div>
  );
};

export default About;
