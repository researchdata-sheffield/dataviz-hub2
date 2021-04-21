import React, {useState} from "react"
import { graphql, Link } from "gatsby"
import Header from "../../components/shared/header"
import Footer from "../../components/shared/footer"
import BlogLayout from "../../components/blog/blogLayout"
import MenuCategory from "../../components/blog/menuCategory"
import PropTypes from "prop-types"
import SEO from "../../components/shared/seo"
// import BackgroundSection from "../../components/images/blogBackground";
import Flip from 'react-reveal/Flip'
import { GreyButton } from "../../components/style/styled"
import Bg from "../../images/blog/colorful-world.png"

const blogTemplate = ({ data: {allMdx}, pageContext }) => {
	const [tagMenu, toggleTagMenu] = useState(false);

	function handleTagMenu() {
		toggleTagMenu(!tagMenu);
	}

	return (
		<>
			<SEO 
					title="Blog" 
					keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
			/>
			<Header />
			{/* Height={`${pageContext.currentPage != 1 ? `50vh` : ``}`} */}
			<div 
				className={`${pageContext.currentPage != 1 ? "min-h-60" : "min-h-100"} w-full overflow-hidden flex flex-col items-center justify-center text-center relative z-10`} 
				style={{
					//backgroundImage: 'linear-gradient(225deg, rgb(37,29,90) 0%, rgba(0,102,179,1) 35%, rgba(0,212,255,1) 100%)'
					//backgroundImage: `url(${Bg})`
				}}
			>
				<div 
					id="blogBackground"
					className="absolute top-0 left-0 w-full h-full"
					style={{
						background: `linear-gradient(0deg, rgba(255, 255, 255, 0.70), rgba(255, 255, 255, 0.70)), url(${Bg})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundAttachment: 'fixed'
					}}
				>
				</div>

				<Flip cascade top delay={700}>
					<div className="text-black" style={{textShadow: "#fff 0px 0px 5px"}}>	
						<h1 className="text-6xl font-extrabold">Blog</h1>
						<p className="text-md font-semibold mt-5 px-5" style={{maxWidth: '500px'}}>&ldquo;The greatest value of a picture is when it forces us to notice what we never expected to see.&rdquo; - John W. Tukey</p> 
					</div>
				</Flip>
				<Flip cascade top delay={700} >
					<div className={`${pageContext.currentPage !== 1 ? `hidden` : ``}`}>
						<MenuCategory 
							pageContext = {pageContext} 				
							handleTagMenu={handleTagMenu} 
							tagMenu={tagMenu} 
						/>
						<div className="mt-10">
							<Link to="/blog#read">
								<GreyButton className="text-sm bg-gray-700 text-white hover:bg-black">Start reading</GreyButton>
							</Link>
						</div>
					</div>
				</Flip>
				
			</div>

			{/* blog posts & tag menu */}
			<BlogLayout 
				allMdx={allMdx} 
				pageContext={pageContext} 
				pageType={"/blog"}	
				handleTagMenu={handleTagMenu} 
				tagMenu={tagMenu}
			/>
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