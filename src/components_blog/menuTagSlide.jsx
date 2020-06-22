import React, {useState} from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import kebabCase from "lodash.kebabcase"
import { FaTags} from "react-icons/fa"
import {FiSearch} from "react-icons/fi"
//import { slide as Menu } from 'react-burger-menu'
import { IoMdClose } from "react-icons/io"

const menuTagSlide = ({ pageContext }) => {
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
  
		<div className="xl:w-1/4 2xl:w-1/5 px-5 py-1 xl:py-3 text-gray-100 shadow-2xl text-sm fixed top-0 right-0 min-h-100 hidden xl:block flex flex-row border-l-2 border-gray-700 transition duration-500" 
      style={{fontFamily: "TUoS Blake", backgroundColor: "rgba(0,0,0,0.85)", transform: isOpen ? "translateX(0%)" : "translateX(101%)"}}
    >
      <div onClick={() => toggleisOpen(!isOpen)} className='absolute left-0 min-h-100 -ml-10 font-bold cursor-pointer flex flex-row items-center transition duration-500 delay-500' style={{transform: 'translateY(-5%)', fontFamily: 'TUoS Blake'}}>
        <div className={`${isOpen ? `hidden` : `block`} px-3 py-4 hover:bg-highlight_2 bg-gray-700 transition duration-500`}>T<br />A<br />G</div>
        <div className={`${isOpen ? `block` : `hidden`} px-3 py-4 bg-highlight_2 hover:bg-gray-700 transition duration-500 font-bold`}><IoMdClose /></div>
      </div>
      <div className="overflow-hidden lg:py-2 xl:py-6">
        <div>
          <h1 className="inline-block text-2xl pb-2 xl:pb-5 font-semibold mr-4"><FaTags style={{display: "inline-block"}} /> {location.href.includes("/blog/tag/") ? <Link to="/blog/#read">ALL</Link> : "Tags"}</h1>
          <div className="inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-6 xl:ml-2 mb-4">
            <FiSearch className="inline-block text-center text-xl -mt-2" />
            <input id="tagSearch" onChange={handleChange}  className="search__input py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600" style={{minWidth: "5vw"}} type="text" name="search" placeholder="Search for tags" />
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

export default menuTagSlide

menuTagSlide.propTypes = {
  pageContext: PropTypes.any,
}