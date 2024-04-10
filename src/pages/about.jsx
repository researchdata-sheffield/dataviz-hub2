import React from "react";
import { Link } from "gatsby";
import SEO from "../components/shared/seo";
import RSE from "../images/about/rse.png";
import ITS from "../images/about/its.png";
import ORDA from "../images/about/orda_logo.jpg";
import Fade from "react-reveal/Fade";
import bg from "../images/about/about.jpg";

const About = () => {
  let logoStyle =
    "max-w-xs rounded overflow-hidden my-4 p-6 flex flex-wrap justify-center content-center w-full sm:w-1/3";

  return (
    <>
      <SEO
        title="About"
        keywords={[
          "the university of sheffield",
          "data visualisation",
          "data visualisation hub",
          "research",
          "about dataviz"
        ]}
      />
      <div
        className="flex flex-col min-h-100 items-center justify-center text-center w-full"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.65) 100%), url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <Fade cascade delay={700} duration={2000}>
          <div
            className="text-white"
            style={{ fontFamily: "Source Serif Pro" }}
          >
            <h1
              className="text-5xl font-bold "
              style={{ textShadow: "#000000 0px 0px 10px" }}
            >
              Library · IT Services · RSE
            </h1>
            <p
              className="text-lg my-4 text-gray-100 font-semibold px-2"
              style={{ textShadow: "#000000 0px 2px 10px" }}
            >
              Dataviz.Shef is a joint initiative between three partners.
            </p>
          </div>

          <Link to="/about#more">
            <button className="mt-16 bg-gray-300 hover:bg-brand-blue text-center text-brand-black font-semibold py-2 px-6 border-2 border-transparent shadow">
              Learn more
            </button>
          </Link>
        </Fade>
      </div>

      <div id="more" className="container pt-12 pb-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap mx-auto justify-center content-center border-solid border-gray-100 border-b-2">
          <Fade>
            <a
              className={`${logoStyle} text-black`}
              href="https://www.sheffield.ac.uk/library/index"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p
                className="font-medium text-4xl leading-tight"
                style={{ fontFamily: "Source Serif Pro, serif" }}
              >
                The
                <br />
                University
                <br />
                Library.
              </p>
            </a>
            <a
              className={logoStyle}
              href="https://www.sheffield.ac.uk/it-services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ITS} alt="IT Services site" />
            </a>
            <a
              className={logoStyle}
              href="https://rse.shef.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={RSE} alt="Research Software Engineering site" />
            </a>
          </Fade>
        </div>

        <div className="flex flex-wrap text-gray-900 text-xl px-3 lg:px-32 xl:px-48 py-16">
          <Fade>
            <p className="">
              <b className="bg-brand-blue">Dataviz.Shef</b> is a joint
              initiative between <b>The University Library</b>,{" "}
              <b>IT Services</b>, and <b>Research Software Engineering (RSE)</b>
              . This community website exists to provide research staff and
              students at the University of Sheffield with information and
              inspiration about the visual presentation of data.
            </p>

            <p className="pt-8 pb-16">
              Visualisation has always been at the core of extracting
              understanding from data, but powerful, modern, open source,
              interactive and web-based visualisation tools have revolutionised
              the potential for research data impact. We are here to help to
              unlock the potential of your data.
            </p>

            <div className="pb-16 ">
              <p className="pb-16">
                In 2017, <b>ORDA (Online Research Data)</b> was launched, a free
                platform for all University of Sheffield research staff and
                students to share their datasets, code, presentations, posters,
                grey literature and other non-traditional research outputs. You 
                are welcome to review visual representations illustrating our 
                research by exploring some examples <a href="https://doi.org/10.15131/shef.data.c.3879643" target="_blank" rel="noopener noreferrer">here</a>.
              </p>
              <a
                href="https://orda.shef.ac.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ORDA}
                  className="shadow-lg mx-auto"
                  style={{ maxWidth: "35vh" }}
                  alt="Online Research Data"
                />
              </a>
            </div>

            <p className="border-brand-blue border-b-4 text-4xl my-8">
              Contribute
            </p>

            <p className="text-gray-900">
              From ideas to content for the ORDA showcase, our blog or Dataviz
              documentation, contributions are open to all. For the moment just
              get in touch with us through the{" "}
              <a
                className="link-effect"
                href="mailto:rdm@sheffield.ac.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                email
              </a>
              , &nbsp;
              <Link className="link-effect" to="/community/#joinus">
                google group
              </Link>{" "}
              or{" "}
              <Link className="link-effect" to="/community/#joinus">
                slack team
              </Link>
              .
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
