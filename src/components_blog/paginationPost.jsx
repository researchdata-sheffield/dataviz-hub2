import React from 'react'
import PropTypes from "prop-types"
import kebabCase from "lodash.kebabcase"
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti"
import {CatBtn, TagBtn} from "../components_style/styled"
import { Twitter, Facebook, Mail, Linkedin } from "react-social-sharing"

class PaginationPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mdx, share, prev, next } = this.props

    let pruneLen = 40
    let prevTitle = prev ? prev.node.frontmatter.title : ""
    let nextTitle = next ? next.node.frontmatter.title : ""
    
    if(prevTitle.length > pruneLen){
      prevTitle = prevTitle.substring(0,pruneLen).concat(" ...")
    }
    if(nextTitle.length > pruneLen){
      nextTitle = nextTitle.substring(0,pruneLen).concat(" ...")
    }

    return(
      <div className="bg-gray-900">
        <div className="flex flex-wrap text-sm justify-center w-full py-2 lg:hidden">
          <Twitter className="greyScale-100 hover:greyScale-0" solid small message={share[0]} link={share[1]} />
          <Facebook className="greyScale-100 hover:greyScale-0" solid small link={share[1]} />
          <Mail className="hover:bg-red-600" solid small subject={share[0]} link={share[1]} />
          <Linkedin className="greyScale-100 hover:greyScale-0" solid small message={share[0]} link={share[1]} />
        </div> 
        <div className="flex flex-wrap text-gray-200 justify-center items-center content-center mx-auto pt-6 text-sm">
          {mdx.frontmatter.category.map((cat) => (
            <CatBtn key={cat} to={`/blog/category/${kebabCase(cat)}`}>{cat}</CatBtn>
          ))}
          {mdx.frontmatter.tag.map((tag) => (
            <TagBtn key={tag} to={`/blog/tag/${kebabCase(tag)}`}>{tag}</TagBtn>
          ))}
        </div>

        <div className="flex justify-center py-8 mx-auto font-semibold" >
          {prev && (
            <a value="prev" className="flex items-center pr-6 hover:text-highlight_2 text-gray-300 min-w-20" href={prev.node.fields.slug}>
              <TiArrowLeftThick className="mr-3 text-xl" /> {prevTitle}
            </a>
          )}

          {next && (
            <a value="next" className="flex items-center pl-6 hover:text-highlight_2 text-gray-300 min-w-20" href={next.node.fields.slug}>
              {nextTitle} <TiArrowRightThick className="ml-3 text-xl" />
            </a>
          )}
        </div>
      </div>

    )
  }
}

export default PaginationPost

PaginationPost.propTypes = {
  mdx: PropTypes.node,
  prev: PropTypes.node,
  next: PropTypes.node,
  share: PropTypes.array,
}