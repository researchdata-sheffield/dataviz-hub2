import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";
import { FaTags, FaAngleDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useLocation } from "@gatsbyjs/reach-router";

const MenuTag = ({ pageContext, handleTagMenu, tagMenu }) => {
  const [filterTag, setfilterTag] = useState(pageContext.allTags);

  let { href } = useLocation();
  if (!href) href = "";

  function searchTag(e) {
    // on input, show tag menu
    if (tagMenu === false) handleTagMenu();

    let searchWord = e.target.value.toLowerCase();
    let searchTagList = pageContext.allTags.filter(function (tag) {
      return tag.toLowerCase().indexOf(searchWord) != -1; // returns true or false
    });
    setfilterTag(searchTagList);
  }

  return (
    <div
      id="tagMenu"
      className="w-full px-5 py-1 xl:py-2 text-gray-100 shadow-lg text-sm xl:hidden relative z-10 bg-white"
    >
      <div className="overflow-hidden pt-1 pb-2">
        <div>
          <h1 className="inline-block text-2xl font-semibold mr-4 text-gray-900">
            <FaTags style={{ display: "inline-block" }} />{" "}
            {href.includes("/blog/tag/") ? (
              <Link to="/blog/#read">ALL</Link>
            ) : (
              "Tags"
            )}
          </h1>
          <div className="inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-2">
            <FiSearch className="inline-block text-center text-xl -mt-2" />
            <input
              id="tagSearch"
              onChange={searchTag}
              className="py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600"
              style={{ maxWidth: "40vw" }}
              type="text"
              name="search"
              placeholder="Search for tags"
            />
          </div>
        </div>
        {/* tag menu */}
        <div
          className={`${tagMenu ? `` : `hidden`} pt-4`}
          aria-label="Tag menu results"
        >
          {filterTag.map((tag) => (
            <Link
              key={tag}
              activeStyle={{ color: "white", backgroundColor: "#00aeef" }}
              partiallyActive={true}
              to={`/blog/tag/${kebabCase(tag)}`}
              className="inline-block hover:bg-brand-blue hover:text-white py-1 px-2 m-1 bg-gray-50 text-gray-700 rounded-full 2xl:text-sm font-sans font-semibold"
            >
              {tag} ({pageContext.countTags[`${tag}`]})
            </Link>
          ))}
        </div>
      </div>
      {/* arrow button */}
      <button
        aria-label={`${tagMenu ? "Collapse" : "Open"} tag menu`}
        onClick={() => handleTagMenu()}
        className="text-gray-900 flex justify-center text-2xl absolute top-0 right-0 mr-4 mt-4"
      >
        <FaAngleDown
          style={{
            transform: tagMenu ? "rotate(180deg)" : "",
            transition: "all .5s ease"
          }}
        />
      </button>
    </div>
  );
};

export default MenuTag;

MenuTag.propTypes = {
  pageContext: PropTypes.any,
  handleTagMenu: PropTypes.func,
  tagMenu: PropTypes.bool
};
