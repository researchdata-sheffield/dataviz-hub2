import React from "react"
import PropTypes from "prop-types"
//import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import ScrollTopBtn from "./scrollTop"
import Header from "../shared/header"
import Footer from "../shared/footer"

const Layout = (props) => {

  return (
    <div id="website" className="flex flex-col font-sans min-h-screen text-gray-900 high-specificity">
      <ScrollTopBtn />
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.any,
  props: PropTypes.any
}

export default Layout


