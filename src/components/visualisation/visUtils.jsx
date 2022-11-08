import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTrackScrollPosition } from "../../utils/hooks/trackScrollPosition";
import { VisTagMenuBtn, VisFooterBtn } from "../style/visStyle";
import { FaTags } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import Footer from "../shared/footer";
import WordCloud from "./wordCloud";

/**
 * This component has the following functions:
 * 1. Render visualisation tag menu
 * 2. Button for toggle footer
 * 3. Button for toggle visualisation tag menu
 * 4.
 */
const VisUtils = React.memo(({ tagMenu, handleTagMenu, tags }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterTag, setfilterTag] = useState(tags);
  const [footer, setFooter] = useState(false);
  const footerIconStyle =
    "text-2xl group-hover:scale-110 transition duration-500";

  useTrackScrollPosition("vis-tag-button");
  useTrackScrollPosition("vis-footer-button");

  function searchTag() {
    let searchWord = searchValue.toLowerCase();
    let searchTagList = tags.filter((tag) => {
      return tag.name.toLowerCase().indexOf(searchWord) != -1; // returns true or false
    });
    setfilterTag(searchTagList);
  }

  // Only search tags if the user stop typing
  useEffect(() => {
    const timeoutTyping = setTimeout(() => searchTag(), 1000);
    return () => {
      clearTimeout(timeoutTyping);
    };
  }, [searchValue]);

  return (
    <div className="relative">
      <VisTagMenuBtn
        onClick={() => handleTagMenu()}
        tabindex="100"
        id="vis-tag-button"
        className="group"
        title="Tag Menu"
      >
        <FaTags className="text-white text-xl group-hover:scale-125 transition duration-500" />
      </VisTagMenuBtn>

      <VisFooterBtn
        onClick={() => setFooter(!footer)}
        tabindex="101"
        id="vis-footer-button"
        className={`group ${
          footer
            ? "bg-brand-blue text-brand-black"
            : "bg-brand-black text-white"
        }`}
        title="Footer"
      >
        {!footer && <ImMenu4 className={footerIconStyle} />}
        {footer && <ImMenu3 className={footerIconStyle} />}
      </VisFooterBtn>

      {/* Tag menu */}
      <div
        id="vis-tag-menu"
        className={`${
          tagMenu ? "visible" : "invisible translate-x-full"
        } bg-black transform`}
        style={{
          zIndex: "1000",
          maxWidth: "450px",
          transition: ".5s ease",
          width: "100%",
          height: "100%",
          top: 0,
          right: 0,
          position: "fixed"
        }}
      >
        <button
          onClick={() => handleTagMenu()}
          className="text-gray-300 hover:text-brand-blue text-lg"
          style={{
            border: "1px solid transparent",
            backgroundColor: "rgb(25, 25, 25)",
            transition: ".3s ease",
            position: "absolute",
            top: 0,
            right: 0,
            margin: "1.5rem",
            display: "flex",
            alignItems: "center",
            padding: ".3rem",
            borderRadius: ".375rem"
          }}
        >
          <MdClose className="text-xl mr-1" />
          CLOSE
        </button>
        <div className="w-full m-6">
          <div className="inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-2">
            <FiSearch className="inline-block text-center text-xl -mt-2" />
            <input
              id="tagSearch"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              className="py-2 pl-2 text-base focus:outline-none pr-3 text-gray-600"
              style={{ maxWidth: "50vw" }}
              type="text"
              name="search"
              placeholder="Search for tags"
            />
          </div>
        </div>
        <div className="w-full text-center">
          {filterTag.length == 0 && (
            <h1 className="text-gray-300">No results.</h1>
          )}
        </div>
        <WordCloud
          width="100%"
          height="auto"
          words={filterTag}
          menu="Tag menu"
          minFontSize={1.2}
          maxFontSize={2.8}
          padding="1px 3px"
          wordStyle={{ whiteSpace: "normal" }}
        />
      </div>

      <Footer
        id="vis-footer"
        className={`${footer ? "fixed bottom-0" : "hidden"}`}
      />
    </div>
  );
});

export default VisUtils;

VisUtils.propTypes = {
  tagMenu: PropTypes.any,
  handleTagMenu: PropTypes.func,
  tags: PropTypes.array
};

VisUtils.displayName = "VisUtils";
