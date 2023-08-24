import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import useWeb3forms from "@web3forms/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiFillLinkedin, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { useSectionInView } from "../Lib/hooks";
import SectionHeading from "../Components/SectionHeading";
// Import the CSS file
import "./Contact.css";

interface FormData {
  email: string;
  subject: string;
  message: string;
}
const Home: NextPage = () => {
  const { ref } = useSectionInView("Contact");
  // for submit message
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const {
    formState: { errors },
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const { submit } = useWeb3forms<FormData>({
    // this is fine because key is just hash for email
    access_key: "786f4ca4-46cc-40ac-9771-2766e950d64a",
    settings: {
      from_name: "Jack's Personal Website",
    },

    onSuccess: (successMessage) => {
      setMessage(successMessage);
      setIsError(false);
      setIsSuccess(true);
      reset();

      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    },
    onError: (errorMessage) => {
      setMessage(errorMessage);
      setIsSuccess(false);
      setIsError(true);
    },
  });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 lg:max-w-[800px] ml-auto mr-auto py-1 scroll-mt-28 text-slate-800 dark:text-slate-100"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <div className="mb-2 sm:mb-4 text-4xl tracking-tight font-extrabold flex justify-center items-center text-slate-900 dark:text-white">
        <a
          href="mailto:jack.li19996@gmail.com"
          className="text-slate-800 dark:text-slate-400"
        >
          <AiOutlineMail className="w-8 h-8 inline-block" />
        </a>
        <a
          href="https://www.linkedin.com/in/jackli140/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-800 dark:text-slate-400 ml-4"
        >
          <AiFillLinkedin className="w-8 h-8 inline-block" />
        </a>
        <a
          href="tel:8564921879"
          className="text-slate-800 dark:text-slate-400 ml-4"
        >
          <AiFillPhone className="w-8 h-8 inline-block" />
        </a>
      </div>
      <p className="text-lg sm:text-xl py-4 sm:py-2 leading-8 text-slate-800 dark:text-slate-400">
        Reach out if you have questions, ideas, or just want to say hello.
        I&apos;d love to hear from you!
      </p>
      <form className="space-y-8">
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="text-md sm:text-lg font-medium pt-8 pb-2 text-slate-600 dark:text-slate-100"
          >
            Your email
          </label>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            placeholder="name@example.com"
            className={`shadow-sm border text-slate-900 text-sm rounded-xl focus:outline-none block w-full p-2.5 dark:bg-slate-800 dark:placeholder-slate-400 dark:text-white dark:shadow-sm-light border-slate-300 dark:border-slate-900 ${
              errors.email
                ? "dark:focus:border-red-700 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-700 "
                : "dark:focus:border-teal-500 focus:ring-teal-500 focus:border-teal-500 dark:focus:ring-teal-500"
            }`}
            // className="shadow-sm border border-slate-300 text-slate-900 text-sm rounded-xl focus:outline-none focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-900 dark:placeholder-slate-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
          />
          {errors.email && (
            <p className="error-msg last:text-xs text-red-700">
              Please enter a valid email
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="text-md sm:text-lg font-medium pt-8 pb-2 text-slate-500 dark:text-slate-100"
          >
            Subject
          </label>
          <div className="relative">
            <input
              type="text"
              {...register("subject", {
                required: true,
                minLength: 3,
              })}
              className={`shadow-sm border text-slate-900 text-sm rounded-xl focus:outline-none block w-full p-2.5 dark:bg-slate-800 dark:placeholder-slate-400 dark:text-white dark:shadow-sm-light border-slate-300 dark:border-slate-900 ${
                errors.subject
                  ? "dark:focus:border-red-700 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-700 "
                  : "dark:focus:border-teal-500 focus:ring-teal-500 focus:border-teal-500 dark:focus:ring-teal-500"
              }`}
              placeholder="Put your subject here"
            />
            {errors.subject && (
              <p className="error-msg text-xs text-red-700">
                Please enter a valid subject line
              </p>
            )}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-md sm:text-lg font-medium pt-8 pb-2 text-slate-500 dark:text-slate-100"
          >
            Your message
          </label>
          <textarea
            rows={6}
            {...register("message", {
              required: true,
              minLength: 3,
            })}
            placeholder="Rest of your message here!"
            className={`shadow-sm border text-slate-900 text-sm rounded-xl focus:outline-none block w-full p-2.5 dark:bg-slate-800 dark:placeholder-slate-400 dark:text-white dark:shadow-sm-light border-slate-300 dark:border-slate-900 ${
              errors.message
                ? "dark:focus:border-red-700 focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-700 "
                : "dark:focus:border-teal-500 focus:ring-teal-500 focus:border-teal-500 dark:focus:ring-teal-500"
            }`}
          />
          {errors.message && (
            <p className="error-msg text-xs text-red-700">
              Please enter a valid message
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-100 px-4 py-2 border-none rounded-md  dark:text-slate-200"
            onClick={handleSubmit(submit)}
          >
            Send message
          </button>
        </div>
        <div className="flex justify-center">
          {isSuccess && (
            <p className="text-green-500 text-sm font-semibold">{message}</p>
          )}
          {isError && (
            <p className="text-red-500 text-sm font-semibold">{message}</p>
          )}
        </div>
      </form>
    </motion.section>
  );
};
export default Home;
