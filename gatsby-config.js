module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Freelance Web Developer",
    description: "Sam Adjei Web Developer",
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
    `gatsby-plugin-offline`,
  ],
}
