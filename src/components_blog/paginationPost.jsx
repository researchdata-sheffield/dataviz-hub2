import React from 'react'
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"
import kebabCase from "lodash.kebabcase"
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti"
import {CatBtn, TagBtn} from "../components_style/styled"

class PaginationPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pruneLen = 40
    let prevTitle = this.props.prev ? this.props.prev.node.frontmatter.title : ""
    let nextTitle = this.props.next ? this.props.next.node.frontmatter.title : ""
    
    if(prevTitle.length > pruneLen){
      prevTitle = prevTitle.substring(0,pruneLen).concat(" ...")
    }
    if(nextTitle.length > pruneLen){
      nextTitle = nextTitle.substring(0,pruneLen).concat(" ...")
    }

    return(
      <div className="bg-gray-900 relative z-10">
        <div className="flex text-gray-200 justify-center items-center content-center mx-auto pt-6 text-sm">
          {this.props.mdx.frontmatter.category.map((cat) => (
            <CatBtn key={cat} to={`/blog/category/${kebabCase(cat)}`}>{cat}</CatBtn>
          ))}
          {this.props.mdx.frontmatter.tag.map((tag) => (
            <TagBtn key={tag} to={`/blog/tag/${kebabCase(tag)}`}>{tag}</TagBtn>
          ))}
        </div>

        <div className="flex justify-center py-8 mx-auto font-semibold" >
          {this.props.prev && (
            <a value="prev" className="flex items-center pr-6 hover:text-highlight_2 text-gray-300 min-w-20" href={withPrefix(this.props.prev.node.fields.slug)}>
              <TiArrowLeftThick className="mr-3 text-xl" /> {prevTitle}
            </a>
          )}

          {this.props.next && (
            <a value="next" className="flex items-center pl-6 hover:text-highlight_2 text-gray-300 min-w-20" href={withPrefix(this.props.next.node.fields.slug)}>
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
  mdx: PropTypes.any,
  prev: PropTypes.any,
  next: PropTypes.any,
}