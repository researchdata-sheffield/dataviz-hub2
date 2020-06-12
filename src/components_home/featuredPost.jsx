import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import { FaStar } from "react-icons/fa"
import Fade from 'react-reveal/Fade'
import {ArrowBox_featured, IMG, IMG_DIV, CatBtn, TagBtn} from "../components_style/styled"
import no_image_1 from "../images/blog/no_image_1.png"
import no_image_2 from "../images/blog/no_image_2.png"
import no_image_3 from "../images/blog/no_image_3.png"
import no_image_4 from "../images/blog/no_image_4.png"
import no_image_5 from "../images/blog/no_image_5.png"

const featuredPost = ({ featuredPost }) => {
  if(featuredPost && featuredPost.edges) {

    return (
      
      <div className="w-full flex flex-wrap bg-black">
        {featuredPost.edges.map(({ node }) => {
          let imagesrc 
          if(node.frontmatter && node.frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
            imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 
          } else {
            let image_set = [no_image_1, no_image_2, no_image_3, no_image_4, no_image_5]
            imagesrc = image_set[Math.floor(Math.random() * image_set.length)]
          } 

          let description = node.frontmatter.description.split(" ").splice(0, 30)
          if(description.length < 30){
            description = description.join(" ");
          } else {
            description = description.join(" ").concat(" ...");
          }

          let title = node.frontmatter.title.split(" ").splice(0, 14)
          if(title.length < 14){
            title = title.join(" ")
          } else {
            title = title.join(" ").concat(" ...")
          }

          return (
            <Fade key={node.id} duration={2000} fraction={0.3}>
              <div className="w-full sm:w-1/2 min-h-100 pb-28 overflow-hidden bg-black relative leading-none text-gray-500 flex-grow">
                <Link className="group" to={node.fields.slug}>
                  <div className="flex top-0 left-0 absolute ml-6 mt-6 text-gray-900 ipadp:text-gray-300 group-hover:bg-black items-center" style={{zIndex: "3"}}>
                    <FaStar className="text-yellow-300 text-2xl" />
                    <p className="inline-block ipadp:opacity-0 group-hover:opacity-100 text-base font-semibold px-2" style={{fontFamily: "TUoS Blake", textShadow: "#000000 0px 0px 20px"}}>Featured</p>
                  </div>
                  <IMG_DIV className="ipadp:greyScale-100 group-hover:greyScale-0 min-h-3/5 max-h-3/5"><IMG style={{backgroundImage: `url(${imagesrc})`}} /></IMG_DIV>
                  <ArrowBox_featured className="pt-6 px-8">
                    <h1 className="font-bold text-2xl 2xl:text-3xl leading-tight text-gray-200 group-hover:text-highlight_2 overflow-y-hidden" style={{fontFamily: "TUoS Stephenson"}}>{title}</h1>
                    <p className="my-2 text-sm 2xl:text-lg leading-tight group-hover:text-highlight_2" >{description}</p>
                    <p className="my-2 text-xs 2xl:text-base pt-2">
                      {node.frontmatter.author.map((author, idx) => (
                        (node.frontmatter.author.length == idx + 1) ? author.name : author.name + " · "      
                      ))}
                    </p>
                    <p className="my-2 text-xs 2xl:text-base" >{node.frontmatter.date} · {node.fields.readingTime.text}</p>
                  </ArrowBox_featured>
                </Link>
                <div className="px-8 pt-3 pb-24 text-sm 2xl:text-sm">
                  {node.frontmatter.category.map((cat) => (
                    <CatBtn key={cat} to={`/blog/category/${kebabCase(cat)}`}>{cat}</CatBtn>
                  ))}
                  {node.frontmatter.tag.map((tag, i) => {
                    return (i < 3 && <TagBtn key={tag} to={`/blog/tag/${kebabCase(tag)}`}>{tag}</TagBtn>)         
                  })}
                  {node.frontmatter.tag.length > 3 && <TagBtn to={node.fields.slug}>+{node.frontmatter.tag.length - 3} more</TagBtn>}
                </div>
              </div>
            </Fade>
          )
        })}
      </div>
    )
  }
}

export default featuredPost

featuredPost.propTypes = {
  featuredPost: PropTypes.any,
}

