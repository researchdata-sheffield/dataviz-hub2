import React from 'react'
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"
import kebabCase from "lodash.kebabcase"
import no_image_1 from "../images/blog/no_image_1.png"
import no_image_2 from "../images/blog/no_image_2.png"
import no_image_3 from "../images/blog/no_image_3.png"
import no_image_4 from "../images/blog/no_image_4.png"
import no_image_5 from "../images/blog/no_image_5.png"
import {MdFiberNew } from "react-icons/md"
import Fade from 'react-reveal/Fade'

const latestPost = ({ latestPost }) => {

  return (
    
    <div className="w-full flex flex-wrap border-l-1 xl:border-l-2 border-black bg-black">
      {latestPost.edges.map(({ node }) => {
        let imagesrc 
        if(node.frontmatter && node.frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
          imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 
        } else {
          let image_set = [no_image_1, no_image_2, no_image_3, no_image_4, no_image_5]
          imagesrc = image_set[Math.floor(Math.random() * image_set.length)]
        } 

        let description = node.frontmatter.description.split(" ").splice(0, 20)
        if(description.length < 20){
          description = description.join(" ");
        } else {
          description = description.join(" ").concat(" ...");
        }

        return (
          <Fade  key={node.id} duration={2000} fraction={0.3}>
            <div onClick={() => {navigate(`${node.fields.slug}`)}} className="border-1 ipadp:border-2 border-black flex-auto flex-wrap ipadp:greyScale-100 hover:greyScale-0 min-h-50 ipadp:min-h-60 max-h-60 overflow-hidden group relative min-w-20 ipadp:w-1/3 2xl:w-1/4 cursor-pointer" style={{backgroundImage: `url(${imagesrc})`, backgroundSize: "cover"}}>
              <div className="h-full w-full bg-light_black group-hover:bg-transparent">
                <div className="flex top-0 left-0 absolute ml-3 mt-3">
                  <MdFiberNew className="text-red-700 ipadp:text-white group-hover:text-red-700 text-3xl" />
                </div>
                <Link className="px-4 opacity-0 ipadp:opacity-100 font-bold text-lg xl:text-xl leading-tight text-white group-hover:hidden overflow-y-hidden absolute" to={`${node.fields.slug}`} style={{textShadow: "#000000 0px 0px 15px", paddingTop: "10vh", paddingBottom: "20vh",}}>
                  {node.frontmatter.title}
                  <p className="text-sm xl:text-lg font-semibold pt-8" style={{textShadow: "#000000 0px 0px 5px"}}>{node.frontmatter.date}</p>
                  <p className="text-sm xl:text-lg font-bold pt-1" style={{textShadow: "#000000 0px 0px 5px"}}>{node.fields.readingTime.text}</p>
                </Link>
                
                <div className="px-4 xl:px-8 leading-none text-gray-500 max-h-50 ipadp:min-h-60 ipadp:opacity-0 group-hover:opacity-100" style={{paddingTop: "7vh", paddingBottom: "20vh", backgroundColor: "rgba(0,0,0, .67)"}}>
                  <h1 className="ipadp:hidden font-bold text-xl leading-tight text-white overflow-y-hidden">{node.frontmatter.title}</h1>
                  <p className="my-3 text-sm leading-tight group-hover:text-highlight_2 xl:text-xl" style={{textShadow: "#000000 0px 0px 8px"}}>{description}</p>
                  <p className="my-2 text-xs pt-2" style={{textShadow: "#000000 0px 0px 5px"}}>{node.frontmatter.date}</p>
                  <p className="my-2 text-xs" style={{textShadow: "#000000 0px 0px 5px"}}>
                    {node.frontmatter.author.map((author, idx) => (
                      (node.frontmatter.author.length == idx + 1) ? author.name : author.name + " · "      
                    ))}
                  </p>
                  <p className="mt-5 text-base group-hover:text-highlight_2 font-semibold">{node.fields.readingTime.text}</p>
                  <div className="py-2 text-sm">
                    {node.frontmatter.category.map((cat) => (
                      <Link key={cat} to={`/blog/category/${kebabCase(cat)}`} 
                        className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-800 text-gray-100 border-gray-800 border-1 hover:border-transparent">{cat}
                      </Link>
                    ))}
                    {node.frontmatter.tag.map((tag) => (
                      <Link key={tag} to={`/blog/tag/${kebabCase(tag)}`} 
                        className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-white text-gray-700 border-1 border-gray-300 hover:border-transparent">{tag}
                      </Link>
                    ))}
                  </div>
                </div> 
              </div>    
            </div>
          </Fade>
        )
      })}
    </div>
  )

}

export default latestPost

latestPost.propTypes = {
  latestPost: PropTypes.any,

}