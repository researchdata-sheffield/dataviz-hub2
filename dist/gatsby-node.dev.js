"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
var _require = require('gatsby-source-filesystem'),
    createFilePath = _require.createFilePath;

var kebabCase = require("lodash.kebabcase");

var path = require("path");
/**
 *  Create file path for blog posts
 */
// Here we're adding extra stuff to the "node" (like the slug)
// so we can query later for all blogs and get their slug


exports.onCreateNode = function (_ref) {
  var node = _ref.node,
      actions = _ref.actions,
      getNode = _ref.getNode;
  var createNodeField = actions.createNodeField;

  if (node.internal.type === 'Mdx') {
    var value = createFilePath({
      node: node,
      getNode: getNode
    });

    var _toLocaleDateString$s = new Date(node.frontmatter.date).toLocaleDateString("en-EN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).split("/"),
        _toLocaleDateString$s2 = _slicedToArray(_toLocaleDateString$s, 3),
        month = _toLocaleDateString$s2[0],
        day = _toLocaleDateString$s2[1],
        year = _toLocaleDateString$s2[2];

    var slug = value.replace("/blog/", "").replace(/\/$/, "");
    var url = "/blog/".concat(day, "/").concat(month, "/").concat(year).concat(slug);
    createNodeField({
      // Individual MDX node
      node: node,
      // Name of the field you are adding
      name: "slug",
      // Generated value based on filepath with "blog" prefix
      value: url
    });
  }
};
/**
 *  Create blog posts
 */


exports.createPages = function _callee(_ref2) {
  var graphql, actions, reporter, createPage, blogPostTemplate, blogPostTemplate_custom, blogTemplate, blogTagTemplate, blogCategoryTemplate, result, posts, postsPerPage, numPages, categories, tags, exclude, countCategories, allCategories, countTags, allTags;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          graphql = _ref2.graphql, actions = _ref2.actions, reporter = _ref2.reporter;
          // Destructure the createPage function from the actions object
          createPage = actions.createPage;
          blogPostTemplate = path.resolve("./src/templates/blog/blogPostTemplate.jsx");
          blogPostTemplate_custom = path.resolve("./src/templates/blog/blogPostTemplate_custom.jsx");
          blogTemplate = path.resolve("./src/templates/blog/blogTemplate.jsx");
          blogTagTemplate = path.resolve("./src/templates/blog/blogTagTemplate.jsx");
          blogCategoryTemplate = path.resolve("./src/templates/blog/blogCategoryTemplate.jsx");
          _context.next = 9;
          return regeneratorRuntime.awrap(graphql("\n    query {\n      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {\n        edges {\n          node {\n            id\n            fields {\n              slug\n            }\n            frontmatter {\n              template\n              author {\n                name\n                avatar {\n                  childImageSharp {\n                    fluid {\n                      src\n                    }\n                  }\n                }\n              }\n              title\n              date(formatString: \"dddd Do MMMM YYYY\")\n              category\n              tag\n              thumbnail {\n                childImageSharp {\n                  fluid {\n                    src\n                  }\n                }\n              }\n              d3\n            }\n          }\n        }\n      }\n    }\n  "));

        case 9:
          result = _context.sent;

          if (result.errors) {
            reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
          } // Create blog post pages.


          posts = result.data.allMdx.edges;
          postsPerPage = 12;
          numPages = posts.length;
          categories = [];
          tags = [];
          exclude = ["Learning Path"]; // Call `createPage` for each result/post
          // index: current index of element

          posts.forEach(function (_ref3, index, arr) {
            var node = _ref3.node;
            var excluded = false; // For each post, add their tags/categories to arrays

            node.frontmatter.category.forEach(function (cat) {
              if (!exclude.includes(cat)) categories.push(cat);else excluded = true;
            });
            node.frontmatter.tag.forEach(function (tag) {
              if (!exclude.includes(tag)) tags.push(tag);else excluded = true;
            });
            var prev = arr[index - 1];
            var next = arr[index + 1]; // Check what template the markdown file have choosen 

            var template = node.frontmatter.template === "custom" ? blogPostTemplate_custom : blogPostTemplate;
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
                next: next
              }
            });
            if (excluded == true) numPages = numPages - 1;
          });
          numPages = Math.ceil(numPages / postsPerPage);
          console.log("Number of total posts: " + numPages);
          countCategories = categories.reduce(function (prev, curr) {
            prev[curr] = (prev[curr] || 0) + 1;
            return prev;
          }, {});
          allCategories = Object.keys(countCategories).sort();
          countTags = tags.reduce(function (prev, curr) {
            prev[curr] = (prev[curr] || 0) + 1;
            return prev;
          }, {});
          allTags = Object.keys(countTags).sort(); // Creating blog list with pagination

          Array.from({
            length: numPages
          }).forEach(function (_, i) {
            createPage({
              path: i === 0 ? "/blog" : "/blog/page/".concat(i + 1),
              component: blogTemplate,
              context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                currentPage: i + 1,
                numPages: numPages,
                categories: allCategories,
                tags: allTags,
                countTags: countTags
              }
            });
          });
          allTags.forEach(function (tag) {
            var link = "/blog/tag/".concat(kebabCase(tag));
            Array.from({
              length: Math.ceil(countTags[tag] / postsPerPage)
            }).forEach(function (_, i) {
              createPage({
                path: i === 0 ? link : "".concat(link, "/page/").concat(i + 1),
                component: blogTagTemplate,
                context: {
                  categories: allCategories,
                  tag: tag,
                  tags: allTags,
                  limit: postsPerPage,
                  skip: i * postsPerPage,
                  currentPage: i + 1,
                  numPages: Math.ceil(countTags[tag] / postsPerPage),
                  countTags: countTags
                }
              });
            });
          });
          allCategories.forEach(function (cat) {
            var link = "/blog/category/".concat(kebabCase(cat));
            Array.from({
              length: Math.ceil(countCategories[cat] / postsPerPage)
            }).forEach(function (_, i) {
              createPage({
                path: i === 0 ? link : "".concat(link, "/page/").concat(i + 1),
                component: blogCategoryTemplate,
                context: {
                  categories: allCategories,
                  category: cat,
                  tags: allTags,
                  limit: postsPerPage,
                  skip: i * postsPerPage,
                  currentPage: i + 1,
                  numPages: Math.ceil(countCategories[cat] / postsPerPage),
                  countTags: countTags
                }
              });
            });
          });

        case 27:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.createSchemaCustomization = function (_ref4) {
  var actions = _ref4.actions;
  var createTypes = actions.createTypes;
  var typeDefs = "\n    type Mdx implements Node {\n      frontmatter: Frontmatter\n    }\n    type Frontmatter {\n      author: [AuthorJson] @link(by: \"name\")\n      d3: [String]\n    }\n  ";
  createTypes(typeDefs);
};