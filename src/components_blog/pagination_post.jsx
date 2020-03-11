import React from 'react'
import PropTypes from "prop-types"
import { Link, withPrefix } from "gatsby"
import kebabCase from "lodash.kebabcase"
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti"


class PaginationPost extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let pruneLen = 40
    let prevTitle = this.props.prev.node.frontmatter.title
    let nextTitle = this.props.next.node.frontmatter.title
    
    if(prevTitle.length > pruneLen){
      prevTitle = prevTitle.substring(0,pruneLen).concat(" ...")
    }
    if(nextTitle.length > pruneLen){
      nextTitle = nextTitle.substring(0,pruneLen).concat(" ...")
    }

    return(
      <div>
        <div className="flex text-gray-200 justify-center items-center content-center mx-auto mt-16 py-3 bg-gray-100 text-sm" style={{fontFamily: "TUoS Blake"}}>
          {this.props.mdx.frontmatter.category.map((cat) => (
            <Link key={cat} to={`/blog/category/${kebabCase(cat)}`} 
              className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mr-2 bg-gray-500 text-gray-200 rounded-md">{cat}
            </Link>
          ))}
          {this.props.mdx.frontmatter.tag.map((tag) => (
            <Link key={tag} to={`/blog/tag/${kebabCase(tag)}`} 
              className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mr-2 bg-gray-300 text-gray-700 rounded-md">{tag}
            </Link>
          ))}
        </div>

        <div className="flex text-gray-500 justify-center py-3 bg-gray-100 mx-auto font-semibold" >
          {this.props.prev && (
            <a value="prev" className="flex items-center pr-12 hover:text-highlight_2" href={withPrefix(this.props.prev.node.fields.slug)}>
              <TiArrowLeftThick className="mr-3" /> {prevTitle}
            </a>
          )}

          {this.props.next && (
            <a value="next" className="flex items-center pl-12 hover:text-highlight_2" href={withPrefix(this.props.next.node.fields.slug)}>
              {nextTitle} <TiArrowRightThick className="ml-3" />
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