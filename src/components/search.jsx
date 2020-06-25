import React, { Component } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from "prop-types"
import {FiSearch} from "react-icons/fi"
import Highlighter from 'react-highlight-words';
//import kebabCase from "lodash.kebabcase"
import no_image_1 from "../images/blog/no_image_1.png"
import no_image_2 from "../images/blog/no_image_2.png"
import no_image_3 from "../images/blog/no_image_3.png"
import no_image_4 from "../images/blog/no_image_4.png"
import no_image_5 from "../images/blog/no_image_5.png"
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import bg from "../images/search/bg.jpg"

// Search component
class Search extends Component {

  state = {
    query: '',
    results: [],
  }

  componentDidMount = () => {
    setTimeout(() => {
      if(this.props.location.state.searchWord !== undefined) {
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
            <div className="bg-orange-700 text-gray-100 py-2">Found {this.state.results.length} results</div>

            <div className="flex flex-wrap py-8 xl:py-12 justify-center bg-gray-100">
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

                let title = item.title.split(" ").splice(0, 8)
                if(title.length < 8){
                  title = title.join(" ")
                } else {
                  title = title.join(" ").concat(" ...")
                }

                let description = item.description.split(" ").splice(0, 30)
                if(description.length < 30){
                  description = description.join(" ")
                } else {
                  description = description.join(" ").concat(" ...")
                }

                return( 

                  <a href={`${item.url}`} target="_blank" rel="noopener noreferrer" key={i}>
                    <div style={{width: "363px", backgroundImage: `url(${imagesrc})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "15px"}} className="group text-left relative shadow-c1 hover:shadow-c2 rounded-lg min-h-80 2xl:min-h-60 mx-6 my-6 transform hover:scale-105 transition duration-500">
                      <div className="min-h-80 2xl:min-h-60 max-h-80 w-full p-6 transition duration-700 bg-black-45 group-hover:bg-black-85" style={{borderRadius: "15px"}}>
                        <div className="absolute pt-10vh lg:pt-20vh 2xl:pt-22vh overflow-hidden" style={{maxWidth:"320px"}}>
                          <h1 className="group-hover:-translate-y-16 text-white font-bold leading-10 text-4xl transform transition duration-100"><Highlighter highlightClassName="bg-transparent text-red-600" textToHighlight={title} searchWords={this.state.query.split()} /></h1>  
                          <h1 className="group-hover:hidden text-highlight_2 leading-9 my-6 font-bold text-2xl transition duration-500" style={{textShadow: "#000 0px 0px 30px"}}><Highlighter highlightClassName="bg-transparent text-red-600" textToHighlight={item.author.join(' · ')} searchWords={this.state.query.split()} /></h1>
                          <h1 className="group-hover:hidden text-gray-400 font-bold transition duration-500">CAT: &nbsp;<Highlighter className="text-white" highlightClassName="bg-transparent text-red-600" textToHighlight={item.category[0].toUpperCase()} searchWords={this.state.query.split()} /></h1>
                          <h1 className="group-hover:hidden text-gray-400 font-bold transition duration-500">
                            TAG: &nbsp;{item.tag.map((tag, i, arr) => {
                              return ( i < 3 && <Highlighter className="text-white" highlightClassName="bg-transparent text-red-600" textToHighlight={arr.length - 1 === i ? tag.toUpperCase() : tag.toUpperCase().concat(", ")} searchWords={this.state.query.split()} key={tag} /> )
                            })}
                            {item.tag.length > 3 && <p className="inline-block text-white"> +{item.tag.length - 3} more</p>}
                          </h1>
                          <p className="hidden group-hover:block my-3 text-xxs text-gray-500 w-full font-semibold transform group-hover:-translate-y-12 transition duration-500"><Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={item.url.slice(5,).toUpperCase()} searchWords={this.state.query.split()} /></p>
                          <h1 className="hidden group-hover:block text-white leading-5 text-lg py-3 transform group-hover:-translate-y-12 transition duration-500"><Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={description} searchWords={this.state.query.split()} /></h1>      
                        </div>
                      </div>
                    </div>
                  </a>
                )
                })}
          </div>
         </div>
        )
      } else if (this.state.query.length > 2) {
        return (
          <div className="bg-orange-700 text-gray-100 py-2">No results for {this.state.query}</div>
        )
          
      } else if (
        this.state.query.length > 0
      ) {
        return (
          <div className="bg-orange-700 text-gray-100 py-2">Please insert at least 3 characters</div>
        )
      } else {
        return (
          <div className="bg-orange-700 text-gray-100 py-2">Awaiting for your input ...</div>
        )
      }

    }

    return (
      <div className={`${this.props.classNames} relative text-gray-700 w-full text-center`}>
        <div className="min-h-50 pt-36 pb-10" style={{backgroundImage: `url(${bg})`, backgroundSize: "cover", width: "100%",}}>
          <Zoom top duration={1000} cascade><p className="text-2xl xl:text-3xl text-white mb-3 font-semibold">Search@dataviz.shef</p></Zoom>
          <Fade bottom duration={1500}>
            <div className="inline-block focus:outline-none text-gray-600 bg-white shadow p-3 rounded-lg">
              <FiSearch className="inline-block text-center text-3xl -mt-1" />
              <input id="pageSearch" onChange={this.search} onInput={this.search} autoComplete="off" className="search__input py-0 pl-4 text-lg focus:outline-none pr-5 text-gray-600" style={{minWidth: "25vw"}} type="text" name="search" placeholder="Title, description, date..." />
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


