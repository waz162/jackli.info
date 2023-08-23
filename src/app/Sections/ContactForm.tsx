import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import useWeb3forms from "@web3forms/react";
import { useState, useEffect, useRef } from "react";
// Import the CSS file
import "./ContactForm.css";

interface FormData {
  email: string;
  subject: string;
  message: string;
}
const Home: NextPage = () => {
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

  const resetStatus = () => {
    setIsSuccess(false);
    setIsError(false);
    setMessage("");
  };

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
    <div className="py-1 text-slate-800 dark:text-slate-100">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-900 dark:text-white">
        Contact Me
      </h2>
      <p className="text-xl py-2 leading-8 text-slate-800 dark:text-slate-400">
        Reach out if you have questions, ideas, or just want to say hello.
        I&apos;d love to hear from you!
      </p>
      <form className="space-y-8">
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="text-lg font-medium pt-8 pb-2 text-slate-600 dark:text-slate-100"
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
            className="text-lg font-medium pt-8 pb-2 text-slate-500 dark:text-slate-100"
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
            className="text-lg font-medium pt-8 pb-2 text-slate-500 dark:text-slate-100"
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
    </div>
  );
};
export default Home;
