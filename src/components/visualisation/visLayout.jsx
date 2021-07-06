import React from 'react'
import PropTypes from "prop-types"
import SEO from "../shared/seo"
import { Link } from "gatsby"
import { getImageSource } from "../../utils/shared"
import { VisItem } from "../style/visStyle"
import Fade from 'react-reveal/Fade';
import UniversityIcon from "../../images/TUOS_PRIMARY_LOGO_LINEAR_BLACK.png"


const visLayout = ({currentMDXs, nextPageRef, title}) => {
  const pageTitle = title ? `| ${title}` : '';  
  const pageSubtitle = 
    title ? 
      <p>Viewing items in <span className="text-gray-400 font-semibold">{title}</span>.</p> 
    : <p>The latest from the University of Sheffield.</p>

  return(
    <>
      <SEO 
        title={`Visualisation ${pageTitle}`} 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "about dataviz", title ?? '']} 
      />
      <div className="bg-gray-900 w-full py-36 text-center">
        <Link to="/visualisation">
          <h1 
            className="w-full py-3 text-6xl font-extrabold" 
            style={{
              background: '-webkit-linear-gradient(135deg, rgba(255,121,180,1) 50%, rgba(255,134,250,1) 36%, rgba(41,197,255,1) 35%)',
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              MozBackgroundClip: 'text',
              MozTextFillColor: 'transparent'
            }}
          >
            InfoVis
          </h1> 
        </Link>
        <h3 className="text-gray-500">{pageSubtitle}</h3>
      </div>
      <div className="min-h-80 flex flex-wrap justify-center pt-12 pb-32 bg-gray-900 px-5">
        <div 
          className="max-w-8xl w-full md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1"
          style={{gridAutoFlow: 'dense', gridTemplateRows: 'min-content'}}
        >
          {currentMDXs.length > 0 && currentMDXs.map(({ node }) => {
            let imagesrc = getImageSource(node, true);
            let rowSpan = node.frontmatter.rowSpan ?? 1;
            let columnSpan = node.frontmatter.columnSpan ?? 1;

            return (
              <Link 
                to={node.fields.slug} 
                key={node.id} 
                style={{gridRow: `span ${rowSpan}`, gridColumn: `span ${columnSpan}`}}
                className="shadow-xl rounded-xl visualisationColourBorder"
              >
                {/* university logo on loading */}
                <img 
                  src={UniversityIcon} 
                  style={{maxWidth: '100px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}} 
                  className="absolute"
                  />
                {/* visualisation */}
                <Fade delay={1000}>
                  <VisItem row={rowSpan} col={columnSpan}>
                    <div 
                      className="rounded-xl md:absolute md:top-0 md:left-0"  
                      style={{height: '100%', width: '100%', backgroundImage: `linear-gradient(135deg, #141e30 0%,#152033 6%,#20344c 65%,#243b55 100%)`, backgroundRepeat: 'no-repeat'}}
                    >
                      <img 
                        style={{height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center', transition: '.2s ease-out'}} 
                        className="rounded-xl" 
                        src={imagesrc} 
                        alt={"Visualisation: " + node.frontmatter.title} 
                      />
                    </div>
                  </VisItem>
                </Fade>
              </Link>
            )

          })} 
          <div id="visualisation-invite" style={{gridRow: 'span 1', gridColumn: 'span 1', visibility: 'hidden'}}>
            <Fade delay={1000}>
              <VisItem row={1} col={1}>
                <div 
                  className="group rounded-xl relative md:absolute md:top-0 md:left-0 text-center flex"  
                  style={{height: '100%', width: '100%', backgroundImage: 'linear-gradient(135deg, #141e30 0%,#152033 6%,#20344c 65%,#243b55 100%)', backgroundRepeat: 'no-repeat'}}
                >
                  <h1 className="text-gray-300 font-bold m-auto">Add your visualisations here</h1>
                  <Link 
                    to=""
                    className="absolute text-sm text-gray-200 font-bold cursor-pointer bg-gray-600 rounded-md py-1 px-2 hidden group-hover:block" 
                    style={{transform: 'translate(-50%, 0%)', left: '50%', top: '70%'}}>
                      Learn how
                  </Link>
                </div>
              </VisItem>
            </Fade>
          </div>
        </div>
        <div ref={nextPageRef} style={{height: '100px', width: '100%'}}></div>
      </div>
      <div className="bg-gray-900 text-center text-gray-600 pb-5 text-sm">
        This page is inspired by <a href="https://informationisbeautiful.net/beautifulnews" target="_blank" rel="noreferrer">Beautiful News</a>.
      </div>
    </>
  )
}

export default visLayout

visLayout.propTypes = {
  currentMDXs: PropTypes.any,
  nextPageRef: PropTypes.any,
}