import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/blog_background";
import no_image_thumbnail from "../images/no_image.png"
import { FaTags } from "react-icons/fa"

function blogCategoryTemplate({ data: {allMdx}, pageContext }) {

	return (
		<Layout>
			<SEO 
				title= {`Blog - ${pageContext.category}`}
				keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
			/>

			<BackgroundSection className="flex items-center justify-center text-center" Height="45vh">
				<div className="text-white">
					<h1 className="text-4xl">Category: {pageContext.category}</h1>
					<p className="text-sm">scientia potentia est.</p>
				</div>
				
				<div className="absolute bottom-0 m-2 right-0">
					{pageContext.categories.map((cat) => (
						<button key={cat} className="bg-transparent text-gray-600 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
							<Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
						</button>
					))}
				</div>
			</BackgroundSection>

			<div className="flex flex-wrap-reverse">
				<div className="sm:w-3/4 px-10 py-8">

					{allMdx.edges.map(({ node }) => {
						let imagesrc
						
						if(node.frontmatter && node. frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
							imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 
						} else {
							imagesrc = no_image_thumbnail
						}

						return (
							<div key={node.id}>
								<img src={imagesrc}></img>
								<Link to={node.fields.slug}>
									<h1>{node.frontmatter.title}</h1>
								</Link>
								<p>{node.frontmatter.date}</p>
								<p>By {node.frontmatter.author}</p>
								<p>Category: {node.frontmatter.category.join(', ')}</p>
								<Link to={node.fields.slug}>View Article</Link>
                <hr />
							</div>
						)
					})}

					<ul>
						{Array.from({ length: pageContext.numPages }).map((item, i) => {
							const index = i + 1
							const link = index === 1 ? `/blog/category/${kebabCase(pageContext.category)}` : `/blog/category/${kebabCase(pageContext.category)}/page/${index}`

							return (
								<li key={index}>
									{pageContext.currentPage === index ? (
										<span>{index}</span>
									) : (
										<a href={link}>{index}</a>
									)}
								</li>
							)
						})}
					</ul>
				</div>

				{/* TODO: Add category & tags */}
        <div className="w-full sm:w-1/4 px-8 py-8 text-gray-100 shadow-2xl bg-gray-900" >
					<h1 className="text-2xl pb-6"><FaTags style={{display: "inline-block"}} /> Tags</h1>
						{pageContext.tags.map((tag) => (
								<Link key={tag} activeStyle={{ color: "grey", backgroundColor: "white" }} partiallyActive={true} to={`/blog/tag/${kebabCase(tag)}`} 
									className="inline-block bg-highlight_2 text-white hover:text-white py-1 px-3 m-1 hover:bg-gray-100 hover:text-gray-700 rounded-md">{tag}
								</Link>

						))}
        </div>

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
								minutes
						}
					}
					frontmatter {
						title
						date(formatString: "DD MMM, YYYY")
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