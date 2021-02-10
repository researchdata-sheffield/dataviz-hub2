import React, { Component } from 'react'
import { navigate, Link } from 'gatsby'
import PropTypes from "prop-types"
import {FiSearch} from "react-icons/fi"
import Highlighter from 'react-highlight-words';
import Slide from 'react-reveal/Slide'
import ReactTooltip from "react-tooltip"



// Search component
class Search_Home extends Component {
  state = {
    query: '',
    results: [],
  }
  

  render() {
    const quickLink = "text-gray-800 hover:underline"

    const ResultList = () => {
      if (this.state.results.length > 0 && this.state.query.length > 0 ) {
        
        return (
          <div className="text-left overflow-auto max-h-50 xl:max-h-55 mx-auto ipadp:max-w-25 2xl:max-w-30 border-1 border-gray-200 shadow-2xl noScrollBar">
            {this.state.results.slice(0,5).map((page, i) => {

              return( 
                <div className="text-gray-800 group border-b-1 bg-white border-gray-200 hover:bg-gray-200" key={i}>
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
              <div 
                className="text-center py-2 bg-gray-800 text-white font-semibold hover:bg-white hover:text-highlight_2 border-t-1 cursor-pointer" 
                onClick={ () => {navigate("/search", {state: {searchWord: this.state.query}} )} }
              >
                {this.state.results.length - 6} more results
              </div>
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
      <div className={`${this.props.classNames} relative text-gray-900 w-full text-center`} >
        <div className="inline-block text-gray-700 bg-white p-3 rounded-lg" style={{boxShadow: "#6d6d6d 0px 5px 25px -16px"}}>
          <FiSearch className="inline-block text-center text-3xl -mt-1" />
          <input id="homeSearch" onChange={this.search} onInput={this.search} autoComplete="off" className="search__input py-1 pl-4 text-lg focus:outline-none pr-5 text-gray-700" style={{minWidth: "21vw"}} type="text" name="search" placeholder="What are you looking for?" />
        </div>
        <div className="absolute z-10 w-full" style={{ transform: 'translate(-50%, 0%)', left: '50%' }}>
          <ResultList />
        </div>
        <Slide left>
          <div className="hidden md:flex justify-center pt-6 xl:pt-8 z-10 w-full">
            <div className="w-1/7 mr-24 text-left">
              <div className="mb-1 font-semibold text-xs xl:text-base 2xl:text-lg">Dataviz.Shef</div>
                <ul className="list-reset leading-normal text-xs xl:text-sm 2xl:text-base text-left">
                  <li><Link className={quickLink} to='/#explore' data-tip="#Data and visualisation">Data visualisation</Link></li>
                  <li><Link className={quickLink} to='/#learning_path' data-tip="#Get started">Learning path</Link></li>
                  <li><Link className={quickLink} to='/#home_community' data-tip="#Community">Community</Link></li>
                  <li><Link className={quickLink} to='/#home_showcase' data-tip="#Showcase">Showcase</Link></li>
                  <li><Link className={quickLink} to='/#collaboration' data-tip="#collaboration">Collaboration</Link></li>
                  <li><Link className={quickLink} to='/blog'>Blog</Link></li>
                  <ReactTooltip />
                </ul>
            </div>
            
            <div className="w-1/7 text-left">
              <div className="mb-1 font-semibold text-xs xl:text-base 2xl:text-lg">Trending searches</div>
                <ul className="list-reset leading-normal text-xs xl:text-sm 2xl:text-base">
                  <li><a className={quickLink} onClick={ () => { navigate( "/search", {state: {searchWord: "Chart"}}) }} href="javascript:void(0)">Chart</a></li>
                  <li><a className={quickLink} onClick={ () => { navigate( "/search", {state: {searchWord: "Colour"}}) }} href="javascript:void(0)">Colour</a></li>
                  <li><a className={quickLink} onClick={ () => { navigate( "/search", {state: {searchWord: "Python"}}) }} href="javascript:void(0)">Python</a></li>
                  <li><a className={quickLink} onClick={ () => { navigate( "/search", {state: {searchWord: "Statistics"}}) }} href="javascript:void(0)">Statistics</a></li>
                </ul>
            </div>
          </div>
        </Slide>
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