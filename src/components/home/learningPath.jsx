import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Fade from "react-reveal/Fade";
import PropTypes from "prop-types";

import { ArrowButton } from "../style/styleComponent";
import { getImageSource, shortenText } from "../../utils/shared";
import Slider from "react-slick";
import Bg from "../../images/home/learningPath.jpg";
import { CardWrapper, FrontCard, BackCard, StatusSpan } from "../style/home";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...(style || []), right: 0, zIndex: "100" }}
      onClick={onClick}
    />
  );
};

NextArrow.propTypes = {
  className: PropTypes.any,
  style: PropTypes.any,
  onClick: PropTypes.any
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...(style || []), left: 0, zIndex: "100" }}
      onClick={onClick}
    />
  );
};

PrevArrow.propTypes = {
  className: PropTypes.any,
  style: PropTypes.any,
  onClick: PropTypes.any
};

/**
 * Display all learning paths with `learningPath: true` in the index.mdx file.
 * Latest learning path will get a 'New' icon. If published: false, then 'New' will be replaced by 'Coming soon'
 */
const LearningPath = () => {
  const data = useStaticQuery(graphql`
    query LearningPathQuery {
      allMdx(
        filter: { frontmatter: { learningPath: { eq: true } } }
        sort: { order: ASC, fields: frontmatter___date }
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
    }
  `);

  // https://react-slick.neostack.com/docs/example/simple-slider
  const carouselSettings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "center",
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
          dots: true,
          arrow: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrow: true
        }
      }
    ]
  };

  return (
    <div
      id="learning-path"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        minHeight: "850px",
        backgroundImage: `linear-gradient(180deg, rgba(17,24,39,.98) 0%, rgba(16,16,30,.94) 100%), url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Fade>
        <div className="container mx-auto justify-center flex flex-wrap text-center mt-8">
          <div
            className="text-4xl md:text-6xl text-white w-full leading-tight font-extrabold"
            style={{ fontFamily: "Source Serif Pro, serif" }}
          >
            Learning paths.
          </div>
          <p className="mt-3 text-gray-100 px-5">
            Discover how to get the most out of statistics, visualisations and
            tool sets.
          </p>
        </div>
      </Fade>

      <div
        className="mx-auto mt-4 mb-16 lg:mb-56 overflow-hidden"
        style={{
          overflow: "hidden",
          width: "100%",
          maxWidth: "1280px"
        }}
      >
        <Slider {...carouselSettings}>
          {data.allMdx &&
            data.allMdx.edges.map(({ node }, index, arr) => {
              let imagesrc = getImageSource(node, true);
              let description = shortenText(node.frontmatter.description, 12);
              let learningPathDescription = shortenText(
                node.frontmatter.learningPathDescription,
                10
              );
              let published = node.frontmatter.published !== false;

              return (
                <div
                  key={node.id}
                  style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                >
                  <CardWrapper
                    style={{
                      backgroundImage: `linear-gradient(155deg, rgba(0,0,0,.65) 50%, rgba(2,0,36,.4) 100%), url(${imagesrc})`,
                      minHeight: "250px",
                      backgroundPosition: "center"
                    }}
                    //onClick={() => {window.open(`${node.fields.slug}`, '_blank', 'noopener,noreferrer')}}
                    tabIndex="0"
                  >
                    {arr.length - 1 === index && (
                      <StatusSpan>
                        {published ? "New" : "Coming soon"}
                      </StatusSpan>
                    )}
                    <FrontCard className="frontCard">
                      <div className="title">
                        {node.frontmatter.learningPathTitle}
                      </div>
                      <div className="description">
                        {learningPathDescription}
                      </div>
                    </FrontCard>
                    <BackCard className="backCard">
                      <h1 className="title">
                        {node.frontmatter.learningPathTitle}
                      </h1>
                      <p className="description">{description}</p>
                      <Link
                        to={published ? node.fields.slug : "#learning-path"}
                        style={{ cursor: published ? "" : "not-allowed" }}
                        title={
                          published
                            ? `Learning Path - ${node.frontmatter.learningPathTitle}`
                            : "This learning path is not published yet"
                        }
                      >
                        <ArrowButton className="moreBtn">
                          {published
                            ? node.frontmatter.learningPathBtn
                            : "Coming soon"}
                        </ArrowButton>
                      </Link>
                    </BackCard>
                  </CardWrapper>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default LearningPath;
