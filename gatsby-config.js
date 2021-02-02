module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Sam Adjei Freelance Web Developer",
    description: "Portfolio site by Sam Adjei",
    author: "Sam Adjei",
    twitterUsername: "@samkadjei",
    image: "/twitter-img.png",
    //  siteUrl: "https://www.samadjei.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
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
