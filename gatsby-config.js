require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  pathPrefix: "/dataviz-hub2-qa",
  siteMetadata: {
    title: `Data Visualisation Hub - The University of Sheffield`,
    description: `Promoting and building community around data visualisation at the University of Sheffield.`,
    author: "Yu Liang Weng <y.weng@sheffield.ac.uk>",
    siteUrl: "https://dataviz.shef.ac.uk"
  },
  flags: {
    FAST_DEV: true
  },
  plugins: [
    {
      // https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        // This is the measurement ID in GA4
        trackingIds: [process.env.QA_ENV ? "G-9F9DQR2Q4S" : "G-C49ZZFBML4"],
        // This config will be shared across all trackingIds
        gtagConfig: {
          // Some countries (such as Germany) require you to use the _anonymizeIP
          anonymize_ip: true,
          cookie_expires: 0,
          enable_web_vitals_tracking: true
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Respect do not track setting from user's browser
          respectDNT: true
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
        ignore: [`/^[^.]+$|.(?!(js|exe)$)([^.]+$)/`, `**/*/*.json`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/content/docs`,
        ignore: [`/^[^.]+$|.(?!(js|exe)$)([^.]+$)/`, `**/*/*.json`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `visualisation`,
        path: `${__dirname}/content/visualisation`,
        ignore: [`/^[^.]+$|.(?!(js|exe)$)([^.]+$)/`, `**/*/*.json`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "data",
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/shared/layout.jsx`)
      }
    },
    /******************************* MDX Plugins *******************************************/
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // Apply gatsby-mdx to both .mdx and .md files
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          posts: require.resolve("./src/templates/blog/blogPostTemplate.jsx"),
          docs: require.resolve("./src/templates/docs/docsTemplate.jsx")
        },
        remarkPlugins: [require("remark-math")],
        gatsbyRemarkPlugins: [
          "gatsby-remark-code-titles",
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
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
                  id: "youtube",
                  embedURL: (videoId) =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`
                }
              ]
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin: 2rem auto 1.075rem auto, max-width: 800px, height: 600px`
            }
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
              icon: ``
            }
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
                r: `c`
              },
              showLineNumbers: true,
              noInlineHighlight: false
            }
          },
          {
            // Use this plugin instead of remark-image, since latter cannot style images individually
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`bmp`, `tiff`]
            }
          }
        ]
      }
    },
    /************************** END MDX Plugins *********************************/
    "gatsby-remark-embed-video",
    `gatsby-remark-responsive-iframe`,
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        stages: ["develop"],
        extensions: ["js", "jsx"],
        exclude: ["node_modules", ".cache", "public"]
        // Any eslint-webpack-plugin options below
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-instagram-embed`,
    {
      resolve: `gatsby-source-eventbrite-multi-accounts`,
      //resolve: require.resolve(`../gatsby-source-eventbrite-multi-accounts`), // local plugin test
      options: {
        organisations: [
          {
            organisationId: process.env.EVENT_ORG_ID_1,
            accessToken: process.env.EVENT_API_KEY_1
          },
          {
            organisationId: process.env.EVENT_ORG_ID_2,
            accessToken: process.env.EVENT_API_KEY_2
          }
        ],
        entities: ["events", "venues"]
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
        icon: `src/images/Favicon_128x128.png`, // This path is relative to the root of the site.
        cache_busting_mode: "none" // Work with offline plugin
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          maximumFileSizeToCacheInBytes: 20971520
        }
      }
    }, // should be listed after the manifest plugin
    "gatsby-plugin-postcss",
    /***************** FLEXSEARCH ********************/
    {
      resolve: "gatsby-plugin-flexsearch",
      options: {
        languages: ["en"],
        type: "Mdx", // Filter the node types you want to index
        // Fields to index.
        fields: [
          {
            name: "id",
            indexed: false, // If indexed === true, the field will be indexed.
            resolver: "id",
            store: true // In case you want to make the field available in the search results.
          },
          {
            name: "title",
            indexed: true,
            resolver: "frontmatter.title",
            attributes: {
              tokenize: "strict",
              encode: "extra",
              threshold: 1,
              resolution: 12,
              depth: 1
            },
            store: true
          },
          {
            name: "description",
            indexed: true,
            resolver: "frontmatter.description",
            attributes: {
              tokenize: "strict",
              encode: "extra",
              threshold: 1,
              resolution: 12,
              depth: 1
            },
            store: true
          },
          {
            name: "author",
            indexed: true,
            resolver: "frontmatter.author",
            attributes: {
              tokenize: "full",
              encode: "extra",
              threshold: 1,
              resolution: 12,
              depth: 1
            },
            store: true
          },
          {
            name: "category",
            indexed: true,
            resolver: "frontmatter.category",
            attributes: {
              tokenize: "full",
              encode: "extra",
              threshold: 1,
              resolution: 12,
              depth: 1
            },
            store: true
          },
          {
            name: "tag",
            indexed: true,
            resolver: "frontmatter.tag",
            attributes: {
              tokenize: "full",
              encode: "extra",
              threshold: 1,
              resolution: 12,
              depth: 1
            },
            store: true
          },
          {
            name: "url",
            indexed: true,
            resolver: "fields.slug",
            attributes: {
              tokenize: "strict",
              encode: "extra",
              threshold: 1,
              resolution: 9,
              depth: 4
            },
            store: true
          },
          {
            name: "type",
            indexed: true,
            resolver: "frontmatter.type",
            attributes: {
              tokenize: "full",
              encode: "extra",
              threshold: 1,
              resolution: 12,
              depth: 1
            },
            store: true
          },
          {
            name: "published",
            indexed: true,
            resolver: "frontmatter.published",
            attributes: {
              tokenize: "full",
              encode: "extra",
              threshold: 1,
              resolution: 12,
              depth: 1
            },
            store: true
          },
          {
            name: "date",
            indexed: true,
            resolver: "frontmatter.date",
            attributes: {
              tokenize: "full",
              encode: "extra",
              threshold: 1,
              resolution: 12,
              depth: 1
            },
            store: true
          }
        ]
      }
    },
    /***************** END FLEXSEARCH ********************/
    /*********** RSS Feed ***************/
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] },
                filter: { frontmatter: {published: {ne: false}}}
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 600)
                    fields { 
                      slug 
                    }
                    frontmatter {
                      type
                      title
                      date
                      featured
                      author {
                        name
                      }
                      tag
                      category
                    }
                  }
                }
              }
            }`,
            // For more options/fields in RSS go to https://www.npmjs.com/package/rss
            serialize: ({ query: { site, allMdx } }) => {
              function getAuthorName(node) {
                let authorArr = node.frontmatter.author;
                let authorNames = authorArr.reduce(
                  (author1, author2) => author1.name + ", " + author2.name
                );

                if (authorArr.length === 1) {
                  return authorNames.name;
                }
                return authorNames;
              }

              return allMdx.edges.map(({ node }) => {
                let category = node.frontmatter.category || [];
                let tag = node.frontmatter.tag || [];

                return Object.assign({}, node.frontmatter, {
                  description: node.description,
                  date: node.frontmatter.date,
                  author: getAuthorName(node),
                  categories: [
                    node.frontmatter.type || "blog",
                    ...category,
                    ...tag
                  ],
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.excerpt }]
                });
              });
            },
            output: "/rss.xml",
            title: "Dataviz.Shef RSS Feed",
            image_url:
              "https://github.com/researchdata-sheffield/dataviz-hub2/blob/development/src/images/author/dataviz.png",
            ttl: 1440 // number of minutes feed can be cached before refreshing from source
          }
        ]
      }
    },
    /*********** END RSS Feed ************* */
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        // globally expose the contents to each sass file
        additionalData: `@use "./src/css/_variables" as var;`
      }
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
        openAnalyzer: false,
        analyzerMode: "static",
        reportFilename: "webpack-report.html"
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-meta-redirect` // make sure to put last in the array
  ]
};
