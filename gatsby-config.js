module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Freelance WordPress Developer",
    description: "I am a freeelance web designer and developer specialising in building bespoke and beautiful websites for buisnesses.",
    author: "Sam Adjei",
    twitterUsername: "@samkadjei",
    image: "/twitter-img.png",
    siteUrl: "https://www.samadjei.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://strapi-porfolio-postgresql.herokuapp.com"
          : "http://localhost:1337",
        queryLimit: 1000,
        contentTypes: [`projects`, `blogs`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["400", "600"],
            },
            { family: "Open Sans" },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sam-Adjei`,
        short_name: `SamAdjei`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/static/favicon.ico`,
      },
	  },
	  `gatsby-plugin-robots-txt`,
	//   Have a look into this later 
	//   {
	// 	  resolve: `gatsby-source-apiserver`,
	// 	  options: {
	// 		  url: 'https://swapi.co/api/people/',
	// 		  method: 'get',
	// 		  entityLevel: `results`,
	// 		  headers: {
	// 			  'Content-Type': 'application/json'
	// 		  },
	// 		  typePrefix: 'internal__',
	// 		  name: `posts`,
	// 		  params: {
	// 			  results: 10
	// 		  },
	// 		  verboseOutput: true,
	// 	  }
	//  }
  ],
}
