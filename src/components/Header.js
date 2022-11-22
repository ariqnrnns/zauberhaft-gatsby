import React from "react";

import { StaticImage } from "gatsby-plugin-image";
function Header() {
  return (
    <header className="sticky flex items-center bg-white dark-bg-black h-20  lg-p-y-8">
      <nav
        className="container container-xl flex justify-between items-center gap-8"
        aria-label="primary nav"
      >
        <ul className="flex items-center gap-8">
          <li className="m-r-8">
            <a href="/" className="flex items-center">
              <StaticImage
                quality={75}
                placeholder="blurred"
                className="w-10 h-10"
                src="../images/logo-40x40.png"
                width={40}
                height={40}
                alt="Zauberhaft - logo"
              />
              <div className="m-l-4 flex items-start flex-column xs-d-none sm-flex">
                <h1 className="h5 font-bold line-h-lg">Zauberhaft</h1>
                <p className="small align-left">By Ravenbright CSS</p>
              </div>
            </a>
          </li>
        </ul>

        <button
          className="btn-md p-0 bg-transparent gray-800 dark-gray-200 xs-d-flex md-d-none"
          aria-label="Mobile menu"
          aria-expanded="false"
        >
          <svg
            aria-label="hamburger menu"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ai ai-TextAlignJustified m-r-3"
          >
            <title>Mobile hamburger menu icon</title>
            <path d="M3 6h18M3 12h18M3 18h18"></path>
          </svg>
          Menu
        </button>
        <ul className="xs-d-none md-flex  items-center gap-5 bg-gray-50 dark-bg-gray-800 dark-white md-p-r-4 md-p-l-6 md-p-y-3 radius-sm flex-wrap">
          <li className="m-r-6">
            <a href="#0" className="link-navbar">
              Works
            </a>
          </li>

          <li className="m-r-6">
            <a href="#0" className="link-navbar">
              About
            </a>
          </li>

          <li className="m-r-4">
            <a href="#0" className="link-navbar">
              Approach
            </a>
          </li>

          <li className="">
            <a
              href="https://ravenbrightdesign.gumroad.com"
              className="btn bg-transparent blue-800 dark-blue-200 border-blue-400 dark-border-blue-400 btn-sm"
              aria-label="download Gatsby template"
              role="button"
            >
              Download Gatsby template
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="m-l-3 ai ai-Download"
              >
                <title>Download template icon</title>
                <path d="M12 15V3m0 12l-4-4m4 4l4-4" />
                <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21H19.439a2 2 0 0 0 1.94-1.515L22 17" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
