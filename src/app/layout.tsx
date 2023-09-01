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
  title: "Jack Li's Personal Website",
  description: "Hi welcome to my website!",
};

// eslint-disable-next-line react-refresh/only-export-components
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-slate-900`}>
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
