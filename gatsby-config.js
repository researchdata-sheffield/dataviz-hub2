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
    `gatsby-plugin-react-helmet`,
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
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'author',
        path: `./src/author`,
      },
    },
    /******************************* MDX Plugins *******************************************/
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // Apply gatsby-mdx to both .mdx and .md files
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/blogPostTemplate.jsx'),
        },
        plugins: [
          `gatsby-remark-prismjs`
        ],

        gatsbyRemarkPlugins: [
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
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
              toHeading: 6
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
                },
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            // Use this plugin instead of remark-image, since latter cannot style images individuallly
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`bmp`, `tiff`],
            },
          },

        ]
      }
    },
    /************************** END MDX Plugins *********************************/
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js',
      },
    },
    "gatsby-remark-embed-video",
    `gatsby-remark-responsive-iframe`,
    `gatsby-remark-reading-time`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-eslint',
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
        component: require.resolve(`./src/components/layout.jsx`),
      },
    },
    {
      resolve: `gatsby-source-eventbrite-multi-accounts`,
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
        cache_busting_mode: 'none'   // Work with offline plugin
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require('tailwindcss')(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },

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
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['**/*']
         }
      }
   },
   `gatsby-plugin-sass`,
   {
    resolve: `gatsby-plugin-advanced-sitemap`,
    options: {
        // 1 query for each data type
      query: `
      {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }`,
      mapping: {
          // Each data type can be mapped to a predefined sitemap
          // Routes can be grouped in one of: posts, tags, authors, pages, or a custom name
          // The default sitemap - if none is passed - will be pages
          allMdx: {
              sitemap: `posts`,
          },
      },
      exclude: [
        `/404`,
        /(\/)?hash-\S*/, // you can also pass valid RegExp to exclude internal tags for example
      ],
      createLinkInHead: true, // optional: create a link in the `<head>` of your site
      addUncaughtPages: true, 
    }
    }

  ],
}
