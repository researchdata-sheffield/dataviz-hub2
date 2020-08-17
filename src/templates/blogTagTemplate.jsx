import React from "react"
import { graphql } from "gatsby"
import Header from "../components/shared/header"
import Footer from "../components/shared/footer"
import Pagination from "../components/blog/pagination"
import BlogPostGrid from "../components/blog/blogPostGrid"
import MenuTagSlide from "../components/blog/menuTagSlide"
import MenuCategory from "../components/blog/menuCategory"
import MenuTag from "../components/blog/menuTag"
import PropTypes from "prop-types"
import SEO from "../components/shared/seo"
import BackgroundSection from "../components/images/blog_background";
import kebabCase from "lodash.kebabcase"


const blogTagTemplate = ({ data: {allMdx}, pageContext }) => {

	return (
		<>
			<SEO 
				title= {`Blog - ${pageContext.tag}`}
				keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
			/>
			<Header />
			<BackgroundSection className="flex items-center justify-center text-center shadow-2xl relative z-10" Height="50vh">
				<div className="text-white" style={{textShadow: "#000000 0px 0px 5px"}}>
					<h1 className="text-4xl">Tag: {pageContext.tag}</h1>
					<p className="text-sm md:max-w-35">&ldquo;The greatest value of a picture is when it forces us to notice what we never expected to see.&rdquo; - John W. Tukey</p>
				</div>
				
				<MenuCategory pageContext = {pageContext} />

			</BackgroundSection>

			<div className="flex flex-wrap-reverse">
				
				<div className="w-full">
					<BlogPostGrid allMdx = {allMdx} />
					<Pagination numPages = {pageContext.numPages} currentPage = {pageContext.currentPage} pageType = {`/blog/tag/${kebabCase(pageContext.tag)}`} />
				</div>

				<MenuTag pageContext = {pageContext} />
				<MenuTagSlide pageContext = {pageContext} />
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
			filter: { frontmatter: { tag: { in: [$tag] }, hide: { ne: "true" } } }
		) {
			...MdxEdge
		}
	}
`