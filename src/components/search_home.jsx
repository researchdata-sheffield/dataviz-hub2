import React, { Component } from 'react'
import { Link, navigate, withPrefix } from 'gatsby'
import PropTypes from "prop-types"
import {FiSearch} from "react-icons/fi"
import Highlighter from 'react-highlight-words';
import kebabCase from "lodash.kebabcase"


// Search component
class Search_Home extends Component {
  state = {
    query: '',
    results: [],
  }

  render() {

    const ResultList = () => {
      if (this.state.results.length > 0 && this.state.query.length > 2 ) {
        
        return (
          <div className="z-30 text-left overflow-auto max-h-50 xl:max-h-55 mx-auto ipadp:max-w-30 2xl:max-w-30 border-1 border-gray-200 shadow-2xl noScrollBar rounded-lg">
            {this.state.results.slice(0,5).map((page, i) => {
              let description = page.description.split(" ").splice(0, 28)
              if(description.length < 28){
                description = description.join(" ").concat(".");
              } else {
                description = description.join(" ").concat(" ...");
              }
              let category = page.category

              return( 
                <div className="text-gray-800 group" key={i} style={{fontFamily: "TUoS Blake"}}>
                  <a href={withPrefix(`${page.url}`)} target="_blank" rel="noopener noreferrer">
                    <div className="flex bg-gray-900 self-center items-center justify-end">
                      <div className="w-5/6">
                        <h1 className="font-bold text-sm xl:text-lg w-full px-1 py-1 text-white">
                          <Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={page.title} searchWords={this.state.query.split()} />
                        </h1>
                      </div>

                      <div className="flex w-1/6 justify-end">
                        <Link className="inline-block hover:bg-highlight_2 hover:text-white mx-2 px-1 py-1 bg-black rounded-lg text-white text-xs" to={`/blog/category/${kebabCase(category)}`}>
                          <p className="text-xs">{category}</p>
                        </Link>
                      </div>
                    </div>

      
                    <div className="flex py-1 group-hover:bg-light_grey group-hover:text-gray-900">
                      <div className="w-3/12 text-xs py-1 px-1">
                        {page.tag.map((tag) => (
                          <Link key={tag} to={`/blog/tag/${kebabCase(tag)}`} className="inline-block text-gray-600 text-xxs hover:text-highlight_2 mr-1"><Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={tag} searchWords={this.state.query.split()} /></Link>
                        ))}                       
                      </div>
                      <div className="w-9/12">
                        {/* borderLeft: `solid 1px ${category == "Articles" ? "#ff5e5e" : [category == "Events" ? "#f3f218" : [category == "News" ? "#00aeef" : "#99f318"]]}` */}
                        <h1 className="text-xs xl:text-med px-2 py-1 leading-4 xl:leading-6 border-l-1 border-gray-300" style={{ borderWidth: "20%" }}><Highlighter highlightClassName="text-red-600 bg-transparent" textToHighlight={description} searchWords={this.state.query.split()} /></h1>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
            <div className="text-center py-2 bg-gray-800 text-white font-semibold hover:bg-white hover:text-highlight_2 border-t-1 cursor-pointer" onClick={ () => {navigate("/search", {state: {searchWord: this.state.query}} )} }>Full search result</div>
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
      <div className={`${this.props.classNames} mt-12 2xl:mt-20 relative text-gray-600 w-full text-center`} >
        <div className="inline-block focus:outline-none text-gray-600 bg-white p-3 rounded-lg" style={{boxShadow: "#4e4e4e 0px 5px 30px -20px"}}>
          <FiSearch className="inline-block text-center text-3xl -mt-1" />
          <input id="homeSearch" onChange={this.search} onInput={this.search} className="search__input py-1 pl-4 text-lg focus:outline-none pr-5 text-gray-600" style={{minWidth: "27vw"}} type="text" name="search" placeholder="What are you looking for?" />
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
    if (this.state.query.length > 1) {
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