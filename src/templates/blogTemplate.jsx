import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Pagination from "../components_blog/pagination"
import BlogPostGrid from "../components_blog/blogPostGrid"
import MenuCategory from "../components_blog/menuCategory"
import MenuTag from "../components_blog/menuTag"
import MenuTagSlide from "../components_blog/menuTagSlide"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/blog_background";
import Flip from 'react-reveal/Flip'
import { GreyButton } from "../components_style/styled"

const blogTemplate = ({ data: {allMdx}, pageContext }) => {

	return (
		<>
			<SEO 
					title="Blog" 
					keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
			/>
			<Header />
			<BackgroundSection className="items-center justify-center text-center" Height={`${pageContext.currentPage != 1 ? `35vh` : ``}`} >

				<div className="text-white" style={{textShadow: "#000000 0px 0px 20px"}}>
					<Flip cascade top delay={700}>
						<h1 className="text-5xl">Blog</h1>
						<p className="text-md" >scientia potentia est.</p>
					</Flip>
				</div>
				<Flip cascade top delay={700}>
					<Link to="/blog#read">
						<div><GreyButton className={`${pageContext.currentPage != 1 ? `hidden` : ``} mt-16 text-sm`}>Start reading</GreyButton></div>
					</Link>
				</Flip>

				<MenuCategory pageContext = {pageContext} />

			</BackgroundSection>

			<div className="flex flex-wrap-reverse">
				
				<div className="w-full">
					<BlogPostGrid allMdx = {allMdx} />
					<Pagination numPages = {pageContext.numPages} currentPage = {pageContext.currentPage} typePage = {"/blog"} />
				</div>

				<MenuTag pageContext = {pageContext} />
				<MenuTagSlide pageContext = {pageContext} />
			</div>
			<Footer />
		</>
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
			filter: { frontmatter: { hide: { ne: "true" } } }
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			...MdxEdge
		}
	}
`