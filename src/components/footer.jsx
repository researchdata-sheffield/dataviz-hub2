import { Link } from "gatsby"
import React from "react"
import university_logo from "../images/TUOSlogo.png"
import { FaGoogle, FaSlack } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { A } from "../components_style/blogPostStyle"

const Footer = () => {
  
  return (
  <div className="bg-black px-8 py-8 lg:px-12 lg:py-10 text-sm relative z-10">
    <div className="sm:flex mb-4 text-gray-500">
      <div className="sm:w-2/12 h-auto">
          <div className="mb-2"><Link className="text-gray-100 font-semibold text-md" to="/">Dataviz.Shef</Link></div>
            <ul className="list-reset leading-normal">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link className="hover:text-highlight_2" to="/community">Community</Link></li>
              <li><A a href="https://orda.shef.ac.uk/visualisations/">Showcase</A></li>
              <li><Link to="/about">About</Link></li>
              <li><A a href="mailto:rdm@sheffield.ac.uk">Contact us</A></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
      </div>
      <div className="sm:w-3/12 h-auto sm:mt-0 mt-8">
          <div className="text-gray-100 text-md mb-2 font-semibold"><A a href="https://orda.shef.ac.uk">Online Research Data</A></div>
            <ul className="list-reset leading-normal">
              <li><A a href="https://orda.shef.ac.uk/articles/list/desc/published_date/all">Datasets</A></li>
              <li><A a href="https://orda.shef.ac.uk/#orda-fac">Faculties</A></li>
              <li><A a href="https://figshare.shef.ac.uk/collections/University_of_Sheffield_visualisation_showcase/3879643">Visualised datasets</A></li>
            </ul>

        <div className="mb-2 mt-4"><A a className="text-gray-100 text-md font-semibold" href="https://orda.shef.ac.uk/#orda-fac">The University of Sheffield</A></div>
          <ul className="list-reset leading-normal">
          <li><A a href="http://sheffield.ac.uk/library/rdm">Research Data Management support</A></li>
              <li><A a href="https://www.sheffield.ac.uk/it-services">IT Services</A></li>
              <li><A a href="http://rse.shef.ac.uk/">Research Software Engineering</A></li>
          </ul>

      </div>
      <div className="sm:w-2/12 h-auto sm:mt-0 mt-8">
                <div className="text-gray-100 text-md mb-2 font-semibold">Collaboration</div>
          <ul className="list-reset leading-normal">
            <li><A a href="https://github.com/researchdata-sheffield/dataviz-hub2">Github repository</A></li>
          </ul>
      </div>
      
      <div className="sm:w-5/12 sm:flex sm:mt-0 mt-8 h-auto justify-center flex-wrap">
        <div className="sm:w-2/3 text-gray-100 text-lg mb-2 pr-6">
          <div className="font-semibold text-highlight_2">Data Visualisation Hub </div>
          <div className="text-gray-100 text-lg mb-2 font-medium">The University of Sheffield.</div>
          <p className="text-gray-500 leading-normal text-sm">
            To help our researchers make the most of their data and take advantage of tools, we have been working on Dataviz.Shef, a multi-pronged initiative to provide tools, training and build a community around interactive data visualisation at TUoS.</p>
{/*           <div className="mt-4 flex">
              <input type="text" className="p-2 border border-gray-light round text-gray-dark text-sm h-auto" placeholder="Your email address"></input>
              <button className="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
          </div> */}
          
          
        </div>
          
        <div className="sm:w-1/3 pl-6">
          <A className="m-20" href="https://www.sheffield.ac.uk/"><img className="w-11/12" src={university_logo}></img></A>
          <div className="text-center justify-between w-11/12 text-gray-300">
            <button className="mx-2"><A a href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group"><FaGoogle /></A></button>
            <button className="mx-2"><A a href="https://join.slack.com/t/shef-dataviz/signup"><FaSlack /></A></button>
            <button className="mx-2"><A a href="mailto:rdm@sheffield.ac.uk"><MdEmail /></A></button>
          </div>
        </div>
        
      </div>
  </div>
  <p className="text-gray-500 leading-normal text-center text-sm pt-8"> © 2020  The University of Sheffield.</p>

</div>
  )



}

export default Footer
