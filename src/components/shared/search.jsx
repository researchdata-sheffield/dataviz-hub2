import React, { Component } from "react";
import { graphql, useStaticQuery, withPrefix } from "gatsby";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import bg from "../../images/search/search.png";
import { getImageSource, shortenText } from "../../utils/shared";
import { SearchItem, ItemThumb } from "../style/search";
import { CatBtn, TagBtn } from "../style/styleComponent";
import kebabCase from "lodash.kebabcase";

// Search component
class Search extends Component {
  state = {
    query: "",
    results: []
  };

  componentDidMount = () => {
    setTimeout(() => {
      if (this.props.location.state && this.props.location.state.searchWord) {
        let queryHome = this.props.location.state.searchWord;
        let input = document.getElementById("pageSearch");
        this.setState({ query: queryHome });
        input.setAttribute("value", queryHome);
        this.searchFunction(queryHome);
      }
    }, 100);
  };

  render() {
    const ResultList = () => {
      const data = useStaticQuery(graphql`
        query postList {
          allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { ne: false } } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  date(formatString: "ddd, DD MMM YYYY")
                  thumbnail {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
          }
        }
      `);
      // query length changed from 2 to 0
      if (this.state.results.length > 0 && this.state.query.length > 0) {
        return (
          <div>
            <div className="bg-gray-50 text-gray-900 py-2">
              There are {this.state.results.length} items matching your search.
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                paddingTop: "50px",
                paddingBottom: "100px",
                maxWidth: "1400px",
                margin: "auto",
                color: "#000"
              }}
            >
              {this.state.results.map((item, i) => {
                let imagesrc;
                {
                  data.allMdx.edges.map(({ node }) => {
                    if (item.id == node.id) {
                      imagesrc = getImageSource(node, true);
                    }
                  });
                }

                let title = shortenText(item.title, 8);
                let description = shortenText(item.description, 30);
                const dateOptions = {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                };
                let itemDate = new Date(item.date);
                itemDate = itemDate.toLocaleDateString("en-GB", dateOptions);

                return (
                  <a
                    href={`${withPrefix(item.url)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                  >
                    <SearchItem>
                      <ItemThumb
                        style={{
                          width: "100%",
                          backgroundImage: `url(${imagesrc})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          borderRadius: "10px",
                          minHeight: "220px",
                          paddingBottom: `${
                            item.type == "visualisation" && "100%"
                          }`,
                          border: "1px solid rgb(244, 244, 244)"
                        }}
                      ></ItemThumb>
                      <div style={{ margin: "10px auto" }}>
                        <CatBtn
                          style={{
                            fontSize: ".68rem",
                            background: "lightgray",
                            borderColor: "lightgray",
                            color: "#333",
                            fontWeight: "600"
                          }}
                          title={`Type: ${item.type}`}
                        >
                          {item.type ? item.type.toUpperCase() : "BLOG"}
                        </CatBtn>
                        {item.category &&
                          item.category.map((cat) => (
                            <TagBtn
                              style={{
                                fontSize: ".68rem"
                              }}
                              key={cat}
                              title={`Category: ${cat}`}
                              to={`/blog/category/${kebabCase(cat)}`}
                            >
                              {cat}
                            </TagBtn>
                          ))}
                        {item.tag &&
                          item.tag.map((currentTag) => (
                            <TagBtn
                              style={{
                                fontSize: ".68rem"
                              }}
                              key={currentTag}
                              title={`Tag: ${currentTag}`}
                              to={`/blog/tag/${kebabCase(currentTag)}`}
                            >
                              {currentTag}
                            </TagBtn>
                          ))}
                        <p
                          style={{
                            fontSize: ".85rem",
                            marginTop: "10px"
                          }}
                        >
                          {itemDate}
                        </p>
                      </div>
                      <h1
                        style={{
                          fontWeight: "800",
                          fontSize: "1.5rem",
                          marginBottom: "15px",
                          color: "#242730"
                        }}
                      >
                        {title}
                      </h1>
                      <p
                        style={{
                          color: "#45464a"
                        }}
                      >
                        {description}
                      </p>
                    </SearchItem>
                  </a>
                );
              })}
            </div>
          </div>
        );
      } else if (this.state.query.length > 0) {
        return (
          <div className="bg-white text-gray-900 py-2">
            No results for {this.state.query}
          </div>
        );
      } else {
        return (
          <div className="bg-gray-50 text-gray-700 py-2">
            Type something in the search box ...
          </div>
        );
      }
    };

    return (
      <div className={`${this.props.classNames} relative w-full text-center`}>
        <div
          className="pt-40 pb-10 bg-white"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            minHeight: "600px"
          }}
        >
          <Zoom top duration={1000} cascade>
            <p className="text-2xl text-brand-black mb-4 font-bold">
              What are you looking for?
            </p>
          </Zoom>
          <Fade bottom duration={1500}>
            <div className="inline-block focus:outline-none text-gray-600 bg-white shadow p-3 rounded-lg">
              <FiSearch className="inline-block text-center text-3xl -mt-1" />
              <input
                id="pageSearch"
                onChange={this.search}
                onInput={this.search}
                autoComplete="off"
                className="search__input py-0 pl-4 text-lg focus:outline-none pr-5 text-gray-700"
                style={{ minWidth: "25vw" }}
                type="text"
                name="search"
                placeholder="Search title, description, date..."
              />
            </div>
          </Fade>
        </div>
        <div className="search__list">
          <ResultList />
        </div>
      </div>
    );
  }

  getSearchResults(query) {
    //index - a flexsearch index instance (variables set in gatsby-config)
    //store - object that stores the indexed gatsby nodes where the id of each node corresponds to the id the filter, according with flexsearch.js best practices (https://github.com/nextapps-de/flexsearch#best-practices)).

    let index = window.__FLEXSEARCH__.en.index;
    let store = window.__FLEXSEARCH__.en.store;

    if (!query || !index) {
      return [];
    } else {
      let results = [];
      // search the indexed fields
      Object.keys(index).forEach((idx) => {
        results.push(
          ...index[idx].values.search({
            query: query,
            suggest: true
          })
        );
      });
      // find the unique ids of the nodes
      results = Array.from(new Set(results));

      // return the corresponding nodes in the store
      return store
        .filter((node) => (results.includes(node.id) ? node : null))
        .map((node) => node.node)
        .sort((a, b) => b.date.localeCompare(a.date));
    }
  }

  search = (event) => {
    const query = event.target.value;
    this.searchFunction(query);
  };

  searchFunction = (query) => {
    if (this.state.query.length > -1) {
      const results = this.getSearchResults(query);
      this.setState({ results: results, query: query });
    } else {
      this.setState({ results: [], query: query });
    }
  };
}

export default Search;

Search.propTypes = {
  classNames: PropTypes.any,
  data: PropTypes.any,
  location: PropTypes.any
};
