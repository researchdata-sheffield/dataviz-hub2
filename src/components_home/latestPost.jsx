import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import no_image_1 from "../images/blog/no_image_1.png"
import no_image_2 from "../images/blog/no_image_2.png"
import no_image_3 from "../images/blog/no_image_3.png"
import no_image_4 from "../images/blog/no_image_4.png"
import no_image_5 from "../images/blog/no_image_5.png"
import {MdFiberNew } from "react-icons/md"
import Fade from 'react-reveal/Fade'
import {CatBtn, TagBtn } from "../components_style/styled"

const latestPost = ({ latestPost }) => {

  return (
    
    <div className="w-full flex flex-wrap mt-6" style={{background: 'linear-gradient(0deg, rgb(255, 121, 180) 10%, rgb(41, 197, 255) 100%)'}}>
      {latestPost.edges.map(({ node }) => { 
        let imagesrc 
        if(node.frontmatter && node.frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
          imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 
        } else {
          let image_set = [no_image_1, no_image_2, no_image_3, no_image_4, no_image_5]
          imagesrc = image_set[Math.floor(Math.random() * image_set.length)]
        } 
        
        let description = node.frontmatter.description.split(" ").splice(0, 40)
        if(description.length < 40){
          description = description.join(" ");
        } else {
          description = description.join(" ").concat(" ...");
        }

        return (
          <div key={node.id} className="group w-full relative z-20">
            <Fade  key={node.id} duration={2000} fraction={0.3}>
              <div className="flex flex-wrap w-full bg-black hover:bg-transparent text-white border-t-1 first:border-t-0 border-gray-800 font-semibold 2xl:text-xl">
                <Link to={node.fields.slug} className="flex flex-wrap flex-col md:flex-row justify-between w-full hover:text-white px-6 py-4">
                  <div className="flex flex-wrap items-center">
                    <MdFiberNew className="text-red-700 ipadp:text-gray-300 group-hover:text-red-700 text-3xl" />
                    {node.frontmatter.category.map((cat) => (
                        <CatBtn key={cat} to={`/blog/category/${kebabCase(cat)}`} className="rounded-sm py-0 my-0 mx-2 border-none bg-black text-black group-hover:bg-white">{cat}</CatBtn>
                    ))}
                  </div>
                  <div className="inline-block">{node.frontmatter.title}</div>
                  <div className="inline-block">{node.frontmatter.date}</div>
                </Link>

              </div>    
            </Fade>
            <div className="hidden lg:block fixed left-0 top-0 opacity-0 group-hover:opacity-100 transform -translate-x-110% group-hover:translate-x-0 transition duration-500 shadow-xl" 
                style={{width: "33.333333%"}}
              >
              <img src={imagesrc} className="min-h-50 max-h-50 w-full" />
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