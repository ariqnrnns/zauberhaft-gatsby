import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const SEOData = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
    keywords,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    keywords,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      <meta name="og:site_name" content={seo.title} />
      <meta name="og:site" content={seo.url} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta property="og:image:alt" content="" />

      <link rel="canonical" href="https://zauberhaft.ravenbright.design" />
      {children}
    </>
  );
};
