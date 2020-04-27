import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import { FaStar } from "react-icons/fa"
import Fade from 'react-reveal/Fade'
import {ArrowBox_featured, IMG} from "../components_style/styled"

const featuredPost = ({ featuredPost }) => {

  return (

    <div className="w-full flex flex-wrap bg-black">
      {featuredPost.edges.map(({ node }) => {
        let imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 

        let description = node.frontmatter.description.split(" ").splice(0, 30)
        if(description.length < 30){
          description = description.join(" ");
        } else {
          description = description.join(" ").concat(" ...");
        }

        return (
          <Fade key={node.id} duration={2000} fraction={0.3}>
            <div className="w-full sm:w-1/2 min-h-100 pb-24 overflow-hidden bg-black relative">
              <Link className="group" to={node.fields.slug}>
                <div className="flex top-0 left-0 absolute ml-6 mt-6 text-yellow-300 ipadp:text-gray-300" style={{zIndex: "3"}}>
                  <FaStar className="mr-2 text-yellow-300 text-2xl" />
                  <p className="inline-block ipadp:opacity-0 group-hover:opacity-100 text-base font-semibold bg-black px-2" style={{fontFamily: "TUoS Blake", textShadow: "#000000 0px 0px 20px"}}>Featured</p>
                </div>
                <IMG className="w-full ipadp:greyScale-100 group-hover:greyScale-0 min-h-3/5 max-h-3/5" style={{transition:".5s ease", backgroundImage: `url(${imagesrc})`}} />
                <ArrowBox_featured className="px-8 py-6 leading-none text-gray-500 pb-60">
                  <h1 className="font-bold text-2xl 2xl:text-3xl leading-tight text-gray-200 group-hover:text-highlight_2 overflow-y-hidden" style={{minHeight: "0vh", maxHeight: "10vh", fontFamily: "TUoS Stephenson"}}>{node.frontmatter.title}</h1>
                  <p className="my-2 text-sm 2xl:text-lg leading-tight group-hover:text-highlight_2" >{description}</p>
                  <p className=" my-2 text-xs 2xl:text-base pt-2" >{node.frontmatter.date}</p>
                  <p className="my-2 text-xs 2xl:text-base">
                    {node.frontmatter.author.map((author, idx) => (
                      (node.frontmatter.author.length == idx + 1) ? author.name : author.name + " · "      
                    ))}
                  </p>
                  <p className="mt-5 text-base 2xl:text-xl group-hover:text-highlight_2 font-semibold">{node.fields.readingTime.text}</p>
                  <div className="py-3 text-sm 2xl:text-sm">
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
                </ArrowBox_featured>
              </Link>
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

