import React from "react";
import Image from "next/image";
import design from "../../../public/design.png";
import code from "../../../public/code.png";
import consulting from "../../../public/consulting.png";

const Experience: React.FC = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1 dark:text-slate-100">My Experience</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-400">
          Officia pariatur Lorem eiusmod id ut nostrud ex exercitation non
          fugiat excepteur. Voluptate{" "}
          <span className="text-teal-500 dark:text-teal-300">nulla</span>{" "}
          deserunt est voluptate do officia. Ipsum anim{" "}
          <span className="text-teal-500 dark:text-teal-300">nostrud</span>{" "}
          exercitation proident consectetur occaecat labore reprehenderit ut
          nostrud labore ut consectetur. Esse esse nostrud quis minim ea sint
          fugiat.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-400">
          Est nostrud magna do ullamco. Labore enim exercitation nulla voluptate
          ad cillum sit labore culpa ullamco officia ipsum. Elit est et non
          incididunt. Voluptate deserunt occaecat laborum ut elit anim.
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800">
          <Image
            src={design}
            alt="design"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-slate-100">
            Beautifully Designed Code
          </h3>
          <p className="py-2 dark:text-slate-400">
            Creating elegant code suited for your needs.
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-300">
            TechStack I use
          </h4>
          <p className="text-gray-800 py-1 dark:text-slate-400">Typescript</p>
          <p className="text-gray-800 py-1 dark:text-slate-400">React</p>
          <p className="text-gray-800 py-1 dark:text-slate-400">Python</p>
          <p className="text-gray-800 py-1 dark:text-slate-400">AWS</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800">
          <Image
            src={code}
            alt="design"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-slate-100">
            Beauitfully Designed Code
          </h3>
          <p className="py-2 dark:text-slate-400">
            Creating elegant code suited for your needs.
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-300">
            TechStack I use
          </h4>
          <p className="text-gray-800 py-1 dark:text-slate-400">Typescript</p>
          <p className="text-gray-800 py-1 dark:text-slate-400">React</p>
          <p className="text-gray-800 py-1 dark:text-slate-400">Python</p>
          <p className="text-gray-800 py-1 dark:text-slate-400">AWS</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-slate-800">
          <Image
            src={consulting}
            alt="design"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 dark:text-slate-100">
            Beauitfully Designed Code
          </h3>
          <p className="py-2 dark:text-slate-400">
            Creating elegant code suited for your needs.
          </p>
          <h4 className="py-4 text-teal-600 dark:text-teal-300">
            TechStack I use
          </h4>
          <p className="text-gray-800 py-1 dark:text-slate-400">Typescript</p>
          <p className="text-gray-800 py-1 dark:text-slate-400">React</p>
          <p className="text-gray-800 py-1 dark:text-slate-400">Python</p>
          <p className="text-gray-800 py-1 dark:text-slate-400">AWS</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
