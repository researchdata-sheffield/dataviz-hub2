/* eslint-disable react/prop-types */
import React, { memo } from "react";
import { Handle } from "react-flow-renderer";
import Consultation from "./images/consultation.png";
import TestImg from "./images/test.png";

const handleStyle = {
  borderRadius: 0,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "-1"
};

export const TriangleNodeComponent = memo(({ data }) => {
  return (
    <div
      className="random-border-colour"
      style={{
        width: 0,
        height: 0,
        borderTop: "100px solid transparent",
        borderBottom: "100px solid transparent",
        borderLeft: "200px solid rgba(255, 255, 255, .96)",
        position: "relative"
      }}
    >
      <div
        style={{
          margin: "-15px 0 0 -165px",
          fontSize: "1rem",
          fontWeight: "800"
        }}
      >
        {data.label}
      </div>
      <Handle
        type="source"
        position="right"
        id="b"
        style={{
          borderRadius: 0,
          zIndex: "-1",
          visibility: "hidden",
          marginRight: "10px"
        }}
      />
    </div>
  );
});
TriangleNodeComponent.displayName = "TriangleNodeComponent";

export const DecisionNodeComponent = memo(({ data }) => {
  return (
    <div
      data-type="decision"
      style={{
        background: "rgba(255, 255, 255, .99)",
        height: "140px",
        textAlign: "center",
        transform: "rotate(45deg)",
        width: "140px",
        border: "4px solid orange",
        ...data.innerStyle
      }}
    >
      <Handle
        type="target"
        id="a"
        style={{ ...handleStyle, visibility: "hidden" }}
      />
      <Handle
        type="source"
        id="b"
        style={{ ...handleStyle, visibility: "hidden" }}
      />
      <div
        style={{
          transform: "rotate(-45deg)",
          display: "table-cell",
          verticalAlign: "bottom",
          textAlign: "center",
          width: "110px",
          height: "100px",
          fontSize: ".88rem",
          lineHeight: 1.3
        }}
      >
        {data?.label}
      </div>
    </div>
  );
});
DecisionNodeComponent.displayName = "DecisionNodeComponent";

export const InfoNodeComponent = memo(({ data }) => {
  return (
    <div
      style={{
        borderRadius: "999px",
        background: "white",
        width: "150px",
        height: "150px",
        lineHeight: "150px",
        display: "table-cell",
        verticalAlign: "middle",
        border: "5px solid #959595"
      }}
    >
      <Handle
        type="target"
        id="a"
        style={{ ...handleStyle, visibility: "hidden" }}
      />
      <Handle
        type="source"
        id="b"
        style={{ ...handleStyle, visibility: "hidden" }}
      />
      <div
        style={{
          verticalAlign: "center",
          textAlign: "center",
          fontSize: ".88rem",
          lineHeight: 1.3
        }}
      >
        {data.label}
      </div>
    </div>
  );
});
InfoNodeComponent.displayName = "InfoNodeComponent";

const nodeCommonStyle = {
  borderRadius: "10px",
  width: "160px",
  height: "100px",
  lineHeight: "150px",
  display: "table-cell",
  verticalAlign: "middle"
};

export const GreenNodeComponent = memo(({ data }) => {
  return (
    <div
      style={{
        ...nodeCommonStyle,
        background: "#c1eabe",
        border: "5px solid #9af292"
      }}
    >
      <Handle type="target" id="a" style={{ ...handleStyle }} />
      <div
        style={{
          verticalAlign: "center",
          textAlign: "center",
          fontSize: ".91rem",
          lineHeight: 1.2,
          marginTop: "-30px"
        }}
      >
        {data.label}
      </div>
      <img
        alt="Test"
        src={TestImg}
        className="absolute"
        width="40"
        style={{ top: "69%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
});
GreenNodeComponent.displayName = "GreenNodeComponent";

export const RedNodeComponent = memo(({ data }) => {
  return (
    <div
      style={{
        ...nodeCommonStyle,
        background: "#fff1f0",
        border: "5px solid #ffa39e",
        color: "#f5222d"
      }}
    >
      <Handle type="target" id="a" style={{ ...handleStyle }} />
      <div
        style={{
          verticalAlign: "center",
          textAlign: "center",
          fontSize: ".95rem",
          lineHeight: 1.2
        }}
      >
        {data.label}
      </div>
      <img
        alt="Consultation"
        src={Consultation}
        className="absolute"
        width="50"
        style={{ right: "0px", bottom: "0px" }}
      />
    </div>
  );
});
RedNodeComponent.displayName = "RedNodeComponent";

/**
 * Styles for the animation

@keyframes random-border-colour {
  0% { border-left-color: rgb(7, 241, 191); }
  10% { border-left-color: #00aeef; }
  30% { border-left-color: #ea005e; }
  40% { border-left-color: #A3CE71; }
  50% { border-left-color: '#ffaf0f' }
  60% { border-left-color: '#bf0fff' }
  70% { border-left-color: '#251d5a' }
  80% { border-left-color: #a0aec0; }
  90% { border-left-color: rgb(253, 95, 109); }
}

.random-border-colour {
  color: white;
  animation: random-border-colour 20s ease infinite;
}
 */
