import React from "react";

export default function CallToAction() {
  return (
    <section className="xs-p-y-16 md-p-y-32 cta-section">
      <div className="container container-lg">
        <div className="section-title all-center m-b-4">
          <span className="badge badge-sm border-yellow-400 bg-yellow-200 font-semibold dark-black dark-bg-yellow-700 dark-border-none p-x-3 p-y-2 m-b-4">
            Build high-performing sites 🚀
          </span>
          <h2 className=" m-b-6 md-w-75">
            Create{" "}
            <span className="blue-700 dark-blue-300 font-bold">modern</span> &
            satisfying static sites that convert
          </h2>
          <p className="m-b-6 w-75">
            Quisque sagittis purus sit amet volutpat consequat mauris.
          </p>
          <a
            href="https://ravenbrightdesign.gumroad.com"
            className="btn dark-bg-blue-500 btn-lg shadow-md  "
            role="button"
            aria-label="Download Gatsby template"
          >
            Download Gatsby template
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="m-l-3 ai ai-Download"
            >
              <title>Download template</title>
              <path d="M12 15V3m0 12l-4-4m4 4l4-4" />
              <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21H19.439a2 2 0 0 0 1.94-1.515L22 17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
