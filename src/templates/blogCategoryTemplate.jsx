import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components_blog/pagination"
import BlogPostGrid from "../components_blog/blogPostGrid"
import MenuCategory from "../components_blog/menuCategory"
import MenuTag from "../components_blog/menuTag"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/blog_background";


function blogCategoryTemplate({ data: {allMdx}, pageContext }) {

	return (
		<Layout>
			<SEO 
				title= {`Blog - ${pageContext.category}`}
				keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
			/>

			<BackgroundSection className="flex items-center justify-center text-center" Height="35vh">
				<div className="text-white">
					<h1 className="text-4xl">Category: {pageContext.category}</h1>
					<p className="text-sm">scientia potentia est.</p>
				</div>
				
				<MenuCategory pageContext = {pageContext} />

			</BackgroundSection>

			<div className="flex flex-wrap-reverse">
				
				<div className="w-full xl:w-3/4 2xl:w-4/5">
					<BlogPostGrid allMdx = {allMdx} />
					<Pagination numPages = {pageContext.numPages} currentPage = {pageContext.currentPage} typePage = {`/blog/category/${kebabCase(pageContext.tag)}`} />
				</div>
				<MenuTag pageContext = {pageContext} />
			
			</div>

		</Layout>
	)
}

export default blogCategoryTemplate

blogCategoryTemplate.propTypes = {
		pageContext: PropTypes.any,
		data: PropTypes.any
	}

	export const query = graphql`
	query blogCategory($category: String, $skip: Int!, $limit: Int!) {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
			filter: { frontmatter: { category: { in: [$category] } } }
		) {
			edges {
				node {
					id
					fields {
						slug
						readingTime {
								text
						}
					}
					frontmatter {
						title
						description
						date(formatString: "ddd, DD MMMM YYYY")
						author
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
`