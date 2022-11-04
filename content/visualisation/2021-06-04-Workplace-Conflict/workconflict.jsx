/**
 * dataviz.shef.ac.uk
 * This visualisation is covered by a CC BY-SA 4.0 license.
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

import React from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
const ResponsiveWaffle = loadable(() => import("@nivo/waffle"), {
  resolveComponent: (components) => components.ResponsiveWaffle
});
import depression from "./depression.png";

const THEME = {
  legends: {
    text: {
      fontSize: 18
    }
  },
  tooltip: {
    color: "#000"
  }
};

const COSTDATA = [
  {
    id: "Resignations",
    label: "Resignations",
    value: 11.9,
    color: "#468df3"
  },
  {
    id: "Disciplinary dismissals",
    label: "Disciplinary dismissals",
    value: 10.5,
    color: "#ba72ff"
  },
  {
    id: "Sickness",
    label: "Sickness absences",
    value: 2.2,
    color: "#a1cfff"
  }
];

/**
 * This component uses tailwindcss (https://tailwindcss.com/) framework for styling of some elements.
 * Visit the website for reference of className.
 * E.g. className="p-5 relative" translates to "padding: 1.25rem; position: relative"
 */
const Workconflict = () => {
  return (
    <div
      id="visualisation"
      // linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)
      style={{
        backgroundImage: `linear-gradient(145deg, #1f2124 0%, #323537 100%)`,
        width: "600px",
        height: "1300px",
        borderRadius: "20px",
        backgroundSize: "cover",
        padding: "1rem",
        position: "relative",
        margin: "0 auto"
      }}
    >
      <h1
        style={{
          color: "#fff",
          lineHeight: 1.3,
          fontFamily: "Source Serif Pro, serif",
          fontSize: "3.75rem",
          fontWeight: "700",
          marginBottom: "2.5rem",
          paddingBottom: ".5rem"
        }}
      >
        Workplace conflict costs employers <br />{" "}
        <span
          style={{
            background:
              "linear-gradient(90deg, rgba(255,85,28,1) 31%, rgba(244,117,96,1) 100%)"
          }}
        >
          £28 billion
        </span>{" "}
        a year
      </h1>

      <img style={{ margin: "1rem auto" }} src={depression} />
      <h1 className="text-white text-base text-right">
        <span
          style={{
            background:
              "linear-gradient(90deg, rgba(255,85,28,1) 31%, rgba(244,117,96,1) 100%)"
          }}
        >
          9.7 million
        </span>
        &nbsp;employees <br /> (out of 31 million) experienced <br />
        conflict in 2018/2019.
        <br />
      </h1>

      <div
        style={{
          minHeight: "400px",
          maxHeight: "600px",
          maxWidth: "560px",
          marginTop: "3.5rem",
          marginLeft: "auto",
          marginRight: "auto",
          height: "100%"
        }}
      >
        <h1
          style={{
            color: "rgb(209, 213, 219)",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "1.875rem",
            lineHeight: "2.25rem"
          }}
        >
          How do these costs break down?
        </h1>
        <h3
          style={{
            color: "rgb(156, 163, 175)",
            textAlign: "center",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            marginBottom: "-2rem"
          }}
        >
          One square = £1 billion
        </h3>
        <ResponsiveWaffle
          data={COSTDATA}
          theme={THEME}
          total={28}
          rows={6}
          columns={5}
          fillDirection="top"
          padding={0}
          height={560}
          margin={{ top: 10, right: 10, bottom: 10, left: 240 }}
          //colors={{ scheme: 'blues' }}
          //colors={d => d.color}
          borderWidth={0.2}
          borderColor="#fff"
          animate={true}
          emptyColor="#e8e8e8"
          motionStiffness={90}
          motionDamping={11}
          legends={[
            {
              anchor: "left",
              direction: "column",
              justify: false,
              translateX: -240,
              translateY: 0,
              itemsSpacing: 5,
              itemWidth: 70,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 1,
              itemTextColor: "#e8e8e8",
              symbolSize: 20
            }
          ]}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          margin: "1.25rem",
          fontSize: "0.75rem",
          lineHeight: "1rem",
          textAlign: "right",
          color: "rgb(107, 114, 128)"
        }}
      >
        <h1
          style={{
            lineHeight: "1",
            fontSize: "1.125rem",
            fontWeight: "800",
            whiteSpace: "nowrap"
          }}
        >
          Dataviz.Shef
        </h1>
        <h1 style={{ lineHeight: "1", whiteSpace: "nowrap" }}>
          Source: The University of Sheffield - News
        </h1>
      </div>
    </div>
  );
};

export default Workconflict;

Workconflict.propTypes = {
  data: PropTypes.any
};
