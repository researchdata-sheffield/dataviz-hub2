import React from 'react'
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import { FaUniversity, FaPython, FaRProject } from "react-icons/fa"
import { FcWorkflow } from "react-icons/fc"
import { ButtonWithArrow } from "../style/styled"



const LearningPath = () => {
  const animationClasses = "transform transition duration-300 ease-in-out"
  const cardClasses = `${animationClasses} w-4/5 lg:w-1/4 2xl:w-1/5 flex flex-wrap group justify-center mx-5 p-8 xl:p-10 text-center mt-10 hover:-translate-y-1 shadow-xs hover:shadow-2xl rounded-md`
  const frontCard = `${animationClasses} group-hover:invisible translate-y-0 group-hover:-translate-y-40 group-focus:-translate-y-40 opacity-100 group-hover:opacity-0 group-focus:opacity-0`
  const backCard = `${animationClasses} fixed top-0 left-0 p-8 text-left group-hover:translate-y-0 translate-y-40 group-focus:translate-y-0 invisible group-hover:visible group-focus:visible group-focus:opacity-100 group-hover:opacity-100 opacity-0`
  const moreBtn = "mt-5 py-1 px-3 bg-black hover:bg-highlight_2 text-sm xl:text-base"

  return (
    <div id="learning_path" className="ipadp:min-h-110 flex flex-wrap justify-center items-center relative" style={{backgroundColor: '#000'}}>
      <Fade>
        <div className="container mx-auto justify-center flex flex-wrap text-center mt-24">
          <div className="text-4xl lg:text-6xl font-bold text-white w-full leading-tight" style={{fontFamily: "TUOS Stephenson,Georgia,Times,serif"}}>Learning paths.</div>
          <p className="mt-3 text-gray-100 px-2">Discover how to get the most out of statistics, visualisations and tool sets.</p>
        </div>
      </Fade>
      
      <div className="flex flex-wrap text-black pt-10 pb-32 justify-center">
        <Zoom bottom duration={700} delay={100}>
          <div className={`${cardClasses} bg-pink-200`} tabIndex="0">
            <div className={frontCard}>
              <FaUniversity className="w-full text-4xl xl:text-5xl" />
              <div className="text-xl mt-5 font-bold xl:text-2xl">Dataviz Intro</div>
              <div className="text-sm mt-3 xl:text-lg">New to data visualisation and programming.</div>
            </div>
            <div className={backCard}>
              <h1 className="font-bold mb-1 text-xl xl:text-2xl">Introduction</h1>
              <p className="text-sm xl:text-lg">Explore data visualisations through definitions, examples, videos, 
                and relevant resources.
              </p>
              <Link to="/blog/03/07/2020/LearningPath-Introduction"><ButtonWithArrow className={moreBtn}>Get started</ButtonWithArrow></Link>
            </div>
          </div>
        </Zoom>
        <Zoom bottom duration={700} delay={250}>
          <div className={`${cardClasses} bg-blue-200`} tabIndex="0">
            <div className={frontCard}>
              <div className="flex flex-wrap justify-around text-4xl xl:text-5xl w-full">
                <div><FaPython className="text-white" /></div>
                <div><FaRProject className="text-white" /></div>
              </div>
              <h1 className="text-xl mt-5 font-bold xl:text-2xl">Dataviz Lab</h1>
              <p className="text-sm mt-3 xl:text-lg">Knowledge of programming languages Python / R.</p>
            </div>
            <div className={backCard}>
              <h1 className="font-bold mb-1 text-xl xl:text-2xl">Dataviz Lab</h1>
              <p className="text-sm xl:text-lg">Tutorials and guides on create data visualisations using 
              different tools and languages.
              </p>
              <Link to="/blog/04/07/2020/LearningPath-Lab"><ButtonWithArrow className={moreBtn}>Go to Lab</ButtonWithArrow></Link>
            </div>
          </div>
        </Zoom>
        <Zoom bottom duration={700} delay={300}>
          <div className={`${cardClasses} bg-white`} tabIndex="0">
            <div className={frontCard}>
              <FcWorkflow className="w-full text-4xl xl:text-5xl" />
              <h1 className="text-xl mt-5 font-bold xl:text-2xl">Dataviz Workflows</h1>
              <p className="text-sm mt-3 xl:text-lg">Experienced in producing data visualisations.</p>
            </div>
            <div className={backCard}>
              <h1 className="font-bold mb-1 text-xl xl:text-2xl">Dataviz Workflows</h1>
              <p className="text-sm xl:text-lg">Increase your research impact through reproducible data visualisation 
                workflows.
              </p>
              <Link to="/blog/05/07/2020/LearningPath-Workflow"><ButtonWithArrow className={moreBtn}>Learn workflows</ButtonWithArrow></Link>
            </div>
          </div>
        </Zoom>
        <Zoom delay={700}>
          <h1 className="w-full text-white text-center mt-10 px-2">
            We are working on more learning paths, why not share your suggestions on 
            our <a className="text-gray-200 hover:text-highlight_2 link-effect" href="https://join.slack.com/t/shef-dataviz/signup" target="_blank" rel="noopener noreferrer">slack channel</a>.
          </h1>
        </Zoom>
      </div>

      {/* <div className="w-full absolute bottom-0 -mb-1">
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,181.3C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
    </div>
    
  )

}

export default LearningPath

