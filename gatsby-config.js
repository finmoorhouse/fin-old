module.exports = {
  siteMetadata: {
    title: `Fin Moorhouse`,
    description: `The portfolio and blog of Fin Moorhouse.`,
    author: `Fin Moorhouse`,
    url: `https://www.finmoorhouse.com`,
    siteUrl: `https://www.finmoorhouse.com`,
    twitterUsername: `@finmoorhouse`,
    image: "/meta-image.jpg",
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
              maxWidth: 1600,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-feed-generator",
      options: {
        generator: `GatsbyJS`,
        rss: true, // Set to true to enable rss generation
        json: true, // Set to true to enable json feed generation
        siteQuery: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              author
            }
          }
        }
      `,
        feeds: [
          {
            name: "writing",
            query: `
          {
            allMdx(
              sort: {order: DESC, fields: [frontmatter___date]},
              ) {
              edges {
                node {
                  html
                  frontmatter {
                    date
                    path
                    title
                  }
                }
              }
            }
          }
          `,
            normalize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  html: edge.node.html,
                }
              })
            },
          },
        ],
      },
    },
    `remark-math`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `finmoorhouse.com`,
        short_name: `finm`,
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
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-44315602-2",
        //Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // exclude: [
        //  "/portfolio/**",
        //],
        //  Setting this parameter is optional
        anonymize: true,
        //Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
