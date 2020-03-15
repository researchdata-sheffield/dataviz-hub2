import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pagination from "../components_blog/pagination"
import BlogPostGrid from "../components_blog/blogPostGrid"
import MenuCategory from "../components_blog/menuCategory"
import MenuTag from "../components_blog/menuTag"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/blog_background";



function blogTemplate({ data: {allMdx}, pageContext }) {

	return (
		<Layout>
			<SEO 
					title="Blog" 
					keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
			/>

			<BackgroundSection className="items-center justify-center text-center">
				<div className="text-white">
					<h1 className="text-4xl">Blog</h1>
					<p className="text-sm">scientia potentia est.</p>
				</div>
				
				<MenuCategory pageContext = {pageContext} />
				
			</BackgroundSection>

			<div className="flex flex-wrap-reverse">
				<div className="w-full xs:w-full sm:w-full lg:w-full laptop:w-4/5">
					<BlogPostGrid allMdx = {allMdx} />
					<Pagination numPages = {pageContext.numPages} currentPage = {pageContext.currentPage} typePage = {"/blog"} />
				</div>

				{/* TODO: Add number of articles next to tag/cat name */}
				{/* TODO: Add filter form */}
        <div className="w-full xs:w-full sm:w-full lg:w-full laptop:w-1/5 px-8 pt-6 pb-6 text-gray-100 shadow-2xl bg-gray-900 text-sm" style={{fontFamily: "TUoS Blake"}}>
					<MenuTag pageContext = {pageContext} />
        </div>
			</div>

		</Layout>
	)
}

export default blogTemplate

blogTemplate.propTypes = {
		pageContext: PropTypes.any,
		data: PropTypes.any
	}

export const query = graphql`
	query blogList($skip: Int!, $limit: Int!) {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					id
					body
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