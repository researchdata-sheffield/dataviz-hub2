import React, { Component } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from "prop-types"
import {FiSearch} from "react-icons/fi"
import Highlighter from 'react-highlight-words';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import bg from "../../images/search/bg.jpg"
import { getImageSource, shortenText } from "../../utils/shared"


// Search component
class Search extends Component {

  state = {
    query: '',
    results: [],
  }

  componentDidMount = () => {
    setTimeout(() => {
      if(this.props.location.state && this.props.location.state.searchWord) {
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
      // query length changed from 2 to 0
      if (this.state.results.length > 0 && this.state.query.length > 0) {
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
            <div className="bg-white text-gray-900 py-2">Found {this.state.results.length} results for you.</div>

            <div className="flex flex-wrap py-10 xl:pt-16 xl:pb-64 justify-center bg-gray-100">
              {this.state.results.map((item, i) => {
                let imagesrc
                {data.allMdx.edges.map(({ node }) => {
                  if(item.id == node.id){
                    imagesrc = getImageSource(node);
                  }
                })}

                let title = shortenText(item.title, 8);
                let description = shortenText(item.description, 30)
                const highlightClasses = "text-blue-400 bg-black"

                return( 

                  <a href={`${item.url}`} target="_blank" rel="noopener noreferrer" key={i}>
                    <div 
                      style={{width: "363px", backgroundImage: `url(${imagesrc})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: '10px', minHeight: '420px'}} 
                      className="shadow-lg hover:shadow-xl rounded-lg group text-left relative md:mx-6 my-6 transform hover:scale-105 transition duration-500"
                    >
                      <div className="rounded-lg max-h-60 w-full p-6 transition duration-700 bg-black-35 group-hover:bg-black-75" style={{minHeight: '420px'}}>
                        <div className="absolute pt-8 lg:pt-12 2xl:pt-16 overflow-hidden" style={{maxWidth:"320px"}}>
                          <h1 className="mb-3 group-hover:-translate-y-8 text-white bg-gray-900 group-hover:text-brand-blue group-hover:bg-black font-bold text-lg transform transition duration-300 inline-block rounded-md" style={{textShadow: 'none', padding: '.15rem .65rem'}}>
                            { item.type || 'blog' }
                          </h1>
                          {/* title */}
                          <h1 className="group-hover:-translate-y-8 text-white font-bold leading-7 text-2xl transform transition duration-100">
                            <Highlighter 
                              highlightClassName={highlightClasses} 
                              textToHighlight={title} 
                              searchWords={this.state.query.split()} 
                            />
                          </h1>
                          {/* authors  */}
                          <h1 className="group-hover:hidden text-gray-400 leading-7 my-4 font-bold text-lg transition duration-500" style={{textShadow: "#000 0px 0px 30px"}}>
                            {item.author.map((author, index, arr) => {
                              return ( 
                                <Highlighter 
                                  className="text-white" 
                                  highlightClassName={highlightClasses} 
                                  textToHighlight={arr.length - 1 === index ? author : author.concat(", ")} 
                                  searchWords={this.state.query.split()} 
                                  key={author} 
                                /> 
                              )
                            })}
                          </h1>
                          {/* category */}
                          {
                            item.category &&
                            <h1 className="group-hover:hidden text-gray-400 font-bold transition duration-500">
                              CAT: &nbsp;
                              <Highlighter 
                                className="text-white" 
                                highlightClassName={highlightClasses} 
                                textToHighlight={item.category[0].toUpperCase()} 
                                searchWords={this.state.query.split()} 
                              />
                            </h1>
                          }

                          {/* tag */}
                          {
                            item.tag &&
                            <h1 className="group-hover:hidden text-gray-400 font-bold transition duration-500">
                              TAG: &nbsp;{item.tag.map((tag, index, arr) => {
                                return ( 
                                  i < 3 && 
                                  <Highlighter 
                                    className="text-white" 
                                    highlightClassName={highlightClasses} 
                                    textToHighlight={arr.length - 1 === index ? tag.toUpperCase() : tag.toUpperCase().concat(", ")} 
                                    searchWords={this.state.query.split()} 
                                    key={tag}   
                                  />
                                )
                              })}
                              {item.tag.length > 3 && <p className="inline-block text-white"> +{item.tag.length - 3} more</p>}
                            </h1>
                          }
                          <p className="hidden group-hover:block my-4 text-xs text-gray-500 w-full font-semibold transform group-hover:-translate-y-12 transition duration-500">
                            <Highlighter 
                              highlightClassName={highlightClasses} 
                              textToHighlight={item.url.toUpperCase()} 
                              searchWords={this.state.query.split()} 
                            />
                          </p>
                          <h1 className="hidden group-hover:block text-white leading-5 text-lg py-3 transform group-hover:-translate-y-12 transition duration-500">
                            <Highlighter 
                              highlightClassName={highlightClasses} 
                              textToHighlight={description} 
                              searchWords={this.state.query.split()}
                            />
                          </h1>      
                        </div>
                      </div>
                    </div>
                  </a>
                )
              })}
          </div>
         </div>
        )
      } 
      // else if (this.state.query.length > 2) {
      //   return (
      //     <div className="bg-orange-700 text-gray-100 py-2">No results for {this.state.query}</div>
      //   )
          
      // } else if (this.state.query.length > 0) {
      //   return (
      //     <div className="bg-orange-700 text-gray-100 py-2">Please insert at least 3 characters</div>
      //   )
      // } 
      else if (this.state.query.length > 0) {
        return (
          <div className="bg-white text-gray-900 py-2">No results for {this.state.query}</div>
        )
      }
      else {
        return (
          <div className="bg-white text-gray-900 py-2">Awaiting for your input ...</div>
        )
      }
    }

    return (
      <div className={`${this.props.classNames} relative text-gray-700 w-full text-center`}>
        <div className="min-h-60 pt-40 pb-10" style={{backgroundImage: `url(${bg})`, backgroundSize: "cover", width: "100%"}}>
          <Zoom top duration={1000} cascade><p className="text-2xl xl:text-3xl text-white mb-3 font-semibold">Search@dataviz.shef</p></Zoom>
          <Fade bottom duration={1500}>
            <div className="inline-block focus:outline-none text-gray-600 bg-white shadow p-3 rounded-lg">
              <FiSearch className="inline-block text-center text-3xl -mt-1" />
              <input 
                id="pageSearch" 
                onChange={this.search} 
                onInput={this.search} 
                autoComplete="off" 
                className="search__input py-0 pl-4 text-lg focus:outline-none pr-5 text-gray-600" 
                style={{minWidth: "25vw"}} 
                type="text" 
                name="search" 
                placeholder="Search title, description, date..." 
              />
            </div>
          </Fade>
        </div>
        <div className="search__list bg-gray-100">
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
      // search the indexed fields
      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search({
          query: query,
          suggest: true,
        }))
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
    if (this.state.query.length > -1) {
      const results = this.getSearchResults(query)
      this.setState({ results: results, query: query })
    } else {
      this.setState({ results: [], query: query })
    }
  }

  searchFromHome = (homeQuery) => {
    const query = homeQuery
    if (this.state.query.length > -1) {
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


