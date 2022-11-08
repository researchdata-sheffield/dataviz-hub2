import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import kebabCase from "lodash.kebabcase";
import Flip from "react-reveal/Flip";

const menuCategory = ({ pageContext, handleTagMenu, tagMenu }) => {
  const buttonStyle =
    "bg-white text-gray-900 border-1 border-gray-100 py-2 px-3 mr-2 mt-2 rounded-sm text-sm transition duration-300 ease-in-out";
  const topTags = Object.entries(pageContext.countTags)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);

  return (
    <Flip cascade top delay={1000}>
      <div
        className="flex flex-wrap px-5 w-full mt-10"
        style={{ maxWidth: "650px" }}
        aria-label="List of categories and top tags"
      >
        {pageContext.categories.map((cat) => (
          <Link
            key={cat}
            to={`/blog/category/${kebabCase(cat)}`}
            activeStyle={{ backgroundColor: "rgb(154 219 232)" }}
            partiallyActive={true}
            className={`${buttonStyle} hover:bg-brand-blue hover:border-blue-300 font-semibold`}
          >
            {cat}
          </Link>
        ))}
        {topTags.map((tag) => (
          <Link
            key={tag[0]}
            to={`/blog/tag/${kebabCase(tag[0])}`}
            activeStyle={{ backgroundColor: "#ff79b4" }}
            partiallyActive={true}
            className={`${buttonStyle} hover:bg-brand-pink hover:border-pink-300`}
          >
            {tag[0]}
          </Link>
        ))}
        <button
          aria-label="Click to toggle the tag menu"
          title="Click to toggle the tag menu"
          onClick={() => handleTagMenu()}
          className={`${buttonStyle} hover:text-white hover:bg-brand-black hover:border-brand-black font-bold cursor-pointer`}
        >
          {tagMenu ? "CLOSE" : "MORE"}
        </button>
      </div>
    </Flip>
  );
};

export default menuCategory;

menuCategory.propTypes = {
  pageContext: PropTypes.any
};
