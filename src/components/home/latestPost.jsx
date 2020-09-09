import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import {MdFiberNew } from "react-icons/md"
import Fade from 'react-reveal/Fade'
import {CatBtn, TagBtn } from "../style/styled"
import { getImageSource, shortenText } from "../../utils/shared"


const latestPost = ({ latestPost }) => {

  return (
    
    <div className="w-full flex flex-wrap" style={{background: 'linear-gradient(0deg, rgb(255, 121, 180) 10%, rgb(41, 197, 255) 100%)'}}>
      {latestPost.edges.map(({ node }) => { 
        let imagesrc = getImageSource(node);
          let description = shortenText(node.frontmatter.description, 40)

        let postDate = node.frontmatter.date
        postDate = postDate.substring(0, postDate.indexOf(" ", postDate.indexOf(" ") + 1))

        return (
          <div key={node.id} className="group w-full relative z-20 border-t-1 border-transparent first:border-gray-900">
            <Fade  key={node.id} duration={1000} fraction={0.1}>
              <div className="w-full bg-gray-900 hover:bg-transparent text-white 2xl:text-xl">
                <Link to={node.fields.slug} className="flex flex-wrap flex-col md:flex-row justify-between w-full text-gray-500 hover:text-white px-3 lg:px-10 py-4">
                  <div className="flex flex-wrap items-center">
                    <MdFiberNew className="text-red-700 ipadp:text-white group-hover:text-red-700 text-3xl" />
                    {node.frontmatter.category.map((cat) => (
                        <CatBtn key={cat} to={`/blog/category/${kebabCase(cat)}`} className="rounded-full py-0 my-0 mx-2 border-none bg-white text-black hover:bg-gray-200 font-semibold invisible group-hover:visible">{cat}</CatBtn>
                    ))}
                  </div>
                  <div className="inline-block font-semibold">{node.frontmatter.title}</div>
                  <div className="inline-block font-semibold">{postDate}</div>
                </Link>
              </div>    
            </Fade>
            {/* On hover, show details on the left */}
            <div className="bg-white hidden lg:block fixed left-0 top-0 opacity-0 group-hover:opacity-100 transform -translate-x-110% group-hover:translate-x-0 transition duration-500 shadow-xl" 
                style={{width: "33.333333%"}}
              >
              <div className="min-h-50 max-h-50 w-full transform" style={{backgroundImage: `url(${imagesrc})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
              <div className="flex flex-col bg-white min-h-50 py-6 px-8">
                <p className="text-sm text-gray-500 font-normal 2xl:text-lg">
                  {node.frontmatter.author.map((author, idx) => (
                    (node.frontmatter.author.length == idx + 1) ? author.name : author.name + " · "      
                  ))} &nbsp; | &nbsp; {node.fields.readingTime.text}
                </p>
                <p className="mt-2 text-gray-500">
                {node.frontmatter.tag.map((tag, i) => {
                  return (i < 3 && <TagBtn className="text-xs py-0 mr-1 my-0" key={tag} to={`/blog/tag/${kebabCase(tag)}`}>{tag}</TagBtn>)         
                })}
                {node.frontmatter.tag.length > 3 && <TagBtn className="text-xs py-0 mx-1 my-0" to={node.fields.slug}>+{node.frontmatter.tag.length - 3} more</TagBtn>}
                </p>
                <p className="mt-4 2xl:text-2xl text-black">{description}</p>
              </div>
            </div>  
          </div>
        )
      })}
    </div>
  )

}

export default latestPost

latestPost.propTypes = {
  latestPost: PropTypes.any,

}