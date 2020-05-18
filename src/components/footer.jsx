import { Link } from "gatsby"
import React from "react"
import university_logo from "../images/TUOSlogo.png"
import { FaGoogle, FaSlack } from "react-icons/fa"

const Footer = () => {
  
  return (
  <div className="bg-black px-10 py-8 text-sm">
    <div className="sm:flex mb-4">
      <div className="sm:w-2/12 h-auto">
          <div className="mb-2"><Link className="text-gray-100 font-semibold text-md" to="/">Dataviz.Shef</Link></div>
            <ul className="list-reset leading-normal">
              <li><Link className="text-gray-500 hover:text-highlight_2" to="/blog">Blog</Link></li>
              <li><Link className="text-gray-500 hover:text-highlight_2" to="/events">Events</Link></li>
              <li><Link className="text-gray-500 hover:text-highlight_2" to="/community">Community</Link></li>
              <li><a className="text-gray-500 hover:text-highlight_2" href="https://orda.shef.ac.uk/visualisations/" target="_blank" rel="noopener noreferrer">Showcase</a></li>
              <li><Link className="text-gray-500 hover:text-highlight_2" to="/about">About</Link></li>
              <li><a className="text-gray-500 hover:text-highlight_2" href="mailto:rdm@sheffield.ac.uk" target="_blank" rel="noopener noreferrer">Contact us</a></li>
            </ul>
      </div>
      <div className="sm:w-3/12 h-auto sm:mt-0 mt-8">
          <div className="text-gray-100 text-md mb-2 font-semibold"><a href="https://orda.shef.ac.uk">Online Research Data</a></div>
            <ul className="list-reset leading-normal">
              <li><a className="text-gray-500 hover:text-highlight_2" href="https://orda.shef.ac.uk/articles/list/desc/published_date/all" target="_blank" rel="noopener noreferrer">Datasets</a></li>
              <li><a className="text-gray-500 hover:text-highlight_2" href="https://orda.shef.ac.uk/#orda-fac" target="_blank" rel="noopener noreferrer">Faculties</a></li>
              <li><a className="text-gray-500 hover:text-highlight_2" href="https://figshare.shef.ac.uk/collections/University_of_Sheffield_visualisation_showcase/3879643" target="_blank" rel="noopener noreferrer">Visualised datasets</a></li>
            </ul>

        <div className="mb-2 mt-4"><a className="text-gray-100 text-md font-semibold" href="https://orda.shef.ac.uk/#orda-fac" target="_blank" rel="noopener noreferrer">The University of Sheffield</a></div>
          <ul className="list-reset leading-normal">
          <li><a className="text-gray-500 hover:text-highlight_2" href="http://sheffield.ac.uk/library/rdm" target="_blank" rel="noopener noreferrer">Research Data Management support</a></li>
              <li><a className="text-gray-500 hover:text-highlight_2" href="https://www.sheffield.ac.uk/it-services" target="_blank" rel="noopener noreferrer">IT Services</a></li>
              <li><a className="text-gray-500 hover:text-highlight_2" href="http://rse.shef.ac.uk/" target="_blank" rel="noopener noreferrer">Research Software Engineering</a></li>
          </ul>

      </div>
      <div className="sm:w-2/12 h-auto sm:mt-0 mt-8">
                <div className="text-gray-100 text-md mb-2 font-semibold">Latest News</div>
          <ul className="list-reset leading-normal">
            <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
            <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
            <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
          </ul>
      </div>
      
      <div className="sm:w-5/12 sm:flex sm:mt-0 mt-8 h-auto justify-center flex-wrap">
        <div className="sm:w-2/3 text-gray-100 text-lg mb-2 pr-8">
          <div className="font-semibold text-highlight_2">Data Visualisation Hub </div>
          <div className="text-gray-100 text-lg mb-2 font-medium">The University of Sheffield.</div>
          <p className="text-gray-500 leading-normal text-sm">
            To help our researchers make the most of their data and take advantage of tools, we have been working on Dataviz.Shef, a multi-pronged initiative to provide tools, training and build a community around interactive data visualisation at TUoS.</p>
{/*           <div className="mt-4 flex">
              <input type="text" className="p-2 border border-gray-light round text-gray-dark text-sm h-auto" placeholder="Your email address"></input>
              <button className="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
          </div> */}
          
          
        </div>
          
        <div className="sm:w-1/3 pl-8">
          <a className="p-20" href="https://www.sheffield.ac.uk/" target="_blank" rel="noopener noreferrer"><img className="w-11/12" src={university_logo}></img></a>
          <div className="text-center justify-between w-11/12">
            <button className="mx-2 hover:text-highlight_2 text-gray-500"><a href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group" target="_blank" rel="noopener noreferrer"><FaGoogle /></a></button>
            <button className="mx-2 hover:text-highlight_2 text-gray-500 "><a href="https://join.slack.com/t/shef-dataviz/signup" target="_blank" rel="noopener noreferrer"><FaSlack /></a></button>
          </div>
        </div>
        
      </div>
  </div>
  <p className="text-gray-500 leading-normal text-center text-sm pt-8"> © 2020  The University of Sheffield</p>

</div>
  )



}

export default Footer
