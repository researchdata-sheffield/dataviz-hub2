import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Pagination from "../components_blog/pagination"
import BlogPostGrid from "../components_blog/blogPostGrid"
import MenuCategory from "../components_blog/menuCategory"
import MenuTag from "../components_blog/menuTag"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/blog_background";
import kebabCase from "lodash.kebabcase"


const blogTagTemplate = ({ data: {allMdx}, pageContext }) => {

	return (
		<>
			<SEO 
				title= {`Blog - ${pageContext.tag}`}
				keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
			/>
			<Header />
			<BackgroundSection className="flex items-center justify-center text-center" Height="35vh">
				<div className="text-white" style={{textShadow: "#000000 0px 0px 5px"}}>
					<h1 className="text-4xl">Tag: {pageContext.tag}</h1>
					<p className="text-sm">scientia potentia est.</p>
				</div>
				
				<MenuCategory pageContext = {pageContext} />

			</BackgroundSection>

			<div className="flex flex-wrap-reverse">
				
				<div className="w-full xl:w-3/4 2xl:w-4/5">
					<BlogPostGrid allMdx = {allMdx} />
					<Pagination numPages = {pageContext.numPages} currentPage = {pageContext.currentPage} typePage = {`/blog/tag/${kebabCase(pageContext.tag)}`} />
				</div>

				<MenuTag pageContext = {pageContext} />
				
			</div>
			<Footer />
		</>
	)
}

export default blogTagTemplate

blogTagTemplate.propTypes = {
		pageContext: PropTypes.any,
		data: PropTypes.any
	}

	export const query = graphql`
	query blogTag($tag: String, $skip: Int!, $limit: Int!) {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
			filter: { frontmatter: { tag: { in: [$tag] } } }
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
						author {
							name
							email
							avatar {
								childImageSharp {
									fluid {
										src
									}
								}
							}
						}
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