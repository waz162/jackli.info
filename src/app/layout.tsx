import React from "react";
import Header from "../app/Sections/Header";
import "./globals.css";
import ThemeSwitch from "../app/Components/ThemeSwitch";
import ActiveSectionContextProvider from "../app/Context/ActiveSectionContext";
import ThemeContextProvider from "../app/Context/ThemeContext";
import type { Metadata } from "next";
import AnimatedBackgroundBlur from "./Components/AnimatedBackgroundBlur";
import { Inter } from "next/font/google";

/* eslint-disable react-refresh/only-export-components */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jackli.info"),
  title: "Jack Li · AI Products",
  description:
    "Full-stack engineer building AI-powered products — on-device Foundation Models, LLM workflows, and modern web apps.",
  openGraph: {
    title: "Jack Li · AI Products",
    description:
      "Full-stack engineer building AI-powered products — on-device Foundation Models, LLM workflows, and modern web apps.",
    url: "https://jackli.info",
    siteName: "Jack Li",
    images: [
      {
        url: "/jack-li-logo.png",
        width: 2000,
        height: 1500,
        alt: "Jack Li",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jack Li · AI Products",
    description:
      "Full-stack engineer building AI-powered products — on-device Foundation Models, LLM workflows, and modern web apps.",
    images: ["/jack-li-logo.png"],
  },
};

// eslint-disable-next-line react-refresh/only-export-components
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.className} overflow-x-hidden bg-gray-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100`}
      >
        <AnimatedBackgroundBlur />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
