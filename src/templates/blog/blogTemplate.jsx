import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../../components/shared/header"
import Footer from "../../components/shared/footer"
import Pagination from "../../components/blog/pagination"
import BlogPostGrid from "../../components/blog/blogPostGrid"
import MenuCategory from "../../components/blog/menuCategory"
import MenuTag from "../../components/blog/menuTag"
import MenuTagSlide from "../../components/blog/menuTagSlide"
import PropTypes from "prop-types"
import SEO from "../../components/shared/seo"
// import BackgroundSection from "../../components/images/blogBackground";
import Flip from 'react-reveal/Flip'
import { GreyButton } from "../../components/style/styled"

const blogTemplate = ({ data: {allMdx}, pageContext }) => {

	return (
		<>
			<SEO 
					title="Blog" 
					keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
			/>
			<Header />
			{/* Height={`${pageContext.currentPage != 1 ? `50vh` : ``}`} */}
			<div 
				className={`${pageContext.currentPage != 1 ? "min-h-50" : "min-h-100"} w-full flex flex-col items-center justify-center text-center relative z-10 bg-black`} 
				style={{backgroundColor: 'rgb(37,29,90)', backgroundImage: 'linear-gradient(225deg, rgb(37,29,90) 0%, rgba(0,102,179,1) 35%, rgba(0,212,255,1) 100%)'}}
			>
				<Flip cascade top delay={700}>
					<div className="text-white" style={{textShadow: "#000000 0px 0px 20px"}}>	
						<h1 className="text-5xl">Blog</h1>
						<p className="text-md mt-5 px-5" style={{maxWidth: '500px'}}>&ldquo;The greatest value of a picture is when it forces us to notice what we never expected to see.&rdquo; - John W. Tukey</p> 
					</div>
				</Flip>
				<Flip cascade top delay={700}>
					<div className={`${pageContext.currentPage !== 1 ? `hidden` : ``} mt-10`}>
						<Link to="/blog#read">
							<GreyButton className="text-sm hover:bg-gray-700">Start reading</GreyButton>
						</Link>
					</div>
				</Flip>
				
				<MenuCategory pageContext = {pageContext} />

			</div>

			{/* blog posts & tag menu */}
			<div className="flex flex-wrap-reverse">
				<div className="w-full">
					<BlogPostGrid allMdx = {allMdx} />
					<Pagination numPages = {pageContext.numPages} currentPage = {pageContext.currentPage} pageType = {"/blog"} />
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
			filter: { frontmatter: { hide: { ne: "true" }, type: { eq: null } } }
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		) {
			...MdxEdge
		}
	}
`