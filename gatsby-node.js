/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */




const { createFilePath } = require('gatsby-source-filesystem')
const kebabCase = require(`lodash.kebabcase`)
const path = require("path")

/**
 *  Create file path for blog posts
 */

// Here we're adding extra stuff to the "node" (like the slug)
// so we can query later for all blogs and get their slug
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
    
    const slug = value.replace("/blog/", "").replace(/\/$/, "")
    const url = `/blog/${day}/${month}/${year}${slug}`
    
    createNodeField({
      // Individual MDX node
      node,
      // Name of the field you are adding
      name: `slug`,
      // Generated value based on filepath with "blog" prefix
      value: url,
    })
  }
}

/**
 *  Create blog posts
 */


exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog/blogPostTemplate.jsx`)
  const blogPostTemplate_custom = path.resolve(`./src/templates/blog/blogPostTemplate_custom.jsx`)
  const blogTemplate = path.resolve(`./src/templates/blog/blogTemplate.jsx`)
  const blogTagTemplate = path.resolve(`./src/templates/blog/blogTagTemplate.jsx`)
  const blogCategoryTemplate = path.resolve(`./src/templates/blog/blogCategoryTemplate.jsx`)

  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
                    fluid {
                      src
                    }
                  }
                }
              }
              title
              date(formatString: "dddd Do MMMM YYYY")
              category
              tag
              thumbnail {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
              d3
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges

  const postsPerPage = 12
  const numPages = Math.ceil(posts.length / postsPerPage)
  const categories = []
  const tags = []

  const exclude = ["Learning Path", ]

  // Call `createPage` for each result/post
  // index: current index of element
  posts.forEach( ( {node}, index, arr )  => {

    // For each post, add their tags/categories to arrays
    node.frontmatter.category.forEach((cat) => {
      if(!exclude.includes(cat)) categories.push(cat)
    })
    node.frontmatter.tag.forEach((tag) => {
      if(!exclude.includes(tag)) tags.push(tag)
    })
    
    
    const prev = arr[index - 1]
    const next = arr[index + 1]

    // Check what template the markdown file have choosen 
    const template = node.frontmatter.template === "custom" ? blogPostTemplate_custom : blogPostTemplate

    createPage({
      // This is the slug you created before
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
  })


  const countCategories = categories.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})
  const allCategories = Object.keys(countCategories).sort()

  const countTags = tags.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1
    return prev
  }, {})
  const allTags = Object.keys(countTags).sort()

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