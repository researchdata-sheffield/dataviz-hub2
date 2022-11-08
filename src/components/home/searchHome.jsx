import React, { Component } from "react";
import { navigate, Link } from "gatsby";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import Highlighter from "react-highlight-words";
import ReactTooltip from "react-tooltip";

// Search component
class SearchHome extends Component {
  state = {
    query: "",
    results: []
  };

  render() {
    const quickLink = "text-gray-700 hover:underline";

    const ResultList = () => {
      if (this.state.results.length > 0 && this.state.query.length > 0) {
        return (
          <div className="text-left overflow-auto max-h-50 xl:max-h-55 mx-auto lg:max-w-25 2xl:max-w-30 border-1 border-gray-200 shadow-2xl noScrollBar">
            {this.state.results.slice(0, 5).map((page, i) => {
              return (
                <div
                  className="text-gray-800 group border-b-1 bg-white border-gray-200 hover:bg-gray-200"
                  key={i}
                >
                  <a
                    href={`${page.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex self-center items-center justify-end">
                      <div className="w-full">
                        <h1 className="font-bold text-sm xl:text-lg w-full px-3 py-3 text-gray-900">
                          <Highlighter
                            highlightClassName="text-blue-500 bg-transparent"
                            textToHighlight={page.title}
                            searchWords={this.state.query.split()}
                          />
                        </h1>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
            {this.state.results.length > 6 ? (
              <div
                className="text-center py-2 bg-gray-800 text-white font-semibold hover:bg-white hover:text-brand-blue border-t-1 cursor-pointer"
                onClick={() => {
                  navigate("/search", {
                    state: { searchWord: this.state.query }
                  });
                }}
              >
                {this.state.results.length - 6} more results
              </div>
            ) : (
              <div className="text-center py-2 bg-gray-800 text-white font-semibold border-t-1">
                End of results
              </div>
            )}
          </div>
        );
      } else if (this.state.query.length > 0) {
        return "No results for " + this.state.query;
      }
      // else if (this.state.query.length > 0) {
      //   return 'Please insert at least 3 characters'
      // }
      else {
        return "";
      }
    };

    return (
      <div
        className={`${
          this.props.classNames || ""
        } w-full relative text-gray-900 text-center`}
      >
        <div
          id="searchBox"
          className="relative group inline-block text-gray-700 bg-white p-3 rounded-sm border-1 border-white hover:border-gray-400 transition duration-300"
          style={{ boxShadow: "rgb(238, 238, 238) 0px 5px 15px" }}
        >
          <FiSearch className="inline-block text-center text-3xl -mt-1" />
          <input
            id="homeSearch"
            onChange={this.search}
            onInput={this.search}
            autoComplete="off"
            className="search__input py-1 pl-4 text-lg focus:outline-none pr-5 text-gray-700"
            style={{ minWidth: "21vw" }}
            type="text"
            name="search"
            placeholder="What are you looking for?"
          />
          <div
            id="searchResult"
            className="absolute z-10 w-full hidden group-hover:block mt-3"
            style={{ transform: "translate(-50%, 0%)", left: "50%" }}
          >
            <ResultList />
          </div>
        </div>

        <div className="hidden md:flex justify-evenly pt-5 2xl:pt-8 z-10 w-full">
          <div className="w-2/7 text-left">
            <div className="mb-1 font-semibold text-xs 2xl:text-base text-gray-800">
              Dataviz.Shef
            </div>
            <ul className="list-reset leading-normal text-xs 2xl:text-sm text-left">
              <li>
                <Link
                  className={quickLink}
                  to="/changelog"
                  data-tip="#Changelog of Dataviz.Shef"
                >
                  What&apos;s new?
                </Link>
              </li>
              <li>
                <Link
                  className={quickLink}
                  to="/#explore"
                  data-tip="#What is Data visualisation"
                >
                  Data visualisation
                </Link>
              </li>
              <li>
                <Link
                  className={quickLink}
                  to="/#learning-path"
                  data-tip="#Get started"
                >
                  Learning path
                </Link>
              </li>
              <li>
                <Link
                  className={quickLink}
                  to="/#home-community"
                  data-tip="#Community"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className={quickLink}
                  to="/#home_showcase"
                  data-tip="#ORDA Showcase"
                >
                  Showcase
                </Link>
              </li>
              <li>
                <Link className={quickLink} data-tip="#Blog" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={quickLink}
                  data-tip="#InfoVis - The latest from TUoS"
                  to="/visualisation"
                >
                  Visualisation
                </Link>
              </li>
              <ReactTooltip
                border={true}
                borderColor="#ececec"
                backgroundColor="white"
                textColor="black"
              />
            </ul>
          </div>

          <div className="w-2/7 text-left">
            <div className="mb-1 font-semibold text-xs 2xl:text-base text-gray-800">
              Featured
            </div>
            <ul className="list-reset leading-normal text-xs 2xl:text-sm">
              {["Chart", "Colour", "Visualisation", "Docs", "R"].map((word) => (
                <li key={`search-word-${word}`}>
                  <a
                    className={quickLink}
                    onClick={() => {
                      navigate("/search", { state: { searchWord: word } });
                    }}
                    href="#"
                  >
                    {word}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  getSearchResults(query) {
    let index = window.__FLEXSEARCH__.en.index;
    let store = window.__FLEXSEARCH__.en.store;
    if (!query || !index) {
      return [];
    } else {
      let results = [];
      // search the indexed fields
      Object.keys(index).forEach((idx) => {
        results.push(...index[idx].values.search(query)); // more search options at https://github.com/nextapps-de/flexsearch#index.search
      });

      // find the unique ids of the nodes
      results = Array.from(new Set(results));

      // return the corresponding nodes in the store
      let nodes = store
        .filter((node) => (results.includes(node.id) ? node : null))
        .map((node) => node.node)
        .sort((a, b) => b.date.localeCompare(a.date));

      if (process.env.NODE_ENV === "production") {
        return nodes.filter((item) => item.published !== false);
      }

      return nodes;
    }
  }

  search = (event) => {
    const query = event.target.value;
    if (this.state.query.length > -1) {
      const results = this.getSearchResults(query);
      this.setState({ results: results, query: query });
    } else {
      this.setState({ results: [], query: query });
    }
  };
}

export default SearchHome;

SearchHome.propTypes = {
  classNames: PropTypes.any
};
