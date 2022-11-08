import React from "react";
import PropTypes from "prop-types";
import ScrollTopBtn from "./scrollTop";
import Header from "./header";
import Footer from "./footer";
import logo from "../../images/UOSLogo_Primary_White_RGB.svg";

const Layout = (props) => {
  return (
    <div
      id="website"
      className="flex flex-col font-sans min-h-screen text-brand-black high-specificity"
    >
      <ScrollTopBtn />
      <div
        id="__loader"
        className="transition duration-1500 bg-brand-black w-full h-full fixed text-center flex flex-wrap content-center justify-center items-center"
        style={{ zIndex: "999" }}
      >
        <div className="w-full p-4">
          <img
            className="mx-auto"
            style={{ maxWidth: "400px" }}
            src={logo}
            alt="The University of Sheffield Logo"
          />
        </div>
        <span
          className="my-12 border-t-3 border-brand-blue"
          style={{ width: "120px", height: "1px" }}
        ></span>
        <div className="w-full text-center">
          <h1 className="text-white text-6xl font-extrabold">Dataviz.Shef</h1>
          <h3 className="text-gray-400 mt-5">Loading, please wait ...</h3>
        </div>
      </div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.any,
  props: PropTypes.any
};

export default Layout;
