import React from "react";
import "../styles/dist/ravenbright.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
        <a
          target="_blank"
          rel="noopener noreferrer noreferrer nofollow"
          href="https://ravenbrightcss.com"
          className="btn bg-white dark-bg-gray-800 gray-800 dark-gray-200 border-gray-200 dark-border-gray-700 btn-sm btn-absolute"
          aria-label="Made with Ravenbright CSS"
        >
          Made with Ravenbright CSS
        </a>
      </main>
      <Footer />
    </>
  );
}
