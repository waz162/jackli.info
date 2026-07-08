"use client";

import React from "react";
import About from "./Sections/About";
import Experience from "./Sections/Experience";
import Portfolio from "./Sections/Portfolio";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Skills from "./Sections/Skills";

export default function Home() {
  return (
    <main className="px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <About />
      </section>
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
