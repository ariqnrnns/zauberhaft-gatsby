import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function CaseStudies() {
  return (
    <section className="xs-p-y-16 md-p-y-24 bg-white dark-bg-gray-900">
      <div className="container container-lg">
        <div className="m-b-8 xs-w-100 md-w-50 lg-w-75">
          <h2>
            Clients who successfully launched & revamped their online business
          </h2>
        </div>
      </div>

      <div className="flex flex-column container container-lg">
        <article className="card clickable shadow-gradient p-y-7 xs-p-x-6 radius-lg  flex-row items-center w-100 xs-flex-wrap md-flex-no-wrap bg-white  shadow-md m-b-7">
          <h3 className="visually-hidden">
            Companyxyz got a 40% raise in activation rate across all traffic
            sources{" "}
          </h3>
          <a
            href="https://twitter.com"
            className="spread-link"
            role="button"
            target="_blank"
            aria-label="Companyxyz have increased purchase rate from returning visitors "
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <StaticImage
            quality={75}
            placeholder="blurred"
            className="radius-md xs-m-b-8 md-m-b-0 md-m-r-10 xs-w-100 md-w-50"
            src="https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
            loading="eager"
            width={640}
            aspectRatio={16 / 9}
            alt="Unsplash image by @linkedinsalesnavigator	- https://unsplash.com/photos/YDVdprpgHv4"
          />
          <div className="flex flex-column md-w-50">
            <div className="badge-group m-b-4">
              <span className="badge border-gray-300 badge-sm">
                <svg
                  role="img"
                  aria-label="Agency case study blog item icon"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-check m-r-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Agency case study blog item icon</title>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 12l5 5l10 -10"></path>
                </svg>
                Web redesign
              </span>
            </div>
            <a href="https://twitter.com" className="h5 m-b-3">
              Companyxyz got a 40% raise in activation rate across all traffic
              sources
            </a>
            <p className="item-excerpt">
              Faucibus pulvinar elementum integer enim. Gravida arcu ac tortor
              dignissim convallis aenean et tortor at
            </p>
          </div>
        </article>
        <div className="flex w-100 xs-flex-wrap md-flex-no-wrap">
          <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg border-gray-200 dark-border-gray-700 xs-w-100 lg-w-35 xs-m-b-7 md-m-b-0 md-m-r-7">
            <h3 className="visually-hidden">
              Companyabc have increased their MRR by 17% after redesign{" "}
            </h3>
            <a
              href="https://github.com"
              className="spread-link"
              role="button"
              target="_blank"
              aria-label="Companyabc have increased their MRR by 17% after redesign"
              rel="noopener noreferrer"
            >
              {" "}
            </a>
            <StaticImage
              quality={75}
              placeholder="blurred"
              className="radius-md m-b-6 w-100"
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80"
              width={640}
              aspectRatio={16 / 9}
              alt="Business & work - Unsplash image by judmackrill - https://unsplash.com/photos/Of_m3hMsoAA"
            />
            <div className="flex flex-column">
              <div className="badge-group m-b-4">
                <span className="badge border-gray-300 badge-sm">
                  <svg
                    role="img"
                    aria-label="Agency case study blog item icon"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-check m-r-3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Agency case study blog item icon</title>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  UX Design
                </span>
              </div>
              <a href="github.com" className="h5 m-b-3">
                Companyabc have increased their MRR by 17% after redesign
              </a>
              <p className="item-excerpt">
                Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis
                sapien ornare.
              </p>
            </div>
          </article>
          <div className="flex flex-column xs-w-100 lg-w-65">
            <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg flex-row items-start w-100 xs-flex-wrap lg-flex-no-wrap border-gray-200 dark-border-gray-700 m-b-7">
              <h3 className="visually-hidden">
                Helped Companyfgh integrating the new brand across channels{" "}
              </h3>
              <a
                href="https://producthunt.com"
                className="spread-link"
                role="button"
                target="_blank"
                aria-label="Helped Companyfgh integrating the new brand across channels"
                rel="noopener noreferrer"
              >
                {" "}
              </a>
              <StaticImage
                quality={75}
                placeholder="blurred"
                className="radius-md xs-m-b-8 lg-m-b-0 lg-m-r-8 xs-w-100 lg-w-50"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
                loading="eager"
                width={640}
                aspectRatio={16 / 9}
                alt="Business & work - Unsplash image by @brookecagle - https://unsplash.com/photos/g1Kr4Ozfoac"
              />
              <div className="flex flex-column lg-w-50">
                <div className="badge-group m-b-4">
                  <span className="badge border-gray-300 badge-sm">
                    <svg
                      role="img"
                      aria-label="Agency case study blog item icon"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-check m-r-3"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <title>Agency case study blog item icon</title>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    Brand visual identity
                  </span>
                </div>
                <a href="https://producthunt.com" className="h5 m-b-3">
                  Helped Companyfgh integrating the new brand across channels
                </a>
                <p className="item-excerpt">
                  Vestibulum vehicula dui venenatis neque tempor, accumsan
                  iaculis
                </p>
              </div>
            </article>
            <article className="card clickable p-y-7 xs-p-x-6 lg-p-x-7 radius-lg flex-row items-start w-100 xs-flex-wrap lg-flex-no-wrap border-gray-200 dark-border-gray-700">
              <h3 className="visually-hidden">
                Companyxyz have increased purchase rate from returning visitors{" "}
              </h3>
              <a
                href="https://reddit.com"
                className="spread-link"
                role="button"
                target="_blank"
                aria-label="Companyxyz have increased purchase rate from returning visitors"
                rel="noopener noreferrer"
              >
                {" "}
              </a>
              <StaticImage
                quality={75}
                placeholder="blurred"
                className="radius-md xs-m-b-8 lg-m-b-0 lg-m-r-8 xs-w-100 lg-w-50 height-100"
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80"
                loading="eager"
                width={640}
                aspectRatio={16 / 9}
                alt="Business & work - Unsplash image by @austindistel - https://unsplash.com/photos/rxpThOwuVgE"
              />
              <div className="flex flex-column lg-w-50">
                <div className="badge-group m-b-4">
                  <span className="badge border-gray-300 badge-sm">
                    <svg
                      role="img"
                      aria-label="Agency case study blog item icon"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-check m-r-3"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <title>Agency case study blog item icon</title>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                    Mobile e-commerce redesign
                  </span>
                </div>
                <a href="https://reddit.com" className="h5 m-b-3">
                  Companyxyz have increased purchase rate from returning
                  visitors
                </a>
                <p className="item-excerpt">
                  Vestibulum vehicula dui venenatis
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
