import React from "react";
import SEO from "../components/shared/seo";
import { Link } from "gatsby";
import com_1 from "../images/community/com_1.jpg";
import com_2 from "../images/community/com_2.jpg";
import google from "../images/community/google.png";
import Fade from "react-reveal/Fade";
import { Link as Link_effect } from "../components/style/blogPostStyle";
import bg from "../images/community/community.jpg";
import { AnimateButton } from "../components/style/styleComponent";

const Community = () => {
  return (
    <>
      <SEO
        title="Community"
        keywords={[
          "the university of sheffield",
          "data visualisation",
          "data visualisation hub",
          "research",
          "dataviz community",
          "dataviz.shef"
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
          <div className="text-white">
            <h1 className="text-5xl font-bold leading-tight">
              Community at Dataviz.Shef
            </h1>
            <h1
              className="text-xl mt-3 text-gray-100"
              style={{ textShadow: "#000000 0px 0px 1px" }}
            >
              knowledge | connection | inspiration | resources | support
            </h1>
          </div>

          <div className="mt-16">
            <Link to="/community#discover">
              <AnimateButton
                className="mr-10 bg-white text-black hover:text-white"
                hoverBC="#000"
              >
                Discover
              </AnimateButton>
            </Link>
            <Link to="/community#joinus">
              <AnimateButton
                className=" bg-white text-black hover:text-white"
                hoverBC="#000"
                boxShadow="#9ADBE8"
              >
                Join community
              </AnimateButton>
            </Link>
          </div>
        </Fade>
      </div>

      <div
        id="discover"
        className="container mx-auto py-24 text-gray-800 flex flex-wrap"
      >
        <div className="flex flex-wrap lg:mx-16">
          <Fade cascade duration={2000}>
            <div className="text-lg w-full lg:w-1/2 px-5">
              <p className="text-brand-purple text-5xl text-center py-3">
                Stay tuned!
              </p>
              <p className="py-6 text-gray-900">
                The most important part of the initiative is to build community
                around data visualisation, we hope to achieve this in a number
                of ways.
              </p>
              <p className="font-semibold pb-4">
                We’re working on developing a community communication framework,
                expanding and diversifying communication channels.
              </p>
              <img
                className="my-8 px-6"
                src={com_2}
                style={{
                  borderRadius: "100%",
                  minHeight: "55vh",
                  maxHeight: "55vh",
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                alt="Community image 1"
              />
              <p className="text-base">
                {" "}
                We’ve started with a{" "}
                <Link_effect to="/community/#joinus">
                  TUoS google group
                </Link_effect>{" "}
                which can be joined through a TUoS google account. We have also
                added{" "}
                <Link_effect to="/community/#joinus">slack channel</Link_effect>{" "}
                for more informal communication and chat. Remember to say hello
                in our <i>#welcome channel</i>.
              </p>
            </div>
          </Fade>
          <Fade cascade duration={2000}>
            <div className="w-full lg:w-1/2 text-gray-900 text-lg px-5">
              <img
                src={com_1}
                className="mt-8"
                style={{
                  borderRadius: "3%",
                  minHeight: "45vh",
                  maxHeight: "55vh",
                  objectFit: "cover",
                  objectPosition: "center"
                }}
                alt="Community image 2"
              />
              <p className="text-brand-purple text-xl py-12">
                Events: We’ll be hosting a variety of events including talks &
                symposia, workshops, vis-coding clubs and data visualisation
                hackathons!
              </p>
              <h1>
                But just to give an idea, here&apos;s a selection of workshops
                in the pipeline: <br />
                <p className="pl-4">
                  <br />
                  ~ Data visualisation in R <br />
                  ~ R, htmlwidgets & Shiny <br />
                  ~ Dataviz using vegalite <br />
                </p>
              </h1>
            </div>
          </Fade>
        </div>

        <div
          id="joinus"
          className="2xl:p-16 flex flex-wrap justify-center content-center mx-auto transition ease-in-out duration-2000 mt-10"
        >
          <div className="text-gray-900 text-6xl w-full p-12 xl:px-12 font-semibold">
            Join us.
          </div>
          <Fade>
            <div className="md:w-2/5 rounded overflow-hidden shadow-md mx-6 my-4 hover:shadow-xl group flex relative transition duration-1000">
              <a
                href="https://shef-dataviz.slack.com/join/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-25 transition duration-500"
              >
                <img
                  className="w-full py-24 px-12"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg"
                  alt="Slack"
                  style={{ height: "300px" }}
                />
                <div className="px-6 pt-8">
                  <div className="font-semibold text-xl text-center text-gray-500 mb-2">
                    shef-dataviz.slack
                  </div>
                  <p className="text-gray-700 text-base p-4 text-center">
                    Sign in use your Sheffield University email, Say hello in
                    our <b>#welcome channel</b>.
                  </p>
                </div>
              </a>

              <a
                href="https://shef-dataviz.slack.com/join/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden group-hover:block absolute justify-center content-center text-center py-1 px-12 shadow-sm text-xl text-white bg-black hover:bg-brand-purple transition duration-500"
                style={{
                  position: "absolute",
                  top: "77%",
                  left: "50%",
                  transform: "translateX(-50%) translateY(-50%)"
                }}
              >
                Sign up to Slack
              </a>
            </div>
          </Fade>

          <Fade>
            <div className="md:w-2/5 rounded overflow-hidden shadow-md mx-6 my-4 hover:shadow-xl group flex relative transition duration-1000">
              <a
                href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-25 transition duration-500"
              >
                <img
                  className="w-full"
                  src={google}
                  alt="Google Group"
                  style={{ height: "300px" }}
                />
                <div className="px-6 pt-8">
                  <div className="font-semibold text-xl mb-2 text-center text-gray-500">
                    Google group
                  </div>
                  <p className="text-gray-700 text-base px-4 lg:px-10 py-4 text-center">
                    Sign in use your Sheffield Google account, Join the TUoS
                    google group.
                  </p>
                </div>
              </a>

              <a
                href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden group-hover:block absolute text-center py-1 px-8 shadow-sm text-xl text-white bg-black hover:bg-brand-purple transition duration-500"
                style={{
                  position: "absolute",
                  top: "77%",
                  left: "50%",
                  transform: "translateX(-50%) translateY(-50%)"
                }}
              >
                Join group
              </a>
            </div>
          </Fade>
        </div>

        <div className="lg:px-12 2xl:px-24 pt-24 pb-16 text-black text-lg">
          <p className="text-gray-900 text-5xl px-2 font-semibold">
            Contribute!
          </p>
          <p className="p-3">
            We are constantly looking for new ideas and suggestions for events,
            workshops or tutorials. Feel free to get in touch with us through
            the google group or slack team with any suggestions. We will also be
            putting together more formal contributing guidance should you wish
            to contribute to our online resources directly through our{" "}
            <a
              className="font-semibold link-effect"
              href="https://github.com/researchdata-sheffield/dataviz-hub2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>{" "}
            including blog posts and tutorials.
          </p>
        </div>
      </div>
    </>
  );
};

export default Community;
