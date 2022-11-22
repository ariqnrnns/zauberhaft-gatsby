import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Feature() {
  return (
    <section className="xs-p-y-16 md-p-y-24 bg-gray-50 dark-bg-gray-900">
      <div className="container container-xl">
        <div className="split-screen items-center">
          <div className="flex flex-column xs-m-b-8 md-m-b-0 md-m-r-8 md-w-50">
            <h2 className="m-b-6 font-semibold">
              Focus on the business & the users
            </h2>

            <div className="flex flex-column m-b-8">
              <div className="flex items-center m-b-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ai ai-Check m-r-3 blue-600 dark-blue-300"
                >
                  <title>Agency case study blog item icon</title>
                  <path d="M4 12l6 6L20 6"></path>
                </svg>
                <p>
                  Start from user research to bring the best product experience
                </p>
              </div>
              <div className="flex items-center m-b-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ai ai-Check m-r-3 blue-600 dark-blue-300"
                >
                  <path d="M4 12l6 6L20 6"></path>
                </svg>
                <p>
                  Continuously work together with clients to deliver satisfying
                  results
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ai ai-Check m-r-3 blue-600 dark-blue-300"
                >
                  <title>Agency case study blog item icon</title>
                  <path d="M4 12l6 6L20 6"></path>
                </svg>
                <p>
                  Group of skilled designers & developers without bureaucratic
                  hurdles
                </p>
              </div>
            </div>
            <a
              href="https://ravenbrightdesign.gumroad.com"
              className="btn dark-bg-blue-500 btn-lg shadow-lg"
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
                <path d="M12 15V3m0 12l-4-4m4 4l4-4"></path>
                <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21H19.439a2 2 0 0 0 1.94-1.515L22 17"></path>
              </svg>
            </a>
          </div>

          <StaticImage
            quality={75}
            placeholder="blurred"
            className="radius-md m-b-6 md-w-50"
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
            width={640}
            aspectRatio={16 / 9}
            objectFit="cover"
            loading="eager"
            objectPosition="50% 50%"
            alt="Business & work - Unsplash image by @brookecagle - https://unsplash.com/photos/-uHVRvDr7pg"
          />
        </div>
      </div>
    </section>
  );
}
