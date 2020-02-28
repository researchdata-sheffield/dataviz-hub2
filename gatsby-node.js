/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


/**
 *  Create file path for blog posts
 */

const { createFilePath } = require('gatsby-source-filesystem')

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


const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blogPostTemplate.jsx`)
  const blogPostTemplate_custom = path.resolve(`./src/templates/blogPostTemplate_custom.jsx`)
  const blogTemplate = path.resolve(`./src/templates/blogTemplate.jsx`)

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              template
              author
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

  const postsPerPage = 2
  const numPages = Math.ceil(posts.length / postsPerPage)

  // Creating blog list with pagination
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages,
      },
    })
  })
  
  

  
  // you'll call `createPage` for each result
  posts.forEach( ( {node}, index, arr )  => {

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




}

