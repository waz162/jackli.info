import Header from "../app/Sections/Header.tsx";
import "./globals.css";
import Footer from "../app/Sections/Footer";
import ActiveSectionContextProvider from "../app/Context/active-section-context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
