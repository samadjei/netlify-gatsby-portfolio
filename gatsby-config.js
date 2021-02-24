module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Freelance Web Developer",
    description: "Freelance Web Developer",
    author: "Samuel Adjei",
    twitterUsername: "@samkadjei",
    image: "static/twitter-img.png",
    siteUrl: "https://samadjei.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-190572861-1",
        head: true,
        anonymize: true,
      },
    },
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
              family: "Rubik",
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
        name: `SamAdjei`,
        short_name: `SamAdjei`,
        start_url: `/`,
        background_color: `#FFFFFE`,
        theme_color: `#1b262c`,
        display: `standalone`,
        icon: `src/assets/favicon-32x32.png`,
      },
    },
  ],
}
