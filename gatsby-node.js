/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require("gatsby-source-filesystem");
const kebabCase = require(`lodash.kebabcase`);
const path = require("path");
const readingTime = require("reading-time");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const fs = require("fs");

exports.onPostBuild = async ({ graphql }) => {
  const { data } = await graphql(`
    {
      pages: allSitePage {
        nodes {
          path
        }
      }
    }
  `);

  const paths = data.pages.nodes.map((item) => item.path);

  return fs.promises
    .writeFile("./tests/websitePaths.json", JSON.stringify(paths))
    .then(() =>
      console.log(
        "Success [/tests/websitePaths.json]: Paths stored in websitePaths.json."
      )
    )
    .catch((error) =>
      console.log("Failed [/tests/websitePaths.json]: ", error)
    );
};

exports.onCreateWebpackConfig = ({ actions, stage, loaders }) => {
  actions.setWebpackConfig({
    plugins: [new NodePolyfillPlugin()],
    resolve: {
      fallback: {
        fs: false
      }
    }
  });

  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            /* prevent error from canvas used by trianglify:
             * error Generating SSR bundle failed Unexpected character '' (1:0)
             */
            test: /canvas/,
            use: loaders.null()
          }
        ]
      }
    });
  }
};

/**
 *  Create file path for blog posts/docs/  further new routes
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });

    // Get file date
    const [month, day, year] = new Date(node.frontmatter.date)
      .toLocaleDateString("en-EN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      })
      .split("/");

    // remove words like blog, date
    const slug = value
      .replace("/blog/", "")
      .replace(/\/$/, "")
      .replace(/\d{4}-\d{1,2}-\d{1,2}-/, "");

    // determine the type of the page
    const type = node.frontmatter.type || "blog";
    // concat all information
    const url = `/${type}/${day}/${month}/${year}${slug}`;

    // url to be used
    createNodeField({
      node,
      name: `slug`,
      value: url
    });
    // preserve origin file path
    createNodeField({
      node,
      name: `slugOrigin`,
      value: value
    });
    // Create reading time
    createNodeField({
      node,
      name: `readingTime`,
      value: readingTime(node.rawBody)
    });
  }
};

/**
 *  Create pages from MDX files
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  console.log("----------------------------------------------------");
  console.log(`Environment: ${process.env.GATSBY_ENV}`);
  console.log("MESSAGE: Creating pages from MDX files ...");
  // De-structure the createPage function from the actions object
  const { createPage, createRedirect } = actions;

  // Load templates
  const blogPostTemplate = path.resolve(
    `./src/templates/blog/blogPostTemplate.jsx`
  );
  const blogPostTemplateCustom = path.resolve(
    `./src/templates/blog/blogPostTemplateCustom.jsx`
  );
  const blogTemplate = path.resolve(`./src/templates/blog/blogTemplate.jsx`);
  const blogTagTemplate = path.resolve(
    `./src/templates/blog/blogTagTemplate.jsx`
  );
  const blogCategoryTemplate = path.resolve(
    `./src/templates/blog/blogCategoryTemplate.jsx`
  );

  const docsTemplate = path.resolve(`./src/templates/docs/docsTemplate.jsx`);
  const docsTemplateCustom = path.resolve(
    `./src/templates/docs/docsTemplateCustom.jsx`
  );

  const visTemplate = path.resolve(
    `./src/templates/visualisation/visTemplate.jsx`
  );
  const visItemTemplate = path.resolve(
    `./src/templates/visualisation/visItemTemplate.jsx`
  );
  const visTagTemplate = path.resolve(
    `./src/templates/visualisation/visTagTemplate.jsx`
  );
  const visCategoryTemplate = path.resolve(
    `./src/templates/visualisation/visCategoryTemplate.jsx`
  );

  // Compare function
  function compareItem(a, b) {
    return a
      .toLowerCase()
      .localeCompare(b.toLowerCase(), "en", { sensitivity: "base" });
  }

  // one query for each type of file: blog, docs, (insert any new types here)
  const queryResult = await graphql(`
    query loadMdxQuery {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              template
              title
              date(formatString: "dddd Do MMMM YYYY")
              category
              tag
              d3
              type
              published
            }
          }
        }
      }
    }
  `);
  if (queryResult.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query.');
  }

  let result = queryResult;

  /** in production, don't create unpublished pages
   * Query result (result.data) contain one object for each subquery
   * Example (blog): blogpost = result.data.blogQuery.edges. This is an array of blog post objects.
   * To get the frontmatter of a blog post, use blogpost[index].node.frontmatter
   */
  if (process.env.NODE_ENV == "production") {
    result.data.allMdx.edges = result.data.allMdx.edges.filter((obj) => {
      return obj.node.frontmatter.published !== false;
    });
  }

  /**
   * VISUALISATION
   */
  console.log("MESSAGE: Creating visualisation routes ...");

  let visMdx = result.data.allMdx.edges.filter((obj) => {
    return obj.node.frontmatter.type === "visualisation";
  });

  const visCategories = [];
  const visTags = [];

  visMdx.forEach(({ node }, index, arr) => {
    const prevVis = arr[index - 1];
    const nextVis = arr[index + 1];

    node.frontmatter.category &&
      node.frontmatter.category.forEach((cat) => {
        visCategories.push(cat);
      });
    node.frontmatter.tag &&
      node.frontmatter.tag.forEach((tag) => {
        visTags.push(tag);
      });

    createPage({
      path: node.fields.slug,
      component: visItemTemplate,
      context: {
        id: node.id,
        slug: node.fields.slug,
        prev: prevVis,
        next: nextVis
      }
    });
  });

  // Count number of visualisation in each cat/tag
  const countVisCats = visCategories.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});
  const countVisTags = visTags.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});

  // Put tags and categories in one array
  const allVisCatTag = [];

  for (const [key, value] of Object.entries(countVisCats)) {
    allVisCatTag.push({
      name: key,
      type: "category",
      count: value
    });
  }

  for (const [key, value] of Object.entries(countVisTags)) {
    allVisCatTag.push({
      name: key,
      type: "tag",
      count: value
    });
  }

  // create page for each tag
  allVisCatTag
    .filter((item) => item.type === "tag")
    .forEach((tag) => {
      const link = `/visualisation/tag/${kebabCase(tag.name)}`;
      createPage({
        path: link,
        component: visTagTemplate,
        context: {
          pagePath: link,
          tag: tag.name,
          allVisCatTag: allVisCatTag
        }
      });
    });

  // create page for each category
  allVisCatTag
    .filter((item) => item.type === "category")
    .forEach((cat) => {
      const link = `/visualisation/category/${kebabCase(cat.name)}`;

      createPage({
        path: link,
        component: visCategoryTemplate,
        context: {
          pagePath: link,
          category: cat.name,
          allVisCatTag: allVisCatTag
        }
      });
    });

  createPage({
    path: `/visualisation`,
    component: visTemplate,
    context: {
      pagePath: `/visualisation`,
      allVisCatTag: allVisCatTag
    }
  });

  /**
   * DOCS
   */
  console.log("MESSAGE: Creating docs routes ...");
  let docsMdx = result.data.allMdx.edges.filter((obj) => {
    return obj.node.frontmatter.type === "docs";
  });

  docsMdx.forEach(({ node }, index, arr) => {
    const prevDoc = arr[index - 1];
    const nextDoc = arr[index + 1];

    // Check what template the markdown file have chosen
    const docsTemplateFinal =
      node.frontmatter.template === "custom"
        ? docsTemplateCustom
        : docsTemplate;

    createPage({
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      component: docsTemplateFinal,
      // You can use the values in this context in page layout component
      context: {
        id: node.id,
        slug: node.fields.slug,
        prev: prevDoc,
        next: nextDoc
      }
    });
  });

  /**
   * BLOGPOST
   */
  console.log("MESSAGE: Creating blog post routes ...");
  console.log("----------------------------------------------------");
  const posts = result.data.allMdx.edges.filter((obj) => {
    return obj.node.frontmatter.type == null;
  });

  const POSTS_PER_PAGE = 12;
  var numPages = posts.length;
  const categories = [];
  const tags = [];

  // exclude certain tags/categories
  const exclude = ["Learning Path"];

  // Call `createPage` for each result/post
  posts.forEach(({ node }, index, arr) => {
    var excluded = false;

    // For each post, add their tags/categories to arrays
    node.frontmatter.category &&
      node.frontmatter.category.forEach((cat) => {
        if (!exclude.includes(cat)) categories.push(cat);
        else excluded = true;
      });
    node.frontmatter.tag &&
      node.frontmatter.tag.forEach((tag) => {
        if (!exclude.includes(tag)) tags.push(tag);
        else excluded = true;
      });

    // position of previous/next post
    const prev = arr[index - 1];
    const next = arr[index + 1];

    const template =
      node.frontmatter.template === "custom"
        ? blogPostTemplateCustom
        : blogPostTemplate;

    createPage({
      path: node.fields.slug,
      component: template,
      context: {
        id: node.id,
        slug: node.fields.slug,
        prev: prev,
        next: next
      }
    });
    if (excluded) {
      numPages = numPages - 1;
    }
    // Set up redirects for old blogpost url
    // createRedirect({ fromPath: node.fields.slug.split('-').join('_'), toPath: node.fields.slug})
  });

  // Set up redirects for old blogpost url
  createRedirect({
    fromPath:
      "/blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic",
    toPath:
      "/blog/11/06/2020/simple-data-visualisations-have-become-key-to-communicating-about-the-COVID-19-pandemic"
  });

  numPages = Math.ceil(numPages / POSTS_PER_PAGE);
  //console.log("Number of total posts: " + numPages)

  // Count number of posts in each cat/tag
  const countCategories = categories.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});
  const allCategories = Object.keys(countCategories).sort(compareItem);

  const countTags = tags.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});
  const allTags = Object.keys(countTags).sort(compareItem);

  // Creating blog list with pagination
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: POSTS_PER_PAGE,
        skip: i * POSTS_PER_PAGE,
        currentPage: i + 1,
        numPages,
        categories: allCategories,
        allTags: allTags,
        countTags
      }
    });
  });

  allTags.forEach((tag) => {
    const link = `/blog/tag/${kebabCase(tag)}`;

    Array.from({
      length: Math.ceil(countTags[tag] / POSTS_PER_PAGE)
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/page/${i + 1}`,
        component: blogTagTemplate,
        context: {
          categories: allCategories,
          tag: tag,
          allTags: allTags,
          limit: POSTS_PER_PAGE,
          skip: i * POSTS_PER_PAGE,
          currentPage: i + 1,
          numPages: Math.ceil(countTags[tag] / POSTS_PER_PAGE),
          countTags
        }
      });
    });
  });

  allCategories.forEach((cat) => {
    const link = `/blog/category/${kebabCase(cat)}`;

    Array.from({
      length: Math.ceil(countCategories[cat] / POSTS_PER_PAGE)
    }).forEach((_, i) => {
      createPage({
        path: i === 0 ? link : `${link}/page/${i + 1}`,
        component: blogCategoryTemplate,
        context: {
          categories: allCategories,
          category: cat,
          allTags: allTags,
          limit: POSTS_PER_PAGE,
          skip: i * POSTS_PER_PAGE,
          currentPage: i + 1,
          numPages: Math.ceil(countCategories[cat] / POSTS_PER_PAGE),
          countTags
        }
      });
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // link author json file to frontmatter
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      author: [AuthorJson] @link(by: "name")
      d3: [String]
    }
  `;
  createTypes(typeDefs);
};
