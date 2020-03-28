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
import scroll_To from 'gatsby-plugin-smoothscroll'


const blogTemplate = ({ data: {allMdx}, pageContext }) => {

	return (
		<Layout>
			<SEO 
					title="Blog" 
					keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
			/>

			<BackgroundSection className="items-center justify-center text-center" Height={`${pageContext.currentPage != 1 ? `35vh` : ``}`} >
				<div className="text-white" style={{textShadow: "#000000 0px 0px 20px"}}>
					<h1 className="text-5xl">Blog</h1>
					<p className="text-md" >scientia potentia est.</p>
				</div>
				<div onClick={() => scroll_To('#read')} >
					<button className={`${pageContext.currentPage != 1 ? `hidden` : ``} mt-16 bg-gray-300 hover:bg-highlight_2 text-center hover:text-white text-gray-700 font-bold py-2 px-6 border border-transparent text-sm`}>Start reading</button>
				</div>

				<MenuCategory pageContext = {pageContext} />
				
			</BackgroundSection>

			<div className="flex flex-wrap-reverse">
				
				<div className="w-full xl:w-3/4 2xl:w-4/5">
					<BlogPostGrid allMdx = {allMdx} />
					<Pagination numPages = {pageContext.numPages} currentPage = {pageContext.currentPage} typePage = {"/blog"} />
				</div>

				<MenuTag pageContext = {pageContext} />

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