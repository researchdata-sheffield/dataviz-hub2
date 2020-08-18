import { Link } from "gatsby"
import React from "react"
import university_logo from "../../images/TUOSlogo.png"
import { FaGoogle, FaSlack } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { A_footer } from "../style/styled"

const Footer = () => {
  const currentYear = new Date()
  
  return (
    <div className="bg-black px-8 py-8 lg:px-12 lg:py-10 text-sm relative z-10">
      <div className="sm:flex mb-4 text-gray-500">
        <div className="sm:w-2/12 h-auto">
            <div className="mb-2"><Link className="text-gray-100 font-semibold text-md" to="/">Dataviz.Shef</Link></div>
              <ul className="list-reset leading-normal">
                <li><Link className="text-gray-500 hover:text-highlight_2" to="/blog">Blog</Link></li>
                <li><Link className="text-gray-500 hover:text-highlight_2" to="/events">Events</Link></li>
                <li><Link className="text-gray-500 hover:text-highlight_2" to="/community">Community</Link></li>
                <li><A_footer href="https://orda.shef.ac.uk/visualisations/">Showcase</A_footer></li>
                <li><Link className="text-gray-500 hover:text-highlight_2" to="/about">About</Link></li>
                <li><A_footer href="mailto:rdm@sheffield.ac.uk">Contact us</A_footer></li>
                <li><Link className="text-gray-500 hover:text-highlight_2" to="/privacy">Privacy Policy</Link></li>
              </ul>
        </div>
        <div className="sm:w-3/12 h-auto sm:mt-0 mt-8">
            <div className="text-md mb-2 font-semibold text-gray-100">Online Research Data</div>
              <ul className="list-reset leading-normal">
                <li><A_footer href="https://orda.shef.ac.uk/articles/list/desc/published_date/all">Datasets</A_footer></li>
                <li><A_footer href="https://orda.shef.ac.uk/#orda-fac">Faculties</A_footer></li>
                <li><A_footer href="https://figshare.shef.ac.uk/collections/University_of_Sheffield_visualisation_showcase/3879643">Visualised datasets</A_footer></li>
              </ul>

          <div className="mb-2 mt-4 text-md font-semibold text-gray-100">The University of Sheffield</div>
            <ul className="list-reset leading-normal">
            <li><A_footer href="http://sheffield.ac.uk/library/rdm">Research Data Management support</A_footer></li>
                <li><A_footer href="https://www.sheffield.ac.uk/it-services">IT Services</A_footer></li>
                <li><A_footer href="http://rse.shef.ac.uk/">Research Software Engineering</A_footer></li>
            </ul>

        </div>
        <div className="sm:w-2/12 h-auto sm:mt-0 mt-8">
          <div className="text-gray-100 text-md mb-2 font-semibold">Collaboration</div>
          <ul className="list-reset leading-normal">
            <li><A_footer href="https://github.com/researchdata-sheffield/dataviz-hub2">Github repository</A_footer></li>
          </ul>
        </div>
        
        <div className="sm:w-5/12 sm:flex sm:mt-0 mt-8 h-auto justify-center flex-wrap">
          <div className="sm:w-2/3 text-gray-100 text-lg mb-2 pr-6">
            <div className="font-semibold text-highlight_2">Data Visualisation Hub </div>
            <div className="text-gray-100 text-lg mb-2 font-medium">The University of Sheffield.</div>
            <p className="text-gray-500 leading-normal text-sm">
              To help our researchers make the most of their data and take advantage of tools, we have been working 
              on Dataviz.Shef, a multi-pronged initiative to provide tools, training and build a community around 
              interactive data visualisation at TUoS.
            </p>
          </div>
            
          <div className="sm:w-1/3 pl-6">
            <A_footer className="m-20" href="https://www.sheffield.ac.uk/"><img className="w-11/12" src={university_logo}></img></A_footer>
            <div className="text-center justify-between w-11/12 text-gray-300">
              <button className="mx-2"><A_footer href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group"><FaGoogle /></A_footer></button>
              <button className="mx-2"><A_footer href="https://join.slack.com/t/shef-dataviz/signup"><FaSlack /></A_footer></button>
              <button className="mx-2"><A_footer href="mailto:rdm@sheffield.ac.uk"><MdEmail /></A_footer></button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-500 leading-normal text-center text-sm pt-8">
        Copyright © {currentYear.getFullYear()} The University of Sheffield.
      </p>
    </div>
  )
}

export default Footer
