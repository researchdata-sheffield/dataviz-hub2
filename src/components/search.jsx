import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import {FiSearch} from "react-icons/fi"
import Highlighter from 'react-highlight-words';
import kebabCase from "lodash.kebabcase"

// Search component
class Search extends Component {
  state = {
    query: '',
    results: [],
  }

  render() {
    const ResultList = () => {
      if (this.state.results.length > 0) {
        
        return (
          <div className="z-30 text-left overflow-auto max-h-50 xl:max-h-55 mx-auto ipadp:max-w-30 2xl:max-w-30 border-1 border-gray-200 shadow-2xl noScrollBar rounded-lg">
            {this.state.results.slice(0,7).map((page, i) => {
              let description = page.description.split(" ").splice(0, 28)
              if(description.length < 28){
                description = description.join(" ").concat(".");
              } else {
                description = description.join(" ").concat(" ...");
              }
              let category = page.category

              return( 
                <div className="text-gray-800 group" key={i} style={{fontFamily: "TUoS Blake"}}>
                  <Link to={page.url} className="">
                    <div className="flex bg-black self-center items-center justify-end">
                      <div className="w-5/6">
                        <h1 className="font-bold text-sm xl:text-lg w-full px-1 py-1 text-white">
                          <Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={page.title} searchWords={this.state.query.split()} />
                        </h1>
                      </div>

                      <div className="flex w-1/6 justify-end">
                        <Link className="inline-block hover:bg-highlight_2 hover:text-white mx-2 px-1 py-1 bg-gray-900 rounded-lg text-white text-xs" to={`/blog/category/${kebabCase(category)}`}>
                          <p className="text-xs">{category}</p>
                        </Link>
                      </div>
                    </div>

      
                    <div className="flex py-1 group-hover:bg-light_grey group-hover:text-gray-900">
                      <div className="w-3/12 text-xs py-1 px-1">
                        <h1 className="leading-3 mt-1" style={{fontSize: "0.6rem"}}>By: <Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={page.author.join(' · ')} searchWords={this.state.query.split()} /></h1>
                      </div>
                      <div className="w-9/12">
                        {/* borderLeft: `solid 1px ${category == "Articles" ? "#ff5e5e" : [category == "Events" ? "#f3f218" : [category == "News" ? "#00aeef" : "#99f318"]]}` */}
                        <h1 className="text-xs xl:text-med px-2 py-1 leading-4 xl:leading-6 border-l-1 border-gray-300" style={{ borderWidth: "20%" }}><Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={description} searchWords={this.state.query.split()} /></h1>
                      </div>
                    </div>
                    
                    
                    

                  </Link>
                </div>
              )
            
              })}
         </div>
        )
      } else if (this.state.query.length > 2) {
        return 'No results for ' + this.state.query
      } else if (
        this.state.results.length === 0 &&
        this.state.query.length > 0
      ) {
        return 'Please insert at least 3 characters'
      } else {
        return ''
      }
    }
    // pr-10 lg:pr-16 ipadp:pr-24 2xl:pr-70
    return (
      <div className={`${this.props.classNames} mt-12 2xl:mt-20 relative text-gray-600 w-full text-center`}>
        <div className="bg-white inline-block focus:outline-none" style={{boxShadow: "-10px 5px 40px -11px rgba(0, 0, 0, 0.25)", padding: "0.9rem", paddingTop: "1.04rem"}}><FiSearch className="inline-block text-center text-3xl -mt-2" /></div>
        <input id="homeSearch" onChange={this.search} className="search__input bg-white pl-1 text-lg focus:outline-none shadow-2xl pr-5" style={{boxShadow: "10px 5px 40px -17px rgba(0, 0, 0, 0.25)", height: "3.5rem", minWidth: "26.3vw", maxWidth: "100vw"}}
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
}