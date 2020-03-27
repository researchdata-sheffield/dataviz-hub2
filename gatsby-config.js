

module.exports = {
  pathPrefix: "/dataviz-hub2",
  siteMetadata: {
    title: `Data Visualisation Hub - The University of Sheffield `,
    description: `Promoting and building community around data visualisation at the University of Sheffield.`,
    author: 'Yu Liang Weng <y.weng@sheffield.ac.uk>',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // Apply gatsby-mdx to both .mdx and .md files
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/blogPostTemplate.jsx'),
        },
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-prismjs`
        ],

        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              maxwidth: 800,
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 100,
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem, margin-left: auto, margin-right: auto, margin-top: 2rem, width: 800px, height: 600px`,

            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (e.g. <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (e.g. for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in gatsby-browser.js
              // right after importing the prism color scheme:
              //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: true,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
              // This adds a new language definition to Prism or extend an already
              // existing language definition. More details on this option can be
              // found under the header "Add new language definition or extend an
              // existing language" below
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },

        ]
      }
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js',
        src1: "https://cdn.jsdelivr.net/npm/typed.js@2.0.11",
        jquery: "https://code.jquery.com/jquery-3.4.1.min.js",
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
    {
      resolve: `gatsby-source-eventbrite`,
      options: {
        // organizationId: `121727010915`, 
        // accessToken: `6NKTPFLQPPWWPPVRVZGI`,  
        organizationId: `394692913883`,
        accessToken: `DYMSC6OLAPPBHLFZ6DKJ`,
        // OPTIONAL: Defaults are Events and Venues
        entities: ['events', 'venues']
      },
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
        icon: `src/images/icon.png` // This path is relative to the root of the site.
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
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
        // ignore: ["fontawesome-svg-core/"]
      }
    },
    {
      resolve: 'gatsby-background-image',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    {
      resolve: 'gatsby-plugin-flexsearch',
      options: {
        // L
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
            indexed: true, // If indexed === true, the field will be indexed.
            resolver: 'frontmatter.title',
            // Attributes for indexing logic. Check https://github.com/nextapps-de/flexsearch#presets for details.
            attributes: {
              encode: "extra",
              tokenize: "strict",
              threshold: 1,
              resolution: 9,
              depth: 4
            },
            store: true, // In case you want to make the field available in the search results.
          },
          {
            name: 'description',
            indexed: true,
            resolver: 'frontmatter.description',
            attributes: {
              encode: "extra",
              tokenize: "strict",
              threshold: 1,
              resolution: 9,
              depth: 4
            },
            store: true,
          },
          {
            name: 'author',
            indexed: true,
            resolver: 'frontmatter.author',
            attributes: {
              encode: "extra",
              tokenize: "strict",
              threshold: 1,
              resolution: 9,
              depth: 4
            },
            store: true,
          },
          {
            name: 'category',
            indexed: true,
            resolver: 'frontmatter.category',
            attributes: {
              encode: "extra",
              tokenize: "strict",
              threshold: 1,
              resolution: 9,
              depth: 4
            },
            store: true,
          },
          {
            name: 'tag',
            indexed: true,
            resolver: 'frontmatter.tag',
            attributes: {
              encode: "extra",
              tokenize: "strict",
              threshold: 1,
              resolution: 9,
              depth: 4
            },
            store: true,
          },
          {
            name: 'url',
            indexed: true,
            resolver: 'fields.slug',
            store: true,
          },
        ],
      },
    }
/*     {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://gatsby-drupal.ddev.local/`,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      },
    } */

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
