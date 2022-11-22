module.exports = {
  siteMetadata: {
    title: 'Zauberhaft - FREE dark mode agency HTML, Next.js, Gatsby, & Astro site Template made with Ravenbright CSS library',
    siteUrl: 'https://zauberhaft.ravenbright.design',
		image: '',
		description:
		'Build modern &amp; unique agency portfolio websites that convert. Supercharge your online presence &amp; get more customers with responsive &amp; high performance dark mode HTML, Next.js, Gatsby, &amp; Astro template. Easily customize the template with utility classes &amp; CSS custom properties.',
			author: 'Ariq N',
			keywords: 'Free HTML template, agency HTML template, free responsive HTML template, zero configuration, lightweight &, minimal CSS library, dark mode HTML template, modern HTML template, HTML kit, UI template, HTML template, free HTML, free HTML responsive, Astro template, Free Astro template, Astro starter, Nextjs template, Free Nextjs template, Nextjs starter, Gatsby template, Free Gatsby template, Gatsby starter',
			language: 'English',
			twitterUsername: "@twitterusername"
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
		`gatsby-plugin-postcss`,
		{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zauberhaft - FREE dark mode agency HTML, Next.js, Gatsby, & Astro site Template made with Ravenbright CSS library`,
        short_name: `Zauberhaft`,
				icon: `src/images/favicon/favicon-180x180.png`
      }
    }
  ]
};
