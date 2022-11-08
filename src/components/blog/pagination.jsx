import React from "react";
import PropTypes from "prop-types";
import { Link, navigate } from "gatsby";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Pagination = ({ numPages, currentPage, pageType }) => {
  const paginationButton =
    "flex items-center bg-white hover:bg-brand-blue text-gray-800 font-semibold py-2 px-12 shadow transition duration-500";

  /* pageType :
    1. `/blog`
    2. `/blog/category/${kebabCase(cat)}`
    3. `/blog/tag/${kebabCase(tag)}`
  */
  function handleChange(e) {
    const page_no = e.target.value;
    if (page_no != 1) {
      navigate(`${pageType}/page/${page_no}`);
    } else {
      navigate(`${pageType}`);
    }
  }

  function handlePage(type) {
    if (numPages === 1) return `${pageType}/page/${currentPage}`;
    if (type === "Newer") {
      return currentPage === 1 || currentPage === 2
        ? `${pageType}`
        : `${pageType}/page/${currentPage - 1}`;
    }
    if (type === "Older") {
      return currentPage === numPages
        ? `${pageType}/page/${currentPage}`
        : `${pageType}/page/${currentPage + 1}`;
    }
  }

  return (
    <div className="flex flex-wrap justify-between mt-5 mb-10 lg:mb-24">
      {/* Pagination buttons */}
      <div className="flex flex-wrap items-center mx-auto">
        <Link
          to={handlePage("Newer")}
          className={
            `${
              numPages === 1 ? `hidden` : [currentPage === 1 ? `hidden` : ``]
            } mr-4` + paginationButton
          }
          aria-label="Newer posts"
        >
          <FaArrowAltCircleLeft className="mr-3 inline-block" /> Newer posts
        </Link>
        <Link
          to={handlePage("Older")}
          className={
            `${
              numPages === 1
                ? `hidden`
                : [currentPage === numPages ? `hidden` : ``]
            } ` + paginationButton
          }
          aria-label="Older posts"
        >
          Older posts <FaArrowAltCircleRight className="ml-3" />
        </Link>
      </div>
      {/* Pagination dropdown selector */}
      <div className="flex justify-end px-16 items-center text-base font-semibold">
        <p>Showing page</p>
        <div className="inline-block relative w-16 mx-2">
          <select
            value={currentPage}
            onChange={handleChange}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-3 shadow leading-tight focus:outline-none"
            aria-label="Select the target page"
          >
            {Array.from({ length: numPages }).map((item, i) => {
              const index = i + 1;
              return <option key={index}>{index}</option>;
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="https://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <p>of {numPages}</p>
      </div>
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  numPages: PropTypes.any,
  currentPage: PropTypes.any,
  pageType: PropTypes.any
};
