import React from "react";
import Header from "../app/Sections/Header";
import "./globals.css";
import ThemeSwitch from "../app/Components/ThemeSwitch";
import ActiveSectionContextProvider from "../app/Context/ActiveSectionContext";
import ThemeContextProvider from "../app/Context/ThemeContext";
import type { Metadata } from "next";
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
      <body className={inter.className}>
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
