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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // Apply gatsby-mdx to both .mdx and .md files
        extensions: ['.mdx', '.md'],
        defaultLayout: {
          default: require.resolve('./src/templates/blogTemplate.jsx'),
        },
        plugins: [
          `gatsby-remark-images`,
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dataviz-hub-tuos`,
        short_name: `dvh-tuos`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/TUOSlogo-black.png` // This path is relative to the root of the site.
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
        ignore: ["fontawesome-svg-core/"]
      }
    },
    {
      resolve: 'gatsby-background-image',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
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
