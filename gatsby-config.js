require('dotenv').config();

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
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        remarkPlugins: [ require('remark-math')], 

        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `
              <svg aria-hidden="true" data-icon="link" height="20" viewBox="0 0 512 512"><path  d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path></svg>`,
              elements: [ `h2`, `h3`],
            }
          },  
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1600,
            },
          },
          `gatsby-remark-copy-linked-files`,
          'gatsby-remark-numbered-footnotes',
          `gatsby-remark-katex`, //Why doesn't this do anything!
          //`remark-math`,
        ]
      },
    },
   
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     resourceType: `image`,
    //     prefix: `gatsby-source-cloudinary/` 
    //   }
    // },
    // Below switched from gatsby-plugin-feed-mdx
    {
      resolve: `gatsby-plugin-feed`,
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
      }
    },
    //https://www.gatsbyjs.com/plugins/gatsby-transformer-cloudinary/
    // {
    //   resolve: 'gatsby-transformer-cloudinary',
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     uploadFolder: 'gatsby-cloudinary',
    //   },
    // },
  

    // {
    //   resolve: `gatsby-plugin-goatcounter`,
    //   options: {
    //     // Either `code` or `selfHostUrl` is required.
    //     // REQUIRED IF USING HOSTED GOATCOUNTER! https://[my_code].goatcounter.com
    //     code: "finmoorhouse",
    //     head: false,
    //     pixel: true,
    //   },
    // },
  ],
}
