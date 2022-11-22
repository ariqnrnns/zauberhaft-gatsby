import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import footerData from "../data/FooterData.json";
import socialData from "../data/SocialData.js";

export default function Footer() {
  return (
    <footer id="footer" className="p-y-24 flex flex-column">
      <div className="container container-xl">
        <div className="footer-info border-none">
          <ul className="footer-links">
            <li>
              <a href="#0" className="flex items-center">
                <StaticImage
                  quality={75}
                  placeholder="blurred"
                  className="w-10 h-10"
                  src="../images/logo-40x40.png"
                  width={40}
                  height={40}
                  alt="Zauberhaft - logo"
                />
                <div className="m-l-4 flex items-start flex-column ">
                  <h1 className="h5 font-bold line-h-xl">Zauberhaft</h1>
                  <p className="small align-left">By Ravenbright CSS</p>
                </div>
              </a>
            </li>
          </ul>
          <ul className="footer-links xs-flex-wrap md-flex-no-wrap">
            {footerData.link.map((footerData) => (
              <li className="xs-m-b-8 md-m-b-0 m-l-12" key={footerData.name}>
                <a href={footerData.url} className="subtitle link-footer">
                  {footerData.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container container-xl m-b-6">
        <div className="footer-info">
          <ul className="footer-links">
            {socialData.map((data, index) => (
              <li key={index}>
                <a
                  href={data.socialUrl}
                  className="flex m-r-9"
                  aria-label={data.socialLabel}
                  target="_blank"
                  rel="noopener noreferrer noreferrer nofollow"
                >
                  {data.socialLogo}
                </a>
              </li>
            ))}
          </ul>
          <small>{footerData.copyright}</small>
        </div>
      </div>
      <div className="container container-xl">
        <div className="flex flex-column  lg-w-75">
          <ul className="flex m-b-6 flex-wrap lg-w-75">
            {footerData.attributions.map((data, index, index1) => (
              <li className="m-r-2 caption" key={index}>
                {data.text}

                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer noreferrer nofollow"
                  className="caption m-l-2 underline"
                  key={index1}
                >
                  {data.brandName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
