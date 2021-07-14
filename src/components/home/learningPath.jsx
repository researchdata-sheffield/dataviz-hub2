import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Fade from 'react-reveal/Fade'

import { ArrowButton } from "../style/styleComponent"
import { getImageSource, shortenText } from "../../utils/shared"
import Slider from "react-slick";
import Bg from "../../images/home/learningPath.jpg"

/**
 * Display all learning paths where the index.mdx specified learningPath: true
 * Latest learning path will get a 'New' icon. If published: false, then 'New' will be replaced by 'Coming soon'
 */
const LearningPath = () => {
  const animationClasses = "transform transition duration-300 ease-in-out"
  const cardClasses = `${animationClasses} text-white flex flex-wrap group justify-center mx-5 p-8 xl:p-10 text-center mt-5 hover:-translate-y-2 shadow-md hover:shadow-2xl rounded-md`
  const frontCard = `${animationClasses} group-hover:invisible translate-y-0 group-hover:-translate-y-40 group-focus:-translate-y-40 opacity-100 group-hover:opacity-0 group-focus:opacity-0`
  const backCard = `${animationClasses} fixed top-0 left-0 p-8 text-left group-hover:translate-y-0 translate-y-40 group-focus:translate-y-0 invisible group-hover:visible group-focus:visible group-focus:opacity-100 group-hover:opacity-100 opacity-0`
  const moreBtn = "mt-5 py-1 px-3 bg-black hover:bg-brand-blue text-sm xl:text-base"

  const data = useStaticQuery(graphql`query LearningPathQuery {
    allMdx(
      filter: {frontmatter: {learningPath: {eq: true}}}
      sort: {order: ASC, fields: frontmatter___date}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            published
            description
            learningPath
            learningPathBtn
            learningPathDescription
            learningPathTitle
            thumbnail {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }`)

  // https://react-slick.neostack.com/docs/example/simple-slider
  const carouselSettings = {
    className: 'center',
    accessibility: true,
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  }

  return (
    <div 
      id="learning-path" 
      className="flex flex-wrap justify-center items-center relative" 
      style={{minHeight: '850px', backgroundImage: `linear-gradient(180deg, rgba(17,24,39,.98) 0%, rgba(16,16,30,.94) 100%), url(${Bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
    >
      <Fade>
        <div className="container mx-auto justify-center flex flex-wrap text-center mt-8">
          <div className="text-4xl md:text-6xl text-white w-full leading-tight font-extrabold" style={{fontFamily: "TUOS Stephenson,Georgia,Times,serif"}}>Learning paths.</div>
          <p className="mt-3 text-gray-100 px-5">Discover how to get the most out of statistics, visualisations and tool sets.</p>
        </div>
      </Fade>

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto mt-4 mb-16 lg:mb-56 overflow-hidden">
        <Slider {...carouselSettings}>
          {data.allMdx && data.allMdx.edges.map(({ node }, index, arr) => {

            let imagesrc = getImageSource(node, true);
            let description = shortenText(node.frontmatter.description, 12);
            let learningPathDescription = shortenText(node.frontmatter.learningPathDescription, 10);
            let published = node.frontmatter.published !== false;

            return (
              <div key={node.id} className="py-4">
                <div 
                  className={`${cardClasses}`} 
                  style={{backgroundImage: `linear-gradient(155deg, rgba(0,0,0,.65) 50%, rgba(2,0,36,.4) 100%), url(${imagesrc})`, minHeight: '250px', backgroundPosition: 'center'}} 
                  //onClick={() => {window.open(`${node.fields.slug}`, '_blank', 'noopener,noreferrer')}} 
                  tabIndex="0"
                >
                  {arr.length - 1 === index && 
                    <span className="absolute top-0 right-0 z-10 bg-black -mt-3 mr-3 px-2 py-1 text-brand-blue font-bold rounded-md text-sm shadow-lg">
                      {published ? 'New' : 'Coming soon'}
                    </span>
                  }
                  <div className={frontCard}>
                    <div className="text-xl mt-5 font-bold xl:text-2xl">{node.frontmatter.learningPathTitle}</div>
                    <div className="text-gray-300 text-base mt-3 xl:text-lg">{learningPathDescription}</div>
                  </div>
                  <div className={backCard}>
                    <h1 className="font-bold mb-1 text-xl xl:text-2xl">{node.frontmatter.learningPathTitle}</h1>
                    <p className="text-base xl:text-lg">{description}</p>
                    <Link to={published ? node.fields.slug : '#learning-path'} className={`${published ? '' : 'cursor-not-allowed'}`}>
                      <ArrowButton className={moreBtn}>{published ? node.frontmatter.learningPathBtn : 'Coming soon'}</ArrowButton>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      
      {/* <div className="w-full absolute bottom-0 -mb-1">
        <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,181.3C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> */}
    </div>
    
  )

}

export default LearningPath;