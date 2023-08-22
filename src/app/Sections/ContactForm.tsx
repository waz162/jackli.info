import React, { useState } from "react";
import useWeb3forms from "@web3forms/react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  checkbox: boolean;
}


const ContactForm = () => {
  const [accessKey] = useState("786f4ca4-46cc-40ac-9771-2766e950d64a");
  interface FormData {
    email: string;
    subject: string;
    message: string;
  }

  const {
    formState: {errors},
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const { submit } = useWeb3forms<FormData>({
    access_key: accessKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your website",
    },
    onSuccess: (successMessage) => {
      alert(successMessage);
      reset();
    },
    onError: (errorMessage) => {
      alert(errorMessage);
    }
  });

  return (
    <section>
      <div className="py-1 dark:text-slate-100">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-900 dark:text-white">
          Contact Me
        </h2>
        <p className="text-xl py-2 leading-8 text-slate-800 dark:text-slate-400">
          Reach out if you have questions, ideas, or just want to say hello.
          I&apos;d love to hear from you!
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="text-lg font-medium pt-8 pb-2 dark:text-slate-100"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm border border-slate-300 text-slate-900 text-sm rounded-xl focus:outline-none focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-slate-800 dark:border-slate-900 dark:placeholder-slate-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
              placeholder="name@example.com"
              required
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className='error-msg'>Please enter a valid email</p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="text-lg font-medium pt-8 pb-2 dark:text-slate-100"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-slate-900 rounded-xl border border-slate-300 shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 dark:bg-slate-800 dark:border-slate-900 dark:placeholder-slate-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
              placeholder="Put your subject here"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="text-lg font-medium pt-8 pb-2 dark:text-slate-100"
            >
              Your message
            </label>
            <input
              id="message"
              {...register('message', {
                required: true,
                minLength: 3,
              })}
              type="text"
              // className="block p-2.5 w-full text-sm text-slate-900 rounded-xl shadow-sm border border-slate-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 dark:bg-slate-800 dark:border-slate-900 dark:placeholder-slate-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="Rest of your message here!"
            ></input>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-100 px-4 py-2 border-none rounded-md  dark:text-slate-200"
              onClick={handleSubmit(submit)}
            >
              Send message
            </button>
          </div>
        {/* {isSubmitSuccessful && isSuccess && (
          <div className="mt-3 text-sm text-center text-green-500">
            {message || "Success. Message sent successfully"}
          </div>
        )}
        {isSubmitSuccessful && !isSuccess && (
          <div className="mt-3 text-sm text-center text-red-500">
            {message || "Something went wrong. Please try later."}
          </div>
        )} */}
        </form>
        <div className="h-16"></div>
      </div>
    </section>
  );
};

export default ContactForm;
