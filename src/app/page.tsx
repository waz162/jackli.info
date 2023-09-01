"use client"; // This is a client component 👈🏽
import React from "react";
import Head from "next/head";
import Header from "../app/Sections/Header";
import About from "../app/Sections/About";
import Experience from "../app/Sections/Experience";
import Portfolio from "../app/Sections/Portfolio";
import Contact from "../app/Sections/Contact";
import Footer from "../app/Sections/Footer";
import Skills from "../app/Sections/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jack Li Portfolio</title>
        <meta name="description" content="Jack Li Portfolio" />
        <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
      </Head>

      <main className="px-10  md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Header />
          <About />
        </section>
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
