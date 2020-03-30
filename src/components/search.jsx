import React, { Component } from 'react'
import { Link, graphql, useStaticQuery, withPrefix } from 'gatsby'
import PropTypes from "prop-types"
import {FiSearch} from "react-icons/fi"
import Highlighter from 'react-highlight-words';
import kebabCase from "lodash.kebabcase"
import no_image_1 from "../images/blog/no_image_1.png"
import no_image_2 from "../images/blog/no_image_2.png"
import no_image_3 from "../images/blog/no_image_3.png"
import no_image_4 from "../images/blog/no_image_4.png"
import no_image_5 from "../images/blog/no_image_5.png"
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

// Search component
class Search extends Component {

  state = {
    query: '',
    results: [],
  }

  componentDidMount = () => {
    setTimeout(() => {
      if(this.props.location.state.searchWord) {
        var queryHome = this.props.location.state.searchWord
        var input = document.getElementById("pageSearch")
        this.setState({query: queryHome})
        input.setAttribute("value", queryHome)
        this.searchFromHome(queryHome)
      }
    }, 100);
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
                    date(formatString: "ddd, DD MMM YYYY")
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


                let description = item.description.split(" ").splice(0, 30)
                if(description.length < 30){
                  description = description.join(" ").concat(".");
                } else {
                  description = description.join(" ").concat(" ...");
                }

                return( 
                  <div className="text-gray-800 group relative w-full md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white m-3 xl:m-4 text-left cursor-pointer min-h-60 ipadp:min-h-80 2xl:min-h-55 2xl:max-h-55 hover:shadow-2xl ipadp:overflow-hidden" style={{borderRadius: "1rem"}} key={i}  >
                    <a href={withPrefix(`${item.url}`)} target="_blank" rel="noopener noreferrer">
                      <img className="w-full rounded-t-lg min-h-1/2 max-h-1/2 ipadp:min-h-3/5 ipadp:max-h-3/5 group-hover:max-h-1/2 group-hover:min-h-1/2" style={{objectFit: "cover", objectPosition: "center", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", transition: ".3s ease"}} src={imagesrc}></img>
                      <div className="pt-2 pb-2 flex flex-wrap">
                        <p className="px-2 ipadp:px-6 mb-2 text-xxs text-gray-400 w-full font-semibold ipadp:hidden group-hover:block"><Highlighter highlightClassName="text-red-500 bg-transparent" textToHighlight={item.url.slice(5,).toUpperCase()} searchWords={this.state.query.split()} /></p>
                        <h1 className="px-2 ipadp:px-6 font-bold leading-4 mt-2 mb-3 group-hover:text-gray-800"><Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={item.title} searchWords={this.state.query.split()} /></h1>
                        <h1 className="px-2 ipadp:px-6 leading-4 text-xs xl:text-sm group-hover:text-gray-800"><Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={description} searchWords={this.state.query.split()} /></h1>                
                        <h1 className="text-gray-500 px-2 ipadp:px-6 leading-4 text-xs xl:text-sm mt-2"><Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={item.author.join(' · ')} searchWords={this.state.query.split()} /></h1>
                        
                        <div className="border-t-1 border-gray-300 w-full absolute bottom-0 pb-2 bg-white" style={{borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem"}}>
                          <Link className="inline-block text-gray-700 text-xs hover:text-highlight_2 font-semibold ml-4 mr-2" to={`/blog/category/${kebabCase(item.category[0])}`}><Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={item.category[0]} searchWords={this.state.query.split()} /></Link>
                          {item.tag.map((tag) => (
                            <Link key={tag} to={`/blog/tag/${kebabCase(tag)}`} className="inline-block text-gray-600 text-xs hover:text-highlight_2 mr-2"><Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={tag} searchWords={this.state.query.split()} /></Link>
                          ))}
                        </div>
                      </div>
                    </a>
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

    return (
      <div className={`${this.props.classNames} mt-16 2xl:mt-20 mb-32 relative text-gray-300 w-full text-center`}>
        <Zoom top duration={1000} cascade><p className="text-2xl xl:text-3xl text-white my-4 xl:my-8">what&apos;s next? </p></Zoom>
        <Fade bottom duration={1500}>
          <div className="inline-block focus:outline-none text-gray-600 bg-white shadow p-3 rounded-lg">
            <FiSearch className="inline-block text-center text-3xl -mt-1" />
            <input id="pageSearch" onChange={this.search} onInput={this.search} className="search__input py-1 pl-4 text-lg focus:outline-none pr-5 text-gray-600" style={{minWidth: "25vw"}} type="text" name="search" placeholder="What are you looking for?" />
          </div>
        </Fade>
        <div className="search__list">
          <ResultList />
        </div>
      </div>
    )

    
  }

  

  getSearchResults(query) {
    //index - a flexsearch index instance (variables set in gatsby-config)
    //store - object that stores the indexed gatsby nodes where the id of each node corresponds to the id the filter, according with flexsearch.js best practices (https://github.com/nextapps-de/flexsearch#best-practices)).

    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    if (!query || !index) {
      return []
    } else {
      var results = []
      console.log(index)
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

  search = (event) => {
    const query = event.target.value
    if (this.state.query.length > 1) {
      const results = this.getSearchResults(query)
      this.setState({ results: results, query: query })
    } else {
      this.setState({ results: [], query: query })
    }
  }

  searchFromHome = (homeQuery) => {
    const query = homeQuery
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
  location: PropTypes.any,
}


