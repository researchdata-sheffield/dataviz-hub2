import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import BackgroundSection from "../components_images/blog_background";
import no_image_thumbnail from "../images/no_image.png"
import { FaTags } from "react-icons/fa"

function blogTemplate({ data: {allMdx}, pageContext }) {

	return (
		<Layout>
			<SEO 
					title="Blog" 
					keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
			/>

			<BackgroundSection className="items-center justify-center">
				<div className="text-white">
					<h1 className="text-4xl">Blog <br /></h1>
					<p className="text-sm">scientia potentia est.</p>
				</div>
				
				<div className="flex flex-wrap absolute bottom-0 p-1 right-0">
					{pageContext.categories.map((cat) => (
						<Link key={cat} to={`/blog/category/${kebabCase(cat)}`} activeStyle={{ color: "white" }} partiallyActive={true}
							className="bg-transparent text-gray-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded text-base">{cat}
						</Link>
					))}
				</div>
			</BackgroundSection>

			<div className="flex flex-wrap-reverse">
				<div className="w-full xs:w-full sm:w-full lg:w-full laptop:w-4/5">
					<div className="flex flex-wrap">
						{allMdx.edges.map(({ node }) => {
							let imagesrc
							if(node.frontmatter && node. frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
								imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 
							} else {
								imagesrc = no_image_thumbnail
							}

							let description = node.frontmatter.description.substring(0,120).concat(" ...")
							

							return (
								<div key={node.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 min-h-90 pb-16">
									<Link className="group" to={node.fields.slug}>
										<img className="w-full blog-image group-hover:border-b-4 group-hover:border-highlight_2" style={{minHeight: "65%", maxHeight: "65%",  objectFit: "cover", objectPosition: "center"}} src={imagesrc}></img>
										<div className="px-8 py-5 leading-none text-gray-500 pb-48">
											<h1 className="post-text font-bold text-2xl leading-tight text-gray-900 group-hover:text-highlight_2">{node.frontmatter.title}</h1>
											<p className="blog-text my-2 text-sm leading-tight group-hover:text-highlight_2">{description}</p>
											<p className=" my-2 text-xs pt-2" >{node.frontmatter.date}</p>
											<p className="my-2 text-xs" style={{fontFamily: "Comic Sans MS"}}>{node.frontmatter.author.join(' · ')}</p>
											<div className="py-3 text-sm ">
												{node.frontmatter.category.map((cat) => (
													<Link key={cat} to={`/blog/category/${kebabCase(cat)}`} 
														className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-500 text-gray-200 rounded-md">{cat}
													</Link>
												))}
												{node.frontmatter.tag.map((tag) => (
													<Link key={tag} to={`/blog/tag/${kebabCase(tag)}`} 
														className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-300 text-gray-500 rounded-md">{tag}
													</Link>
												))}
											</div>
										</div>
									</Link>
								</div>
							)
						})}
					</div>
					
					<div className="flex justify-center text-center my-10">
						<ul className="flex list-none">
							{Array.from({ length: pageContext.numPages }).map((item, i) => {
								const index = i + 1
								const link = index === 1 ? '/blog' : `/blog/page/${index}`

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
				
				</div>

				{/* TODO: Add number of articles next to tag/cat name */}
        <div className="w-full xs:w-full sm:w-full lg:w-full laptop:w-1/5 px-8 pt-6 pb-6 text-gray-100 shadow-2xl bg-gray-900 font-semibold text-base">
					<h1 className="text-2xl pb-4"><FaTags style={{display: "inline-block"}} /> Tags</h1>
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
							minutes
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
					excerpt
				}
			}
		}
	}
`