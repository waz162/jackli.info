import React from "react";
import Image from "next/legacy/image";
import web1 from "../../../public/web1.png";
import web2 from "../../../public/web2.png";
import web3 from "../../../public/web3.png";
import web4 from "../../../public/web4.png";
import web5 from "../../../public/web5.png";
import web6 from "../../../public/web6.png";

const PortfolioSection: React.FC = () => {
  return (
    <div>
      <h3 className="text-3xl py-1 dark:text-slate-100">Portfolio</h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-400">
        Officia pariatur Lorem eiusmod id ut nostrud ex exercitation non fugiat
        excepteur. Voluptate{" "}
        <span className="text-teal-500 dark:text-teal-300">nulla</span> deserunt
        est voluptate do officia. Ipsum anim{" "}
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
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image
            alt="web1"
            src={web1}
            className="rounded-lg object-cover"
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            alt="web2"
            src={web2}
            className="rounded-lg object-cover"
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            alt="web3"
            src={web3}
            className="rounded-lg object-cover"
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            alt="web4"
            src={web4}
            className="rounded-lg object-cover"
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            alt="web5"
            src={web5}
            className="rounded-lg object-cover"
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            alt="web6"
            src={web6}
            className="rounded-lg object-cover"
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
