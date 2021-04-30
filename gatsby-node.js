/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const { createFilePath } = require('gatsby-source-filesystem')
const kebabCase = require(`lodash.kebabcase`)
const path = require("path")

// prevent error from canvas used by trianglify
exports.onCreateWebpackConfig = ({
  stage,
  loaders,
  actions,
}) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
};



/**
 *  Create file path for blog posts/docs/  further new routes
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    const [month, day, year] = new Date(node.frontmatter.date)
      .toLocaleDateString("en-EN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
    
    // remove words like blog, date
    const slug = value.replace("/blog/", "").replace(/\/$/, "").replace(/\d{4}-\d{1,2}-\d{1,2}-/, "");
    // determine the type of the page
    const type = node.frontmatter.type || "blog";
    // concat all information
    const url = `/${type}/${day}/${month}/${year}${slug}`;
    
    // url to be used
    createNodeField({
      node,
      name: `slug`,
      value: url,
    });
    // preserve origin file path
    createNodeField({
      node,
      name: `slugOrigin`,
      value: value,
    });
  }
}



/**
 *  Create blog posts
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  console.log("MESSAGE: Creating blog posts ...");
  // De-structure the createPage function from the actions object
  const { createPage, createRedirect } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog/blogPostTemplate.jsx`)
  const blogPostTemplateCustom = path.resolve(`./src/templates/blog/blogPostTemplateCustom.jsx`)
  const blogTemplate = path.resolve(`./src/templates/blog/blogTemplate.jsx`)
  const blogTagTemplate = path.resolve(`./src/templates/blog/blogTagTemplate.jsx`)
  const blogCategoryTemplate = path.resolve(`./src/templates/blog/blogCategoryTemplate.jsx`)

  const docsTemplate = path.resolve(`./src/templates/docs/docsTemplate.jsx`);
  const docsTemplateCustom = path.resolve(`./src/templates/docs/docsTemplateCustom.jsx`)

  // one query for each type of file: blog, docs, (insert any new types here)
  const result = await graphql(`{
    docsQuery: allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {type: {eq: "docs"}, isPublished: {ne: false}}}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            template
            author {
              name
              avatar {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                }
              }
            }
            title
            date(formatString: "dddd Do MMMM YYYY")
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            d3
            type
          }
        }
      }
    }
    blogQuery: allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {type: {eq: null}, isPublished: {ne: false}}}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            template
            author {
              name
              avatar {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                }
              }
            }
            title
            date(formatString: "dddd Do MMMM YYYY")
            category
            tag
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            d3
            type
          }
        }
      }
    }
  }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query.')
  }


  /**
   * DOCS
   */

  console.log("MESSAGE: Creating docs routes ...");
  const docsMdx = result.data.docsQuery.edges;

  docsMdx.forEach(( {node}, index, arr ) => {
    // position of previous/next post
    const prevDoc = arr[index - 1]
    const nextDoc = arr[index + 1]

    // Check what template the markdown file have chosen 
    const docsTemplateFinal = node.frontmatter.template === "custom" ? docsTemplateCustom : docsTemplate

    createPage({
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: docsTemplateFinal,
      // You can use the values in this context in
      // our page layout component
      context: { 
        id: node.id,
        slug: node.fields.slug,
        prev: prevDoc,
        next: nextDoc,
      },
    })
  })

  /**
   * BLOGPOST
   */

  const posts = result.data.blogQuery.edges
  const postsPerPage = 12
  var numPages = posts.length
  const categories = []
  const tags = []

  // exclude certain tags/categories
  const exclude = ["Learning Path", ]

  // Call `createPage` for each result/post
  // index: current index of element
  posts.forEach(( {node}, index, arr ) => {
    var excluded = false;

    // For each post, add their tags/categories to arrays
    node.frontmatter.category.forEach((cat) => {
      if(!exclude.includes(cat)) categories.push(cat)
      else excluded = true
    })
    node.frontmatter.tag.forEach((tag) => {
      if(!exclude.includes(tag)) tags.push(tag)
      else excluded = true
    })
    
    // position of previous/next post
    const prev = arr[index - 1]
    const next = arr[index + 1]

    // Check what template the markdown file have chosen 
    const template = node.frontmatter.template === "custom" ? blogPostTemplateCustom : blogPostTemplate

    createPage({
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: template,
      // You can use the values in this context in
      // our page layout component
      context: { 
        id: node.id,
        slug: node.fields.slug,
        prev: prev,
        next: next,
      },
    })
    if(excluded == true) {
      numPages = numPages - 1;
    }
    // Set up redirects for old blogpost url
    createRedirect({ fromPath: node.fields.slug.split('-').join('_'), toPath: node.fields.slug})
  })

  // Set up redirects for old blogpost url
  createRedirect(
    { 
    fromPath: '/blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic', 
    toPath: '/blog/11/06/2020/simple-data-visualisations-have-become-key-to-communicating-about-the-COVID-19-pandemic'
    }
  )
  
  numPages = Math.ceil(numPages / postsPerPage)
  //console.log("Number of total posts: " + numPages)

  // Compare function
  function compareItem(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase(), 'en', { sensitivity: 'base'})
  }

  // Count number of posts in each cat/tag
  const countCategories = categories.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})
  const allCategories = Object.keys(countCategories).sort(compareItem)

  const countTags = tags.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})
  const allTags = Object.keys(countTags).sort(compareItem)



  // Creating blog list with pagination
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages,
        categories: allCategories,
        tags: allTags,
        countTags
      },
    })
  })
  

  allTags.forEach((tag) => {
    const link = `/blog/tag/${kebabCase(tag)}`

    Array.from({
      length: Math.ceil(countTags[tag] / postsPerPage),
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/page/${i + 1}`,
        component: blogTagTemplate,
        context: {
          categories: allCategories,
          tag: tag,
          tags: allTags,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(countTags[tag] / postsPerPage),
          countTags
        },
      })
    })
  })
  

  allCategories.forEach((cat) => {
    const link = `/blog/category/${kebabCase(cat)}`

    Array.from({
      length: Math.ceil(countCategories[cat] / postsPerPage),
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/page/${i + 1}`,
        component: blogCategoryTemplate,
        context: {
          categories: allCategories,
          category: cat,
          tags: allTags,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(countCategories[cat] / postsPerPage),
          countTags
        },
      })
    })
  })

}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  
  // link author json file to frontmatter
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      author: [AuthorJson] @link(by: "name")
      d3: [String]
    }
  `
  createTypes(typeDefs)
}