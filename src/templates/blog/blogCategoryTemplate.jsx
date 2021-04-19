import React, {useState} from "react"
import kebabCase from "lodash.kebabcase"
import { graphql } from "gatsby"
import Header from "../../components/shared/header"
import Footer from "../../components/shared/footer"
import MenuCategory from "../../components/blog/menuCategory"
import BlogLayout from "../../components/blog/blogLayout"
import PropTypes from "prop-types"
import SEO from "../../components/shared/seo"
import BackgroundSection from "../../components/images/blogBackground";


const blogCategoryTemplate = ({ data: {allMdx}, pageContext }) => {
	const [tagMenu, toggleTagMenu] = useState(false);

	function handleTagMenu() {
		toggleTagMenu(!tagMenu);
	}

	return (
		<>
			<SEO 
				title= {`Blog - ${pageContext.category}`}
				keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
			/>
			<Header />
			<BackgroundSection className="flex items-center justify-center text-center shadow-2xl bg-gray-900 relative z-10" Height="50vh">
				<div className="text-white" style={{textShadow: "#000000 0px 0px 5px"}}>
					<h1 className="text-4xl">{pageContext.category}</h1>
					{/* <p className="text-sm md:max-w-35">&ldquo;The greatest value of a picture is when it forces us to notice what we never expected to see.&rdquo; - John W. Tukey</p> */}
				</div>
				<MenuCategory 
					pageContext = {pageContext} 				
					handleTagMenu={handleTagMenu} 
					tagMenu={tagMenu} 
				/>
			</BackgroundSection>

			<BlogLayout 
				allMdx={allMdx} 
				pageContext={pageContext} 
				pageType={`/blog/category/${kebabCase(pageContext.category)}`}	
				handleTagMenu={handleTagMenu} 
				tagMenu={tagMenu}
			/>
			<Footer />
		</>
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
			filter: { frontmatter: { category: { in: [$category] }, hide: { ne: "true" } } }
		) {
			...MdxEdge
		}
	}
`