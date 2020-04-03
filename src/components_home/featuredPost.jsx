import React from 'react'
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"
import kebabCase from "lodash.kebabcase"
import { FaStar } from "react-icons/fa"
import Fade from 'react-reveal/Fade'

const featuredPost = ({ featuredPost }) => {

  return (

    <div className="w-full flex flex-wrap bg-black">
      {featuredPost.edges.map(({ node }) => {
        let imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 

        let description = node.frontmatter.description.split(" ").splice(0, 50)
        if(description.length < 50){
          description = description.join(" ");
        } else {
          description = description.join(" ").concat(" ...");
        }

        return (
          <Fade key={node.id} duration={2000} fraction={0.3}>
            <div onClick={() => {navigate(`${node.fields.slug}`)}} className="flex flex-wrap w-full min-h-40 ipadp:min-h-70 max-h-100 overflow-hidden group relative min-w-20 cursor-pointer" style={{fontFamily: "TUoS  Blake", backgroundImage: `url(${imagesrc})`, backgroundSize: "cover"}}>
                <div className="flex top-0 left-0 absolute ml-6 mt-6 text-yellow-300 ipadp:text-gray-300">
                  <FaStar className="mr-2 text-yellow-300 text-3xl" />
                  <p className="ipadp:opacity-0 group-hover:opacity-100 text-xl" style={{fontFamily: "ink free"}}>Featured</p>
                </div>
                {/* <h1 className="px-16 opacity-0 ipadp:opacity-100 font-bold text-5xl leading-tight text-white group-hover:hidden overflow-y-hidden absolute" style={{fontFamily: "TUoS Stephenson", textShadow: "#000000 0px 0px 5px", paddingTop: "20vh", paddingBottom: "20vh",}}>
                  {node.frontmatter.title}
                <p className="text-2xl font-normal pt-6">{node.frontmatter.date}</p>
                <p className="text-2xl font-semibold pt-3">{node.fields.readingTime.text}</p>
                </h1> */}
                
                <div className="px-8 ipadp:px-16 xl:px-32 py-24 leading-none text-gray-500 max-h-70  ipadp:min-h-100 ipadp:pt-48" style={{paddingBottom: "20vh", backgroundColor: "rgba(0,0,0, .8)", transition: ".8s ease"}}>
                  <h1 className="font-bold text-3xl xl:text-4xl leading-tight text-white group-hover:text-highlight_2 overflow-y-hidden" style={{minHeight: "0vh", maxHeight: "15vh", fontFamily: "TUoS Stephenson"}}>{node.frontmatter.title}</h1>
                  <p className="my-3 text-md leading-tight group-hover:text-highlight_2 ipadp:text-lg" >{description}</p>
                  <p className=" my-2 text-md pt-2" >{node.frontmatter.date}</p>
                  <p className="my-2 text-md">
                    {node.frontmatter.author.map((author, idx) => (
                      (node.frontmatter.author.length == idx + 1) ? author.name : author.name + " · "      
                    ))}
                  </p>
                  <p className="mt-5 text-base group-hover:text-highlight_2 font-semibold">{node.fields.readingTime.text}</p>
                  <div className="py-2 text-md">
                    {node.frontmatter.category.map((cat) => (
                      <Link key={cat} to={`/blog/category/${kebabCase(cat)}`} 
                        className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-500 text-gray-200 rounded-full">{cat}
                      </Link>
                    ))}
                    {node.frontmatter.tag.map((tag) => (
                      <Link key={tag} to={`/blog/tag/${kebabCase(tag)}`} 
                        className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-300 text-gray-500 rounded-full">{tag}
                      </Link>
                    ))}
                  </div>
                </div>
            </div>
          </Fade>
        )
      })}
    </div>
  )

}

export default featuredPost

featuredPost.propTypes = {
  featuredPost: PropTypes.any,

}