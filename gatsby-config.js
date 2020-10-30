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
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                author
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.path,
                  guid:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.path,
                  //custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { 
                    frontmatter: {
                      type:{eq:"post"},
                      subtype:{eq:"ea"},
                    }
                  },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        slug
                        date
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: "writing/rss.xml",
            title: "Fin Moorhouse — Writing.",
            description: "Fin Moorhouse's writing about effective altruism.",
            match: "^/writing/",
          },
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.path,
                  guid:
                    site.siteMetadata.siteUrl +
                    edge.node.frontmatter.path,
                  //custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { 
                    frontmatter: {
                      type:{eq:"post"},
                    }
                  },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        slug
                        date
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: "writing/blog-rss.xml",
            title: "Fin Moorhouse — Writing.",
            description: "Fin Moorhouse's blog.",
            match: "^/writing/",
          }
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
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // replace `UA-XXXXXXXXX-X` with your own Google Analytics Tracking ID
        trackingId: `G-49DJR9BK46`,
        head:true,
        anonymize: true,
      },
    },
  ],
}
