module.exports = {
  siteMetadata: {
    title: `Fin Moorhouse`,
    description: `The portfolio and blog of Fin Moorhouse.`,
    author: `Fin Moorhouse`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fin2.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
      //resolve: `gatsby-plugin-google-analytics`,
      //options: {
      //trackingId: "UA-44315602-2",
      // Defines where to place the tracking script - `true` in the head and `false` in the body
      // head: true,
      // exclude: [
      //  "/portfolio/**",
      // ],
      // Setting this parameter is optional
      // anonymize: true,
      // Setting this parameter is also optional
      // respectDNT: true,
      //},
    },
  ],
}
