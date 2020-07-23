import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import no_image_1 from "../images/blog/no_image_1.png"
import no_image_2 from "../images/blog/no_image_2.png"
import no_image_3 from "../images/blog/no_image_3.png"
import no_image_4 from "../images/blog/no_image_4.png"
import no_image_5 from "../images/blog/no_image_5.png"
import { FaStar } from "react-icons/fa"
import Slide from 'react-reveal/Slide'
import { ArrowBox, IMG, IMG_DIV, } from "../components_style/styled"

const blogPostGrid = ({allMdx}) => {
  
  return(
    <div className="flex flex-wrap w-full">
    {allMdx.edges.map(({ node }) => {
      let imagesrc 
      
      if(node.frontmatter && node.frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
        imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 
      } else {
        let image_set = [no_image_1, no_image_2, no_image_3, no_image_4, no_image_5]
        imagesrc = image_set[Math.floor(Math.random() * image_set.length)]
      }
      
      let description = node.frontmatter.description.split(" ").splice(0, 25)
      if(description.length < 25){
        description = description.join(" ");
      } else {
        description = description.join(" ").concat(" ...");
      }

      let title = node.frontmatter.title
      let tag = node.frontmatter.tag
      return (
        <Slide bottom key={node.id} duration={400} fraction={0.4}>
          <div className="w-full md:w-1/3 xl:w-1/4 min-h-90 lg:min-h-100 2xl:max-h-90 overflow-hidden bg-white relative pb-10 2xl:pb-0">
            <Link className="group" to={node.fields.slug}>
              { node.frontmatter.featured === "true" && 
                <div className="flex top-0 left-0 absolute ml-6 mt-6 text-yellow-300 ipadp:text-gray-300 group-hover:bg-black items-center" style={{zIndex: "3"}}>
                  <FaStar className="text-yellow-300 text-2xl" />
                  <p className="inline-block ipadp:opacity-0 group-hover:opacity-100 text-base font-semibold px-2" style={{fontFamily: "TUoS Blake", textShadow: "#000000 0px 0px 20px"}}>Featured</p>
                </div>
              }
              <IMG_DIV className="ipadp:greyScale-100 group-hover:greyScale-0 min-h-1/2 lg:min-h-3/5 lg:max-h-3/5 xl:min-h-1/2 xl:max-h-1/2"><IMG style={{backgroundImage: `url(${imagesrc})`}} /></IMG_DIV>
              <ArrowBox className="px-6 pt-6 2xl:px-8 2xl:pt-8 leading-none text-gray-700">
                <div className='overflow-hidden fade-box2'>
                  <h1 className="font-extrabold text-2xl xl:text-3xl leading-tight text-black group-hover:text-highlight_2 overflow-y-hidden font-sans">{title}</h1>
                  <p className="my-3 text-base leading-tight group-hover:text-highlight_2" >{description}</p>
                </div>
                <div className="relative z-10 text-xs">
                  <p className="mt-2">
                    {node.frontmatter.author.map((author, idx) => (
                      (node.frontmatter.author.length == idx + 1) ? author.name : author.name + ", "      
                    ))}
                  </p>
                  <p className="mt-1 mb-1">{node.frontmatter.date} · {node.fields.readingTime.text}</p>
                </div>         
                {/* <p className="mt-5 text-base  font-semibold">{node.fields.readingTime.text}</p> */}
              </ArrowBox>
            </Link>
            <div className="px-6 2xl:px-8 text-xs text-gray-700">
              {node.frontmatter.category.map((cat) => (
                <>
                  <Link className="text-gray-700 font-semibold hover:underline" key={cat} to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
                  <> · </> 
                </>
              ))}
              
              {tag.map((tagItem, i) => {
                return (
                  i < 3 && 
                  <>
                    <Link key={tagItem} className="hover:underline" to={`/blog/tag/${kebabCase(tagItem)}`}>{tagItem}</Link>
                    {tag.length === i+1 ? '' : [i === 2 ? ' ' : ' · ']}
                  </>
                )         
              })}
              {tag.length > 3 && <Link className="hover:underline" to={node.fields.slug}>+{tag.length - 3} more</Link>}
            </div>        
          </div>
        </Slide>
      )
    })}
    </div>
  )
}

export default blogPostGrid

blogPostGrid.propTypes = {
  allMdx: PropTypes.any,

}