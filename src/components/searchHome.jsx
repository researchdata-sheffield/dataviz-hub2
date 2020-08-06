import React, { Component } from 'react'
import { navigate } from 'gatsby'
import PropTypes from "prop-types"
import {FiSearch} from "react-icons/fi"
import Highlighter from 'react-highlight-words';


// Search component
class Search_Home extends Component {
  state = {
    query: '',
    results: [],
  }

  render() {

    const ResultList = () => {
      if (this.state.results.length > 0 && this.state.query.length > 0 ) {
        
        return (
          <div className="z-30 text-left overflow-auto max-h-50 xl:max-h-55 mx-auto ipadp:max-w-25 2xl:max-w-30 border-1 border-gray-200 shadow-2xl noScrollBar">
            {this.state.results.slice(0,5).map((page, i) => {
              let description = page.description.split(" ").splice(0, 28)
              if(description.length < 28){
                description = description.join(" ")
              } else {
                description = description.join(" ").concat(" ...")
              }
              //let category = page.category

              return( 
                <div className="text-gray-800 group border-b-1 border-gray-200 hover:bg-gray-200" key={i}>
                  <a href={`${page.url}`} target="_blank" rel="noopener noreferrer">
                    <div className="flex self-center items-center justify-end">
                      <div className="w-full">
                        <h1 className="font-bold text-sm xl:text-lg w-full px-3 py-3 text-gray-900">
                          <Highlighter highlightClassName="text-blue-500 bg-transparent" textToHighlight={page.title} searchWords={this.state.query.split()} />
                        </h1>
                      </div>

                    </div>
                  </a>
                </div>
              )
            })}
            {this.state.results.length > 6 ? 
              <div className="text-center py-2 bg-gray-800 text-white font-semibold hover:bg-white hover:text-highlight_2 border-t-1 cursor-pointer" onClick={ () => {navigate("/search", {state: {searchWord: this.state.query}} )} }>{this.state.results.length - 6} more results</div>
              : <div className="text-center py-2 bg-gray-800 text-white font-semibold border-t-1">End of results</div>
            }
            
         </div>
        )
      } else if (this.state.query.length > 0) {
        return 'No results for ' + this.state.query
      } 
      // else if (this.state.query.length > 0) {
      //   return 'Please insert at least 3 characters'
      // } 
      else {
        return ''
      }
    }

    return (
      <div className={`${this.props.classNames} mt-16 2xl:mt-20 relative text-gray-700 w-full text-center`} >
        <div className="inline-block focus:outline-none text-gray-600 bg-white p-3 rounded-lg" style={{boxShadow: "#4e4e4e 0px 5px 20px -16px"}}>
          <FiSearch className="inline-block text-center text-3xl -mt-1" />
          <input id="homeSearch" onChange={this.search} onInput={this.search} autoComplete="off" className="search__input py-1 pl-4 text-lg focus:outline-none pr-5 text-gray-700" style={{minWidth: "21vw"}} type="text" name="search" placeholder="What are you looking for?" />
        </div>
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
    if (this.state.query.length > -1) {
      const results = this.getSearchResults(query)
      this.setState({ results: results, query: query })
    } else {
      this.setState({ results: [], query: query })
    }
  }
}

export default Search_Home

Search_Home.propTypes = {
  classNames: PropTypes.any,
}