import { Link } from "gatsby"
import React from "react"
/* import university_logo from "../images/TUOS_LOGO_REVERSED.png" */

function Footer() {

  return (
  <div className="bg-gray-900 px-10 py-8">
    <div className="sm:flex mb-4">
      <div className="sm:w-1/6 h-auto">
          <div className="text-gray-100 mb-2 font-semibold text-lg"><Link to="/">Dataviz.Shef</Link></div>
            <ul className="list-reset leading-normal">
              <li className="text-gray-500 hover:text-highlight_2"><Link to="/community">Community</Link></li>
              <li className="text-gray-500 hover:text-highlight_2"><a href="https://orda.shef.ac.uk/visualisations/" target="_blank" rel="noopener noreferrer">Showcase</a></li>
              <li className="text-gray-500 hover:text-highlight_2"><Link to="/events">Events</Link></li>
              <li className="text-gray-500 hover:text-highlight_2"><Link to="/blog">Blog</Link></li>
              <li className="text-gray-500 hover:text-highlight_2"><Link to="/about">About</Link></li>
              <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
            </ul>
      </div>
      <div className="sm:w-1/6 h-auto sm:mt-0 mt-8">
          <div className="text-gray-100 text-lg mb-2 font-semibold">ORDA</div>
            <ul className="list-reset leading-normal">
              <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
              <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
              <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
            </ul>

        <div className="text-gray-100 text-lg mb-2 mt-4 font-semibold">TUoS</div>
          <ul className="list-reset leading-normal">
          <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
              <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
              <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
          </ul>

      </div>
      <div className="sm:w-1/5 h-auto sm:mt-0 mt-8">
                <div className="text-gray-100 text-lg mb-2 font-semibold">Latest News</div>
          <ul className="list-reset leading-normal">
            <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
            <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
            <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
          </ul>

{/*         <div className="text-gray-100 text-lg mb-2 mt-4 font-semibold">Green-light</div>
          <ul className="list-reset leading-normal">
            <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
            <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
            <li className="text-gray-500 hover:text-highlight_2">Coming soon</li>
          </ul> */}
      </div>
      
      <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
        <div className="sm:w-2/3 text-gray-100 text-lg mb-2">
          <div className="font-semibold text-highlight_2">Data Visualisation Hub </div>
          <div className="text-gray-100 text-lg mb-2 font-medium">The University of Sheffield.</div>
          <p className="text-gray-500 leading-normal text-sm">Promoting and building community around data visualisation at the University of Sheffield. 
            To help our researchers make the most of their data and take advantage of such tools, we (Research Software Engineering, the University Library and IT Services) have been working on dataviz.shef, a multi-pronged initiative to provide tools, training and build a community around interactive data visualisation at TUoS.</p>
{/*           <div className="mt-4 flex">
              <input type="text" className="p-2 border border-gray-light round text-gray-dark text-sm h-auto" placeholder="Your email address"></input>
              <button className="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
          </div> */}
          <p className="text-gray-500 leading-normal text-sm"> <br /><br /> © 2020  The University of Sheffield</p>
        </div>

        <div className="sm:w-1/3">

        </div>
        
      </div>

  </div>

</div>
  )



}

export default Footer
