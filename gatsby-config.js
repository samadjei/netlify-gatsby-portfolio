module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Freelance Web Developer in London & UK",
    description:
      "Freelance web designer and developer specialising in building beautiful, responsive and modern websites for businesses in the UK",
    author: "Sam Adjei",
    twitterUsername: "@samkadjei",
    image: "/twitter-img.png",
    siteUrl: "https://www.samadjei.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-PF2LZ4RWVW", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K5ZCLXH",
        includeInDevelopment: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://strapi-postgresql-portfolio.herokuapp.com"
          : "http://localhost:1337",
        collectionTypes: [`projects`, `blogs`],
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
        icon: `src/assets/android-chrome-512x512.png`,
        icons: [
          {
            src: `src/assets/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `src/assets/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `src/assets/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `src/assets/apple-touch-icon.png`,
            sizes: `167x167`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `www-samadjei-com-1`,
      },
    },
  ],
}
