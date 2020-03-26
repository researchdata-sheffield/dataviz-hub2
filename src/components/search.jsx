import React, { Component } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import PropTypes from "prop-types"
import {FiSearch} from "react-icons/fi"
import Highlighter from 'react-highlight-words';
import kebabCase from "lodash.kebabcase"
import no_image_1 from "../images/blog/no_image_1.png"
import no_image_2 from "../images/blog/no_image_2.png"
import no_image_3 from "../images/blog/no_image_3.png"
import no_image_4 from "../images/blog/no_image_4.png"
import no_image_5 from "../images/blog/no_image_5.png"

// Search component
class Search extends Component {

  state = {
    query: '',
    results: [],
  }

  render() {

    const ResultList = () => {
      if (this.state.results.length > 0 && this.state.query.length > 2) {
      
        const data = useStaticQuery(graphql`
          query postList {
            allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
              edges {
                node {
                  id
                  frontmatter {
                    thumbnail {
                      childImageSharp {
                        fluid {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `)

        return (
          <div>
            <div>Found {this.state.results.length} results</div>
            <div className="flex flex-wrap my-5 xl:my-8 justify-center">
              {this.state.results.map((item, i) => {
                let imagesrc

                {data.allMdx.edges.map(({ node }) => {
                  if(item.id == node.id){
                    if(node.frontmatter && node.frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
                      imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 
                    } else {
                      let image_set = [no_image_1, no_image_2, no_image_3, no_image_4, no_image_5]
                      imagesrc = image_set[Math.floor(Math.random() * image_set.length)]
                    }
                  }
                })}


                let description = item.description.split(" ").splice(0, 22)
                if(description.length < 22){
                  description = description.join(" ").concat(".");
                } else {
                  description = description.join(" ").concat(" ...");
                }
                let category = item.category

                return( 
                  <div className="text-gray-800 group w-full md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white m-3 xl:m-4 text-left cursor-pointer rounded-lg shadow-2xl min-h-80 max-h-90 xl:min-h-60 xl:max-h-60" style={{borderRadius: "1rem"}} key={i} onClick={() => {window.open(item.url, '_blank','noopener', 'noreferrer')}} >
                    <img className="w-full rounded-t-lg" style={{minHeight: "60%", maxHeight: "60%",  objectFit: "cover", objectPosition: "center", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem"}} src={imagesrc}></img>
                    <div className="px-6 pt-4 pb-2 flex flex-wrap">
                      <h1 className="font-bold leading-4 mb-3"><Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={item.title} searchWords={this.state.query.split()} /></h1>
                      <h1 className="leading-4 text-xs xl:text-sm"><Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={description} searchWords={this.state.query.split()} /></h1>
                      
                      <div className="border-t-1 border-gray-300 w-full mt-3">
                        <Link className="inline-block text-gray-600 text-xs hover:text-highlight_2 mr-2" to={`/blog/category/${kebabCase(category)}`}>
                          <p className="text-xs">{category}</p>
                        </Link>
                        {item.tag.map((tag) => (
                          <Link key={tag} to={`/blog/tag/${kebabCase(tag)}`}className="inline-block text-gray-600 text-xs hover:text-highlight_2 mr-2">{tag}</Link>
                        ))}

                      </div>
                      
                    </div>
                  </div>
                )
              
                })}
          </div>
         </div>
        )
      } else if (this.state.query.length > 2) {
        return 'No results for ' + this.state.query
      } else if (
        this.state.query.length > 0
      ) {
        return 'Please insert at least 3 characters'
      } else {
        return ''
      }
    }
    // pr-10 lg:pr-16 ipadp:pr-24 2xl:pr-70
    return (
      <div className={`${this.props.classNames} mt-16 2xl:mt-20 mb-32 relative text-gray-300 w-full text-center`}>
        <p className="text-3xl xl:text-4xl text-white my-4 xl:my-8">What&apos;s next? </p>
        <div className="bg-white inline-block focus:outline-none rounded-l-lg text-gray-600" style={{boxShadow: "-10px 5px 40px -11px rgba(0, 0, 0, 0.25)", padding: "0.9rem", paddingTop: "1.1rem"}}><FiSearch className="inline-block text-center text-3xl -mt-2" /></div>
        <input id="homeSearch" onChange={this.search} className="search__input bg-white pl-1 text-lg focus:outline-none shadow-2xl pr-5 rounded-r-lg text-gray-600" style={{boxShadow: "10px 5px 40px -17px rgba(0, 0, 0, 0.25)", height: "3.6rem", minWidth: "26.3vw", maxWidth: "100vw"}}
          type="search" name="search" placeholder="What are you looking for?" />
        <div className="search__list">
          <ResultList />
        </div>
      </div>
    )
  }

  getSearchResults(query) {
    // adicionar variável para língua
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    if (!query || !index) {
      return []
    } else {
      var results = []
      // search the indexed fields
      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search(query)) // more search options at https://github.com/nextapps-de/flexsearch#index.search
      })

      // find the unique ids of the nodes
      results = Array.from(new Set(results))

      // return the corresponding nodes in the store
      var nodes = store
        .filter(node => (results.includes(node.id) ? node : null))
        .map(node => node.node)

      return nodes
    }
  }

  search = event => {
    const query = event.target.value
    if (this.state.query.length > 1) {
      const results = this.getSearchResults(query)
      this.setState({ results: results, query: query })
    } else {
      this.setState({ results: [], query: query })
    }
  }
}

export default Search

Search.propTypes = {
  classNames: PropTypes.any,
  data: PropTypes.any,
}


