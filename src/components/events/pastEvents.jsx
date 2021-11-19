import React from "react";
import PropTypes from "prop-types";
import { BlackWhiteButton } from "../style/styleComponent";
import { shortenText, calculateUserLocalTime } from "../../utils/shared";

const PastEvents = ({ pastEvent }) => {
  return (
    <div className="w-full md:w-4/5 lg:w-4/12 2xl:w-3/12 lg:rounded-r-sm md:mt-10 lg:mt-0 p-6 pb-8 text-gray-100 border-t-8 border-gray-800 min-h-50 bg-gray-900 shadow-xl">
      <h1 className="text-xl pt-2 pb-6 font-semibold">Past Events</h1>

      {pastEvent.edges.map(({ node }) => {
        let summary = shortenText(node.summary, 15);
        let userLocalTime = calculateUserLocalTime(node.start.local);

        return (
          <button
            className="cursor-pointer flex flex-wrap p-4 w-full overflow-hidden group themeColourBorder text-left"
            key={node.id}
            onClick={() =>
              window.open(node.url, "_blank", "noopener, noreferrer")
            }
          >
            <p className="font-semibold text-md text-black leading-4">
              {node.name.text}
            </p>
            <p className="text-gray-700 text-xs leading-4 mt-1">{summary}</p>
            <p className="mt-2 text-xs text-black">{userLocalTime.time}</p>
          </button>
        );
      })}
      {pastEvent.edges.length > 0 && (
        <div className="flex justify-center w-full" title="More past events">
          <BlackWhiteButton
            onClick={() =>
              window.open(
                "https://www.eventbrite.co.uk/o/scholarly-communications-team-the-university-of-sheffield-library-7528476001",
                "_blank",
                "noopener, noreferrer"
              )
            }
            className="w-full mt-0 hover:bg-brand-blue hover:text-white"
          >
            . . .
          </BlackWhiteButton>
        </div>
      )}
    </div>
  );
};

export default PastEvents;

PastEvents.propTypes = {
  pastEvent: PropTypes.any
};
