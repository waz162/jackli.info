"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import Head from "next/head";
import Header from "../../src/app/Sections/Header";
import About from "../../src/app/Sections/About";
import Experience from "../../src/app/Sections/Experience";
import Portfolio from "../../src/app/Sections/Portfolio";
import ContactForm from "../../src/app/Sections/ContactForm";
import Footer from "../../src/app/Sections/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jack Li Portfolio</title>
        <meta name="description" content="Jack Li Portfolio" />
        <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-900">
        <section className="min-h-screen">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <About />
        </section>
        <Experience />
        <Portfolio />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
}
