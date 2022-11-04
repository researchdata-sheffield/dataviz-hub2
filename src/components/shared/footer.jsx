import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import university_logo from "../../images/UOSLogo_Primary_White_RGB.svg";
import { FaGoogle, FaSlack, FaRss } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { A_footer } from "../style/styleComponent";

const Footer = React.memo(({ className }) => {
  const currentYear = new Date();
  const linkClasses = "text-gray-400 hover:text-brand-blue";

  return (
    <footer
      className={`${
        className || "relative"
      } bg-black px-8 pt-8 pb-4 lg:px-12 lg:pt-16 lg:pb-6 text-sm z-50`}
    >
      <div className="sm:flex mb-4">
        <div className="sm:w-2/12 h-auto">
          <div className="mb-2">
            <Link className="text-white font-bold text-md" to="/">
              Dataviz.Shef
            </Link>
          </div>
          <ul className="list-reset leading-normal">
            {[
              {
                route: `/community`,
                title: `Community`
              },
              {
                route: `/#learning-path`,
                title: `Learning Path`
              },
              {
                route: `/blog`,
                title: `Blog`
              },
              {
                route: `/events`,
                title: `Events`
              },
              {
                route: `/visualisation`,
                title: `Visualisation`
              },
              {
                route: `https://orda.shef.ac.uk/visualisations/`,
                title: `Showcase`,
                external: true
              },
              {
                route: `/privacy`,
                title: `Privacy Policy`
              },
              {
                route: `/accessibility`,
                title: `Accessibility`
              },
              {
                route: `/sitemap/sitemap-index.xml`,
                title: `Sitemap`
              },
              {
                route: `/about`,
                title: `About`
              },
              {
                route: `mailto:rdm@sheffield.ac.uk`,
                title: `Contact us`,
                external: true
              }
            ].map((item) => (
              <li key={`Footer - ${item.title}`}>
                {item.external !== true ? (
                  <Link className={linkClasses} to={item.route}>
                    {item.title}
                  </Link>
                ) : (
                  <A_footer href={item.route}>{item.title}</A_footer>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:w-3/12 h-auto sm:mt-0 mt-8">
          <div className="text-md mb-2 font-bold text-white">
            Online Research Data
          </div>
          <ul className="list-reset leading-normal">
            <li>
              <A_footer href="https://orda.shef.ac.uk/articles/list/desc/published_date/all">
                Datasets
              </A_footer>
            </li>
            <li>
              <A_footer href="https://orda.shef.ac.uk/#orda-fac">
                Faculties
              </A_footer>
            </li>
            <li>
              <A_footer href="https://figshare.shef.ac.uk/collections/University_of_Sheffield_visualisation_showcase/3879643">
                Visualised datasets
              </A_footer>
            </li>
          </ul>
          <div className="mb-2 mt-4 text-md font-bold text-white">
            The University of Sheffield
          </div>
          <ul className="list-reset leading-normal">
            <li>
              <A_footer href="https://sheffield.ac.uk/library/rdm">
                Research Data Management support
              </A_footer>
            </li>
            <li>
              <A_footer href="https://www.sheffield.ac.uk/it-services">
                IT Services
              </A_footer>
            </li>
            <li>
              <A_footer href="https://rse.shef.ac.uk/">
                Research Software Engineering
              </A_footer>
            </li>
          </ul>
        </div>
        <div className="sm:w-2/12 h-auto sm:mt-0 mt-8">
          <div className="text-white text-md mb-2 font-bold">Collaboration</div>
          <ul className="list-reset leading-normal">
            <li>
              <Link className={linkClasses} to="/changelog">
                Changelog
              </Link>
            </li>
            <li>
              <A_footer href="https://github.com/researchdata-sheffield/dataviz-hub2/issues">
                Submit an Issue or feedback
              </A_footer>
            </li>
            <li>
              <A_footer href="https://github.com/researchdata-sheffield/dataviz-hub2">
                Github repository
              </A_footer>
            </li>
            <li>
              <A_footer href="https://github.com/researchdata-sheffield/dataviz-hub2/blob/development/CONTRIBUTING.md">
                Contributing
              </A_footer>
            </li>
          </ul>
        </div>

        <div className="sm:w-5/12 sm:flex sm:mt-0 mt-8 h-auto justify-center flex-wrap">
          <div className="sm:w-2/3 text-white text-lg mb-2 pr-6">
            <div className="font-semibold text-brand-blue">
              Data Visualisation Hub{" "}
            </div>
            <div className="text-gray-100 text-lg mb-2 font-medium">
              The University of Sheffield.
            </div>
            <p className="text-gray-400 leading-normal text-sm">
              To help our researchers make the most of their data and take
              advantage of tools, we have been working on Dataviz.Shef, a
              multi-pronged initiative to provide tools, training and build a
              community around interactive data visualisation at TUoS.
            </p>
          </div>

          <div className="sm:w-1/3 pl-6">
            <A_footer
              className="m-20"
              href="https://www.sheffield.ac.uk/"
              title="The University of Sheffield Logo"
            >
              <img
                className="w-11/12"
                src={university_logo}
                alt="The University of Sheffield Logo"
              ></img>
            </A_footer>
            <div className="flex flex-wrap text-center justify-around w-11/12 text-gray-300">
              <A_footer
                href="https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group"
                title="Join Google group"
              >
                <FaGoogle />
              </A_footer>
              <A_footer
                href="https://join.slack.com/t/shef-dataviz/signup"
                title="Join Slack Channel"
              >
                <FaSlack />
              </A_footer>
              <A_footer title="RSS Feed" target="_self" href="/rss.xml">
                <FaRss />
              </A_footer>
              <A_footer
                href="mailto:rdm@sheffield.ac.uk"
                title="contact us on email"
              >
                <MdEmail />
              </A_footer>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-500 leading-normal text-center text-sm pt-16">
        © 2018 - {currentYear.getFullYear()} The University of Sheffield.
      </p>
    </footer>
  );
});

export default Footer;

Footer.displayName = "Footer";

Footer.propTypes = {
  className: PropTypes.any
};
