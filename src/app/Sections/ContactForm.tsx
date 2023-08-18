import React, { useState } from "react";

// write me a function to submit an email form

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Here, you would typically use a library like axios to send the form data to a backend API
      // For this example, we'll just simulate a successful submission
      console.log("Form data:", formData);
      alert("Form submitted successfully!");
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <section>
      <div className="py-1 dark:text-slate-100">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-900 dark:text-white">
          Contact Me
        </h2>
        <p className="text-xl py-2 leading-8 text-slate-800 dark:text-slate-400">
          Reach out if you have questions, ideas, or just want to say hello. I'd
          love to hear from you!
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
            />
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
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-slate-900 rounded-xl shadow-sm border border-slate-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 dark:bg-slate-800 dark:border-slate-900 dark:placeholder-slate-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="Rest of your message here!"
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-100 px-4 py-2 border-none rounded-md  dark:text-slate-200"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
