import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import SEO from "../components/shared/seo";
import PropTypes from "prop-types";
import UpcomingEvents from "../components/events/upcomingEvents";
import PastEvents from "../components/events/pastEvents";
import PastEventsBlog from "../components/events/pastEventsBlog";
import moment from "moment";
import { calculateUserLocalTime } from "../utils/shared";

const Events = ({ data: { eventBrite, pastEvent, pastEventBlog } }) => {
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
    <>
      <SEO
        title="Events"
        keywords={[
          "the university of sheffield",
          "data visualisation",
          "data visualisation hub",
          "research",
          "dataviz events",
          "dataviz.shef"
        ]}
      />
      <div
        className="flex flex-wrap grow-0 items-center justify-center min-h-100"
        style={{
          backgroundColor: "rgb(255,121,180)",
          backgroundImage:
            "linear-gradient(225deg, rgba(255,121,180,1) 20%, rgba(255,163,251,1) 50%, rgba(41,197,255,1) 82%)"
        }}
      >
        <div className="flex flex-wrap w-full justify-center my-16 lg:my-24">
          <div
            className="relative w-full lg:w-7/12 p-6 pb-10 text-black overflow-auto min-h-70 lg:rounded-l-sm shadow-xl"
            style={{
              background: "#fbfbfb",
              borderTop: "solid 8px rgb(230 230 230)"
            }}
          >
            <h1 className="inline-block text-2xl font-semibold">
              Upcoming Events
            </h1>
            <div className="text-gray-800 mt-2 mb-8 text-sm" id="dateTime">
              {currentDate} ({userTimezone})
            </div>
            <UpcomingEvents allEventbriteEvents={eventBrite} />
            <h3 className="absolute bottom-0 left-0 p-6 text-sm">
              All dates for upcoming and past events are displayed in your
              timezone <span className="font-semibold">{userTimezone}</span>.
            </h3>
          </div>
          <PastEvents pastEvent={pastEvent} />
        </div>
        <PastEventsBlog pastEventBlog={pastEventBlog} />
      </div>
    </>
  );
};

export default Events;

Events.propTypes = {
  data: PropTypes.any
};

export const eventQuery = graphql`
  query {
    eventBrite: allEventbriteEvents(
      limit: 4
      sort: { fields: start___local, order: ASC }
      filter: { id: { ne: "777" }, isFuture: { eq: true } }
    ) {
      ...EventbriteEventsEdge
    }

    pastEvent: allEventbriteEvents(
      limit: 5
      sort: { fields: start___local, order: DESC }
      filter: { id: { ne: "777" }, isFuture: { eq: false } }
    ) {
      ...EventbriteEventsEdge
    }

    pastEventBlog: allMdx(
      limit: 5
      filter: {
        frontmatter: { category: { in: "Events" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          id
          frontmatter {
            date(formatString: "dddd, DD MMMM YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
