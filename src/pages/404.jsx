import React from "react";
import SEO from "../components/shared/seo";
import Bg from "../images/404/moon.jpg";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <>
    <SEO
      title="404 Not found"
      keywords={[
        "the university of sheffield",
        "data visualisation",
        "data visualisation hub",
        "research",
        "404 - Not found"
      ]}
    />
    <div
      className="flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${Bg})`, minHeight: "650px" }}
    >
      <div
        className="text-white px-4"
        style={{ fontFamily: "Source Serif Pro" }}
      >
        <h1 className="text-5xl font-bold leading-tight">Page Not Found</h1>
        <p
          className="text-xl mt-3 text-gray-100"
          style={{ textShadow: "#000000 0px 0px 1px" }}
        >
          Oops! The page you are looking for has been removed or relocated.
        </p>
        <Link to="/search">
          <button className="mt-16 mr-10 bg-gray-300 hover:bg-brand-blue text-center hover:text-white text-gray-700 font-semibold py-2 px-5 border border-transparent shadow">
            Try search
          </button>
        </Link>
      </div>
    </div>
  </>
);

export default NotFoundPage;
