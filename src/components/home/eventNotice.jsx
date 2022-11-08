import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import moment from "moment-timezone";
import Fade from "react-reveal/Fade";
import { shortenText, calculateUserLocalTime } from "../../utils/shared";
import NoThumb from "../../images/no_thumbnail.png";

const EventNotice = ({ eventBrite }) => {
  const UPDATE_TIME_MS = 30000;
  const [currentDate, setDate] = useState(
    moment().format("ddd DD MMMM YYYY, hh:mm A")
  );
  let userTimezone = calculateUserLocalTime(currentDate).timezone;

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment().format("ddd DD MMMM YYYY, hh:mm A"));
    }, UPDATE_TIME_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black w-full">
      <Fade duration={1000}>
        <div
          id="eventNotice"
          className="p-2 w-full text-gray-800 flex-col flex-wrap overflow-auto shadow-md border-t-1 border-gray-100 relative bg-white"
        >
          {eventBrite.edges.map(({ node }) => {
            let summary = node.summary ? shortenText(node.summary, 30) : "";
            let userLocalTime = calculateUserLocalTime(node.start.local);

            return (
              <div key={node.id}>
                <div className="text-gray-700 text-sm w-full font-bold p-3">
                  {currentDate} ({userTimezone})
                </div>

                <a
                  className="flex flex-wrap w-full overflow-hidden max-h-90 text-gray-700 group pb-2 px-2"
                  style={{ fontFamily: "Source Serif Pro" }}
                  href={node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-full md:w-3/12 overflow-hidden self-center"
                    src={node?.logo?.original?.url || NoThumb}
                    alt={`Thumbnail: ${summary}`}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      minHeight: "180px"
                    }}
                  />
                  <div className="w-full md:w-9/12 pb-2 px-4">
                    <h1 className="inline-block font-semibold xl:text-xl">
                      <p className="text-brand-blue text-2xl xl:text-3xl inline-block">
                        NEXT
                      </p>{" "}
                      event: &nbsp;
                      <p className="inline-block text-lg xl:text-xl font-bold">
                        {node.name.text ? node.name.text : "No next event"}
                      </p>
                    </h1>
                    <p className="text-gray-600 hidden md:flex lg:flex xl:flex leading-tight text-sm xl:text-base">
                      {summary}
                    </p>
                    <p className="flex pt-2 text-sm xl:text-base">
                      <FaClock className="mr-1" />
                      {userLocalTime.time} ({userLocalTime.timezone})
                    </p>
                    <div className="flex flex-wrap">
                      <div className="w-full md:w-5/6 text-sm xl:text-base">
                        <p className="flex">
                          {node.online_event && (
                            <FaMapMarkerAlt className="mr-1 mt-1" />
                          )}{" "}
                          {node.online_event && "Online Event"}
                        </p>
                        <p className="flex">
                          {node.venue && (
                            <FaMapMarkerAlt className="mr-1 mt-1" />
                          )}
                          {node?.venue?.name && node.venue.name + ", "}
                          {node?.venue?.address?.address_1 &&
                            node.venue.address.address_1 + ", "}
                          {node?.venue?.address?.city &&
                            node.venue.address.city + ", "}
                          {node?.venue?.address?.postal_code || ""}
                        </p>
                      </div>
                      <div className="flex flex-wrap w-full md:w-1/6 content-center justify-center hidden-xs hidden-md">
                        <button
                          href={node.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden group-hover:flex shadow-sm -mt-4 py-2 px-5 text-lg bg-brand-black text-white hover:text-brand-black hover:bg-brand-blue"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
};

export default EventNotice;

EventNotice.propTypes = {
  eventBrite: PropTypes.any
};
