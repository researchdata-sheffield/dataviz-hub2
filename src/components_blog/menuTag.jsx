import React, {useState} from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import { FaTags,  FaAngleDown } from "react-icons/fa"
import {FiSearch} from "react-icons/fi"
//import { slide as Menu } from 'react-burger-menu'

const menuTag = ({ pageContext }) => {
  const [filterTag, setfilterTag] = useState(pageContext.tags);
  const [isOpen, toggleisOpen] = useState(false);

  function handleChange(e) {
    let searchWord = e.target.value.toLowerCase();
    let searchTagList = pageContext.tags.filter(function(tag) {
      return tag.toLowerCase().indexOf(searchWord) != -1; // returns true or false
    });
    setfilterTag(searchTagList)
  }


  return (
		<div className="w-full px-5 py-1 xl:py-2 text-gray-100 shadow-lg text-sm xl:hidden relative z-10 bg-white">
      <div className={`${isOpen ? `` : ``} overflow-hidden pt-1 pb-2`}>
        <div>
          <h1 className="inline-block text-2xl font-semibold mr-4 text-gray-900"><FaTags style={{display: "inline-block"}} /> {location.href.includes("/blog/tag/") ? <Link to="/blog/#read">ALL</Link> : "Tags"}</h1>
          <div className="inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-2">
            <FiSearch className="inline-block text-center text-xl -mt-2" />
            <input id="tagSearch" onChange={handleChange}  className="search__input py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600" style={{maxWidth: "40vw"}} type="text" name="search" placeholder="Search for tags" />
          </div>
        </div>
        {/* tag menu */}
        <div className={`${isOpen ? `` : `hidden`} pt-4`}>
          {filterTag.map((tag) => (
              <Link key={tag} activeStyle={{ color: "white", backgroundColor: "#00aeef" }} partiallyActive={true} to={`/blog/tag/${kebabCase(tag)}`} 
              className="inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 m-1 bg-gray-100 text-gray-700 rounded-full 2xl:text-sm font-sans font-semibold">{tag} ({pageContext.countTags[`${tag}`]})
            </Link>
          ))}
        </div>
      </div>
      {/* arrow button */}
      <div onClick={() => toggleisOpen(!isOpen)} className='text-gray-900 flex justify-center text-2xl absolute top-0 right-0 mr-4 mt-4'>
        <FaAngleDown className={` `} style={{transform: isOpen ? "rotate(180deg)" : "", transition: 'all .5s ease'}}  />
      </div>
    </div>
    
  )

}

export default menuTag

menuTag.propTypes = {
  pageContext: PropTypes.any,

}