import React, {useState} from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import { FaTags } from "react-icons/fa"
import {FiSearch} from "react-icons/fi"


const menuTag = ({ pageContext }) => {
  const [filterTag, setfilterTag] = useState(pageContext.tags);

  function handleChange(e) {
    let searchWord = e.target.value.toLowerCase();
    let searchTagList = pageContext.tags.filter(function(tag) {
      return tag.toLowerCase().indexOf(searchWord) != -1; // returns true or false
    });
    
    setfilterTag(searchTagList)

  }

  return (

		<div className="w-full xl:w-1/4 2xl:w-1/5 px-5 py-1 xl:py-3 text-gray-100 shadow-2xl bg-gray-900 text-sm" style={{fontFamily: "TUoS Blake"}}>
      <div className="sticky top-0 overflow-hidden lg:py-2 xl:py-6">
        <div>
          <h1 className="inline-block text-2xl pb-2 xl:pb-5 font-semibold mr-4"><FaTags style={{display: "inline-block"}} /> Tags</h1>
          <div className="inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-6 xl:ml-2 mb-4">
            <FiSearch className="inline-block text-center text-xl -mt-2" />
            <input id="tagSearch" onChange={handleChange}  className="search__input py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600" style={{minWidth: "5vw"}} type="text" name="search" placeholder="Search for tag" />
          </div>
        </div>

        {filterTag.map((tag) => (
            <Link key={tag} activeStyle={{ color: "white", backgroundColor: "#00aeef" }} partiallyActive={true} to={`/blog/tag/${kebabCase(tag)}`} 
            className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 m-1 bg-gray-100 text-gray-700 rounded-full 2xl:text-sm font-sans font-semibold">{tag} ({pageContext.countTags[`${tag}`]})
          </Link>
        ))} 
      </div>
    </div>
  )

}

export default menuTag

menuTag.propTypes = {
  pageContext: PropTypes.any,

}