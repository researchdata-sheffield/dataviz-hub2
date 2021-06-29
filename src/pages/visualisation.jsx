import React, { useState, useRef, useEffect } from "react"
import SEO from "../components/shared/seo"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
//import { shortenText } from "../utils/shared"
import { getImageSource } from "../utils/shared"
import { VisItem } from "../components/style/visStyle"
import Fade from 'react-reveal/Fade';
import UniversityIcon from "../images/TUOS_PRIMARY_LOGO_LINEAR_BLACK.png"

const Visualisation = ({data: {allMdx} }) => {
  const allMDX = [];
  const nextPageRef = useRef();
  const PAGE_LENGTH = 10;

  for(let i = 0; i < allMdx.edges.length; ++i){
    allMDX.push(allMdx.edges[i]);
    allMDX.push(allMdx.edges[Math.floor(Math.random() *allMdx.edges.length)]);
    allMDX.push(allMdx.edges[Math.floor(Math.random() *allMdx.edges.length)]);
    allMDX.push(allMdx.edges[Math.floor(Math.random() *allMdx.edges.length)]);
    allMDX.push(allMdx.edges[Math.floor(Math.random() *allMdx.edges.length)]);
  }

  const [currentMDXs, setCurrentMDXs] = useState([...allMDX.slice(0, PAGE_LENGTH)]);
  const [loadNextPage, setLoadNextPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(allMDX.length > PAGE_LENGTH);

  // Check if observed the loadNextPage element
  // https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px 10px 0px",
      threshold: 0.7,
    }
    const refObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoadNextPage(true);
        console.log("Observed!")
      }
    }, options);

    if (nextPageRef.current) {
      refObserver.observe(nextPageRef.current);
    }
  }, []);


  // Monitor remaining visualisations on update of visualisation objects
  useEffect(() => {
    const hasNext = allMDX.length > currentMDXs.length;
    setHasNextPage(hasNext);

    if (!hasNext) {
      const addMoreVisBox = document.querySelector('#visualisation-invite');
      addMoreVisBox.style.visibility = 'visible';
      addMoreVisBox.parentElement.appendChild(addMoreVisBox);
    }
  },[currentMDXs])


  // Load more visualisations objects
  useEffect(() => {
    // load more only if intended too & there are more objects
    if (!loadNextPage || !hasNextPage) {
      return;
    }

    // Get next page content
    const moreMDX = allMDX.length > currentMDXs.length;
    const nextPageMDX = moreMDX ? allMDX.slice(currentMDXs.length, currentMDXs.length + PAGE_LENGTH) : [];
    
    // Merge into current content
    setCurrentMDXs([...currentMDXs, ...nextPageMDX]);
    setLoadNextPage(false);
  }, [loadNextPage, hasNextPage])

  return(
    <>
      <SEO 
        title="Visualisation" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "about dataviz"]} 
      />
      <div className="bg-gray-900 w-full py-36 text-center">
        <h1 
          className="w-full py-3 text-6xl font-extrabold" 
          style={{
            background: '-webkit-linear-gradient(225deg, rgba(255,121,180,1) 20%, rgba(255,134,250,1) 40%, rgba(41,197,255,1) 65%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            MozBackgroundClip: 'text',
            MozTextFillColor: 'transparent'
          }}
        >
          InfoVis
        </h1> 
        <h3 className="text-gray-500">The latest from the University of Sheffield.</h3>
      </div>
      <div className="min-h-100 flex flex-wrap justify-center pt-12 pb-32 bg-gray-900 px-5">
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
          <div
            id="visualisation-invite"
            style={{gridRow: 'span 1', gridColumn: 'span 1', visibility: 'hidden'}}
          >
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
    </>
  )
}

export default Visualisation

Visualisation.propTypes = {
  data: PropTypes.any,
}


export const query = graphql`
	query visualisationList {
		allMdx(
			filter: { frontmatter: { type: { eq: "visualisation" }} }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
      edges {
        node {
          id
          frontmatter {
            description
            tag
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
            d3
            date(formatString: "DD MMMM YYYY")
            author {
              name
              avatar {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
                }
              }
            }
            category
            title
            featured
            type
            rowSpan
            columnSpan
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
		}
	}
`