import React from 'react'
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import { FaUniversity, FaPython, FaRProject } from "react-icons/fa"
import { FcWorkflow } from "react-icons/fc"
import { ButtonWithArrow } from "../style/styled"



const LearningPath = () => {
  const animationClasses = "transform transition duration-300 ease-in-out"
  const cardClasses = `${animationClasses} w-4/5 lg:w-1/5 flex flex-wrap group justify-center mx-5 p-6 text-center mt-10 hover:-translate-y-1 shadow-xs hover:shadow-2xl rounded-lg`
  const frontCard = `${animationClasses} group-hover:invisible translate-y-0 group-hover:-translate-y-40 opacity-100 group-hover:opacity-0`
  const backCard = `${animationClasses} fixed top-0 left-0 p-6 text-left group-hover:translate-y-0 translate-y-40 invisible group-hover:visible group-hover:opacity-100 opacity-0`
  const moreBtn = "mt-3 py-1 px-3 bg-black hover:bg-highlight_2 text-sm"

  return (
    <div id="learning_path" className="ipadp:min-h-100 flex flex-wrap justify-center items-center relative pb-10" style={{backgroundColor: '#1d1d1d'}}>
      <Fade>
        <div className="container mx-auto justify-center flex flex-wrap text-center">
          <div className="text-3xl lg:text-6xl font-bold text-white w-full leading-tight" style={{fontFamily: "TUoS Stephenson"}}>Learning paths.</div>
          <p className="mt-3 text-gray-100 px-2">Discover how to get the most out of statistics, visualisations and tool sets.</p>
        </div>
      </Fade>
      
      <div className="flex flex-wrap text-gray-800 pt-10 pb-48 xl:pb-86 justify-center">
        <Zoom bottom duration={700} delay={100}>
          <div className={`${cardClasses} bg-gray-800 text-white`}>
            <div className={frontCard}>
              <FaUniversity className="w-full text-4xl" />
              <div className="text-xl mt-5 font-bold">Dataviz Concept</div>
              <div className="text-sm mt-1">New to data visualisation and programming.</div>
            </div>
            <div className={backCard}>
              <h1 className="font-bold">Concept</h1>
              <p className="text-sm">Explore data visualisations through definitions, examples, videos, 
                and relevant resources.
              </p>
              <Link to="/blog/03/07/2020/LearningPath_Concept"><ButtonWithArrow className={moreBtn}>Learn concept</ButtonWithArrow></Link>
            </div>
          </div>
        </Zoom>
        <Zoom bottom duration={700} delay={250}>
          <div className={`${cardClasses} bg-blue-700 text-white`}>
            <div className={frontCard}>
              <div className="flex flex-wrap justify-around text-4xl w-full">
                <div><FaPython /></div>
                <div><FaRProject /></div>
              </div>
              <h1 className="text-xl mt-5 font-bold">Dataviz Lab</h1>
              <p className="text-sm mt-1">Knowledge of programming languages Python / R.</p>
            </div>
            <div className={backCard}>
              <h1 className="font-bold">Dataviz Lab</h1>
              <p className="text-sm">Tutorials and guides on create data visualisations using 
              different tools and languages.
              </p>
              <Link to="/blog/04/07/2020/LearningPath_Lab"><ButtonWithArrow className={moreBtn}>Go to Lab</ButtonWithArrow></Link>
            </div>
          </div>
        </Zoom>
        <Zoom bottom duration={700} delay={300}>
          <div className={`${cardClasses} bg-white`}>
            <div className={frontCard}>
              <FcWorkflow className="w-full text-4xl" />
              <h1 className="text-xl mt-5 font-bold">Dataviz Workflows</h1>
              <p className="text-sm mt-1">Experienced in producing data visualisations.</p>
            </div>
            <div className={backCard}>
              <h1 className="font-bold">Dataviz Workflows</h1>
              <p className="text-sm">Increase your research impact through reproducible data visualisation 
                workflows.
              </p>
              <Link to="/blog/05/07/2020/LearningPath_Workflow"><ButtonWithArrow className={moreBtn}>Learn workflows</ButtonWithArrow></Link>
            </div>
          </div>
        </Zoom>
        <Zoom delay={700}>
          <h1 className="w-full text-white text-center mt-10 px-2">
            We are working on it, why not share your suggestions on 
            our <a className="text-gray-200 hover:text-highlight_2 link-effect" href="https://join.slack.com/t/shef-dataviz/signup" target="_blank" rel="noopener noreferrer">slack channel</a>.
          </h1>
        </Zoom>
      </div>

      <div className="w-full absolute bottom-0 -mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,181.3C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
    
  )

}

export default LearningPath

