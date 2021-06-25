import React, {useState} from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import { FaTags} from "react-icons/fa"
import {FiSearch} from "react-icons/fi"
import { IoMdClose } from "react-icons/io"
import { useLocation } from "@gatsbyjs/reach-router"

const menuTagSlide = ({ pageContext, handleTagMenu, tagMenu }) => {
  const [filterTag, setfilterTag] = useState(pageContext.allTags);
  var { href } = useLocation();
  if(!href) href = "";

  function handleChange(e) {
    // on input, show tag menu
    if(tagMenu === false) handleTagMenu();

    let searchWord = e.target.value.toLowerCase();
    let searchTagList = pageContext.allTags.filter(function(tag) {
      return tag.toLowerCase().indexOf(searchWord) != -1; // returns true or false
    });
    setfilterTag(searchTagList)
  }


  return (
  
		<div id="slideTagMenu" className="xl:w-1/4 2xl:w-1/5 px-5 py-1 xl:py-3 hideScrollBar text-gray-100 shadow-lg text-sm fixed top-0 right-0 min-h-100 hidden xl:flex flex-row border-l-2 border-white transition duration-500 z-50 bg-white" 
      style={ tagMenu ? {transform: "translateX(0%)", height: "100vh", overflowY: "scroll"} : {transform: "translateX(102%)"} }
    > 
      <div onClick={() => handleTagMenu()} className={`${tagMenu ? 'hidden' : 'block'} absolute left-0 min-h-100 -ml-10 font-bold cursor-pointer flex flex-row items-center transition duration-500 delay-500`} style={{transform: 'translateY(-5%)'}} >
        <div className="px-3 py-4 hover:bg-brand-blue bg-gray-900 transition duration-500 shadow-xl" tabIndex="0" title="Open tag menu">T<br />A<br />G</div>
      </div>
      <div onClick={() => handleTagMenu()} className={`${tagMenu ? 'block' : 'hidden'} absolute right-0 top-0 m-2 cursor-pointer`}>
        <div className="px-3 py-3 bg-brand-blue hover:bg-gray-900 transition duration-500 font-bold" tabIndex="0" title="Close the menu"><IoMdClose /></div>
      </div>


      {/* main tag menu */}
      <div className="lg:py-2 xl:py-6">
        <div>
          <h1 className="inline-block text-2xl pb-2 xl:pb-5 font-semibold mr-4 text-gray-900"><FaTags style={{display: "inline-block"}} /> {href.includes("/blog/tag/") ? <Link to="/blog/#read">ALL</Link> : "Tags"}</h1>
          <div className="inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg mb-4 w-full">
            <FiSearch className="inline-block text-center text-xl -mt-2" />
            <input id="tagSearchSlide" onChange={handleChange}  className="search__input py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600" style={{minWidth: "5vw"}} type="text" name="search" placeholder="Search for tags" />
          </div>
        </div>

        {filterTag.map((tag) => (
          <Link key={tag} activeStyle={{ color: "white", backgroundColor: "#00aeef" }} partiallyActive={true} to={`/blog/tag/${kebabCase(tag)}`} 
            className="inline-block hover:bg-brand-blue hover:text-white py-1 px-2 m-1 bg-gray-50 text-gray-700 rounded-full 2xl:text-sm font-sans font-semibold"
          >
            {tag} ({pageContext.countTags[`${tag}`]})
          </Link>
        ))} 
        <div onClick={() => handleTagMenu()} className={`${tagMenu ? 'block' : 'hidden'} cursor-pointer my-5 px-3 py-2 bg-brand-blue hover:bg-gray-900 transition duration-500 font-bold text-center`} tabIndex="0">ClOSE</div>
      </div>
    </div>
    
  )

}

export default menuTagSlide

menuTagSlide.propTypes = {
  pageContext: PropTypes.any,
}