import React from "react";
import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { shortenText, calculateUserLocalTime } from "../../utils/shared";
import NoThumb from "../../images/no_thumbnail.png";

const UpcomingEvents = ({ allEventbriteEvents }) => {
  let size = allEventbriteEvents.edges.length;

  if (allEventbriteEvents && size > 0) {
    return (
      <div id="upcomingEvents">
        {allEventbriteEvents.edges.map(({ node }) => {
          //moment(node.start.local, "DD-MMMM-YYYY hh:mm") >= moment() &&
          let summary = shortenText(node.summary, 20);
          let userLocalTime = calculateUserLocalTime(node.start.local);

          return (
            <a
              className="flex flex-col-reverse md:flex-row flex-wrap w-full hover:shadow-xl my-3 lg:my-2 group"
              style={{
                position: "relative",
                transition: ".5s ease",
                background: "white",
                color: "rgb(55, 65, 81)",
                overflowY: "hidden"
              }}
              href={node.url}
              key={node.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full md:w-9/12 py-4 px-4 group-hover:bg-brand-blue">
                <p className="font-semibold text-lg text-black leading-5">
                  {node.name.text}
                </p>
                <p className="text-gray-700 mt-1 leading-tight text-sm group-hover:text-black">
                  {summary}
                </p>
                <p className="flex pt-4 text-sm">
                  <FaClock className="mr-1" />
                  {userLocalTime.time}
                </p>

                <div className="flex flex-wrap text-sm">
                  <p className="flex">
                    {node.online_event && (
                      <FaMapMarkerAlt className="mr-1 mt-1" />
                    )}{" "}
                    {node.online_event && "Online Event"}
                  </p>
                  <p className="flex">
                    {node.venue && <FaMapMarkerAlt className="mr-1 mt-1" />}
                    {node.venue && node.venue.name && node.venue.name + ", "}
                    {node.venue &&
                      node.venue.address.address_1 &&
                      node.venue.address.address_1 + ", "}
                    {node.venue &&
                      node.venue.address.city &&
                      node.venue.address.city + ", "}
                    {node.venue &&
                      node.venue.address.postal_code &&
                      node.venue.address.postal_code}
                  </p>
                </div>
              </div>
              <div
                className="w-full md:w-3/12 overflow-hidden relative min-h-15 2xl:min-h-15"
                style={{
                  backgroundImage: `url(${
                    node?.logo?.original?.url || NoThumb
                  })`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  transition: ".5s ease"
                }}
              ></div>
              <button
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden group-hover:block py-1 px-3 font-semibold text-md bg-black text-white hover:bg-gray-700 absolute"
                style={{ bottom: "0%", right: "0%" }}
              >
                Register
              </button>
            </a>
          );
        })}
      </div>
    );
  } else {
    return (
      <span className="mt-10 text-gray-900">
        No upcoming events at the moment, please come back later.
      </span>
    );
  }
};

export default UpcomingEvents;

UpcomingEvents.propTypes = {
  allEventbriteEvents: PropTypes.any
};
