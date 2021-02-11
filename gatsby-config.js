require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  //pathPrefix: "/dataviz-hub2",
  siteMetadata: {
    title: `Data Visualisation Hub - The University of Sheffield `,
    description: `Promoting and building community around data visualisation at the University of Sheffield.`,
    author: 'Yu Liang Weng <y.weng@sheffield.ac.uk>',
    siteUrl: "https://dataviz.shef.ac.uk"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
        ignore: [`/^[^.]+$|.(?!(js|exe)$)([^.]+$)/`]
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `docs`,
    //     path: `${__dirname}/content/docs`,
    //     ignore: [`/^[^.]+$|.(?!(js|exe)$)([^.]+$)/`]
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'author',
        path: `./src/author`,
      },
    },
    `gatsby-plugin-react-helmet`,
    /******************************* MDX Plugins *******************************************/
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // Apply gatsby-mdx to both .mdx and .md files
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/blog/blogPostTemplate.jsx'),
        },
        remarkPlugins: [
          require('remark-math'),
          require('remark-html-katex')
        ],

        gatsbyRemarkPlugins: [
          'gatsby-remark-code-titles',
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              maxwidth: 700,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              Height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ]
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin: 2rem auto 1.075rem auto, max-width: 800px, height: 600px`,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              fromHeading: 1,
              toHeading: 3
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: ``,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {
                console: `bash`,
                dosini: `ini`,
                env: `bash`,
                es6: `js`,
                flowchart: `none`,
                gitignore: `none`,
                gql: `graphql`,
                htaccess: `apacheconf`,
                mdx: `markdown`,
                ml: `fsharp`,
                sh: `bash`,
                styl: `stylus`,
                terminal: `bash`,
                'r': `c`
                },
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            // Use this plugin instead of remark-image, since latter cannot style images individually
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`bmp`, `tiff`],
            },
          },

        ]
      }
    },
    /************************** END MDX Plugins *********************************/
    "gatsby-remark-embed-video",
    `gatsby-remark-responsive-iframe`,
    `gatsby-remark-reading-time`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', '.cache', 'public'],
        // Any eslint-webpack-plugin options below
      }
    },
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    //`gatsby-plugin-smoothscroll`,
    `gatsby-transformer-json`,
    `gatsby-plugin-emotion`,
    //`gatsby-plugin-twitter`,
    `gatsby-plugin-instagram-embed`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/shared/layout.jsx`),
      },
    },
    {
      resolve: `gatsby-source-eventbrite-multi-accounts`,
      //resolve: `../gatsby-source-eventbrite-multi-accounts`, // local test
      options: {
        organisations: [
          {
            organisationId: process.env.EVENT_ORG_ID_1,
            accessToken: process.env.EVENT_API_KEY_1
          },
          {
            organisationId: process.env.EVENT_ORG_ID_2,
            accessToken: process.env.EVENT_API_KEY_2
          },
        ],
        entities: ['events', 'venues']
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dataviz-hub-tuos`,
        short_name: `dvh-tuos`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        //cache_busting_mode: 'none'   // Work with offline plugin
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-background-image',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    /***************** FLEXSEARCH ********************/
    {
      resolve: 'gatsby-plugin-flexsearch',
      options: {
        languages: ['en'],
        type: 'Mdx', // Filter the node types you want to index
        // Fields to index.
        fields: [
          {
            name: 'id',
            indexed: false, // If indexed === true, the field will be indexed.
            resolver: 'id',
            store: true, // In case you want to make the field available in the search results.
          },
          {
            name: 'title',
            indexed: true,
            resolver: 'frontmatter.title',
            attributes: {
              tokenize: "strict",
              encode: "extra",
              threshold: 1, 
              resolution: 12,
              depth: 1 
            },
            store: true,
          },
          {
            name: 'description',
            indexed: true,
            resolver: 'frontmatter.description',
            attributes: {
              tokenize: "strict",
              encode: "extra",
              threshold: 1, 
              resolution: 12,
              depth: 1 
            },
            store: true,
          },
          {
            name: 'author',
            indexed: true,
            resolver: 'frontmatter.author',
            attributes: {
              tokenize: "full",
              encode: "extra",
              threshold: 1, 
              resolution: 12,
              depth: 1
            },
            store: true,
          },
          {
            name: 'category',
            indexed: true,
            resolver: 'frontmatter.category',
            attributes: {
              tokenize: "full",
              encode: "extra",
              threshold: 1, 
              resolution: 12,
              depth: 1 
            },
            store: true,
          },
          {
            name: 'tag',
            indexed: true,
            resolver: 'frontmatter.tag',
            attributes: {
              tokenize: "full",
              encode: "extra",
              threshold: 1, 
              resolution: 12,
              depth: 1 
            },
            store: true,
          },
          {
            name: 'url',
            indexed: true,
            resolver: 'fields.slug',
            attributes: {
              tokenize: "strict",
              encode: "extra",
              threshold: 1, 
              resolution: 9,
              depth: 4 
            },
            store: true,
          },
        ],
      },
    },
    /***************** END FLEXSEARCH ********************/

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // {
    //   resolve: 'gatsby-plugin-offline',
    //   options: {
    //      workboxConfig: {
    //         globPatterns: ['**/*']
    //      }
    //   }
    // },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) =>
        allSitePage.edges.map(node => {
          return {
            url: `${site.siteMetadata.siteUrl}${node.path}`,
            changefreq: `daily`,
            priority: 0.7,
          }
        }),
        exclude: [
          `/404`
        ]
      }
    },
    `gatsby-plugin-meta-redirect` // make sure to put last in the array
  ],
}
