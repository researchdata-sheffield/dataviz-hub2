/**
 * dataviz.shef.ac.uk
 * This visualisation is covered by a CC BY-SA 4.0 license.
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

/* eslint-disable react/prop-types */
import React, { useState, useCallback, useEffect } from "react";
import ReactFlow, { Controls, useZoomPanHelper } from "react-flow-renderer";
import sanitizeHtml from "sanitize-html";
import {
  FlowchartDiv,
  FlowchartWrap,
  UtilityBtn,
  DescriptionBox,
  HelpDiv,
  HelpText,
  Sidebar,
  SidebarUtility,
  PathTrackingDiv,
  ColourBox
} from "./style";
import {
  TriangleNodeComponent,
  DecisionNodeComponent,
  GreenNodeComponent,
  InfoNodeComponent,
  RedNodeComponent
} from "./nodeComponents";
import { getEdge, getNode, getNodesAndEdges } from "./utils";
import { textForHelp } from "./data/textData";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { loadingLayer, useFetch } from "@utils/hooks/useFetch";

const sanitizeOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
    "img",
    "Link",
    "code",
    "br"
  ]),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    "*": ["className", "style", "class"],
    a: ["href", "name", "target", "rel"]
  },
  allowedClasses: {
    ...sanitizeHtml.defaults.allowedClasses,
    "*": ["*"]
  }
};

/***********************************
 * Flowchart Data and settings
 **********************************/
const nodeTypes = {
  start: TriangleNodeComponent,
  decision: DecisionNodeComponent,
  info: InfoNodeComponent,
  test: GreenNodeComponent,
  help: RedNodeComponent
};

const snapGrid = [15, 15];
const connectionLineStyle = { stroke: "#fff" };

/**************************
 * Return flowchart
 * @returns
 *************************/
const FlowChart = () => {
  const [displayChart, setDisplayChart] = useState(false);
  const [showAll, toggleShowAll] = useState(false);
  const [centreOnClick, toggleCentre] = useState(true);
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const { setCenter } = useZoomPanHelper();
  const [showHelp, setShowHelp] = useState(false);
  // data for all edges and nodes
  const [groupedData, setGroupedData] = useState(null);
  // current elements
  const [elements, setElements] = useState(null);
  // dialog box, element description
  const [elementData, setElementData] = useState({
    label: "",
    description: ""
  });
  //list of clicked nodes
  const [clickedNodes, setClickedNodes] = useState([]);
  const url =
    "https://raw.githubusercontent.com/researchdata-sheffield/dataviz-hub2-data/main/visualisation/2021-08-04-Which-Statistical-Test-To-Use-For-Two-Variables";
  const [loadingNode, chartNodeData] = useFetch(`${url}/nodeData.js`, false);
  const [loadingEdge, chartEdgeData] = useFetch(`${url}/edgeData.js`, false);

  useEffect(() => {
    if (!chartEdgeData || !chartNodeData) {
      return;
    }
    // Initialise data
    let data = [...eval(chartNodeData), ...eval(chartEdgeData)].map((el) => ({
      ...el,
      isHidden: el.id != "start", // only show the start button
      labelStyle: el.id.charAt(0) == "e" && { fontSize: ".95rem" } // set edges' font size
    }));

    setGroupedData(data);
    setElements(data);
  }, [chartNodeData, chartEdgeData]);

  /****************************************
   * Utility functions for the flowchart
   ***************************************/

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
        localStorage.removeItem("dataviz-flowchart");
      }
      setTimeout(() => rfi.fitView(), 500);
    },
    [reactflowInstance]
  );

  /**
   * Handle show all button
   */
  const handleShowButton = useCallback(() => {
    if (!showAll) {
      localStorage.setItem("dataviz-flowchart", JSON.stringify(elements));

      setElements(groupedData.map((el) => ({ ...el, isHidden: false })));

      toggleShowAll(!showAll);
      setTimeout(() => reactflowInstance.fitView({ padding: 0.2 }), 100);
      return;
    }

    const restore =
      JSON.parse(localStorage.getItem("dataviz-flowchart")) || groupedData;

    setElements(restore);
    toggleShowAll(!showAll);
    setTimeout(() => reactflowInstance.fitView({ padding: 0.2 }), 100);
  });

  /**
   * Utility function for update decision node style
   */
  const updateNodeStyle = useCallback((elementId, action = "add") => {
    if (elementId == "start") {
      return;
    }

    let domEl = document.querySelector(`div[data-id='${elementId}'] > div`);
    if (!domEl) {
      return;
    }

    const type = domEl.dataset.type || "";
    if (type != "decision") {
      return;
    }

    if (action == "remove") {
      domEl.style.border = "5px solid orange";
      domEl.style.background = "white";
      domEl.style.color = "black";
      return;
    }

    domEl.style.border = "5px solid #00aeef";
    domEl.style.background = "rgba(34, 32, 31, 0.98)";
    domEl.style.color = "white";
  });

  /**
   * utility function for update current list of clicked nodes
   * @param {array} clickedNodes
   * @param {array} childIds
   * @param {object} element
   */
  const updateClickedNodes = useCallback(
    (OldClickedNodes, childIds, element) => {
      let newClickedNodes = OldClickedNodes;
      const index = OldClickedNodes.indexOf(element.id);

      // if exists, remove from the array
      if (index !== -1) {
        newClickedNodes.splice(index, 1);
        updateNodeStyle(element.id, "remove");
      }
      // remove children nodes
      if (index !== -1 && childIds.length != 0) {
        for (let i in childIds) {
          let childIndex = newClickedNodes.indexOf(childIds[i]);
          if (childIndex == -1) continue;
          newClickedNodes.splice(childIndex, 1);
          updateNodeStyle(childIds[i], "remove");
        }
      }
      if (index == -1) {
        newClickedNodes.push(element.id);
        updateNodeStyle(element.id);
      }

      return newClickedNodes;
    }
  );

  /**
   * Execute when nodes are clicked
   */
  const onElementClick = useCallback((event, element) => {
    if (showAll) {
      return;
    }
    // Get all children nodes and edges
    const childIds = getNodesAndEdges(elements, element);

    // update clicked nodes
    let newClickedNodes = updateClickedNodes(clickedNodes, childIds, element);
    setClickedNodes(newClickedNodes);

    // Show/hide children elements
    let currentElements = elements
      .filter((el) => el.id != element.id)
      .map((el) => {
        if (!childIds.includes(el.id)) {
          return { ...el };
        }

        // If child node already shown from other node, don't hide it
        if (
          el.id.charAt(0) != "e" &&
          !el.isHidden &&
          getEdge(elements, element.id, el.id)
        ) {
          return {
            ...el,
            isHidden: !newClickedNodes.includes(element.id)
          };
        }

        // toggle child elements
        return {
          ...el,
          isHidden: !el.isHidden
        };
      });

    // for all elements, change property accordingly
    for (let i in currentElements) {
      if (currentElements[i].id.charAt(0) != "e") {
        continue;
      }
      if (currentElements[i].isHidden) {
        currentElements[i].animated = false;
        currentElements[i].style = {};
        continue;
      }

      // highlight all edges between clicked nodes
      const includeSource = newClickedNodes.includes(currentElements[i].source);
      const includeTarget = newClickedNodes.includes(currentElements[i].target);

      if (!includeSource || !includeTarget) {
        currentElements[i].animated = false;
        currentElements[i].style = {};
      }
      if (includeSource && includeTarget) {
        currentElements[i].animated = true;
        currentElements[i].style = { stroke: "#00aeef" };
      }
    }

    setElements([...currentElements, element]);

    if (centreOnClick) {
      setCenter(element.position.x, element.position.y, 1.1);
    }
  });

  /**
   * Execute when mouse enters nodes
   */
  const onNodeMouseEnter = useCallback((_event, node) => {
    setElementData(node.data);
    let el = document.querySelector("#nodeDescriptionBox");
    el.style.visibility = "visible";
    setTimeout(() => (el.style.opacity = 100), 300);

    let newElements = elements.map((element) => {
      if (element.target == node.id) {
        return {
          ...element,
          animated: true,
          style: {
            ...element?.style,
            stroke: element?.style?.stroke == "#00aeef" ? "#00aeef" : "orange"
          }
        };
      }
      return element;
    });

    setElements(newElements);
  });

  /**
   * Execute when mouse leaves nodes
   */
  const onNodeMouseLeave = useCallback((_event, node) => {
    let el = document.querySelector("#nodeDescriptionBox");
    el.style.opacity = 0;
    el.style.visibility = "hidden";

    let newElements = elements.map((element) => {
      if (element.target == node.id) {
        return {
          ...element,
          animated: element.style.stroke == "#00aeef",
          style: {
            ...element?.style,
            stroke: element?.style?.stroke == "#00aeef" ? "#00aeef" : "#fff"
          }
        };
      }
      return element;
    });

    setElements(newElements);
  });

  /**
   * When add new node to the sidebar, scroll to the bottom
   */
  useEffect(() => {
    if (clickedNodes.length < 7) {
      return;
    }
    setTimeout(() => {
      const sidebar = document.getElementById("sidebar");
      sidebar.scrollTop = sidebar.scrollHeight;
    }, 100);
  }, [elements]);

  /****************************************
   * End of Utility functions
   ***************************************/

  if (loadingNode || loadingEdge || !groupedData) {
    return loadingLayer();
  }

  return (
    <div>
      <button
        style={{
          padding: ".75rem 1.25rem",
          borderRadius: ".375rem",
          backgroundColor: "rgb(37, 29, 90)",
          color: "white",
          margin: "2.5rem auto"
        }}
        onClick={() => setDisplayChart(!displayChart)}
      >
        Click here to open the flowchart
      </button>
      <FlowchartDiv displayChart={displayChart} className="hideScrollBar">
        <FlowchartWrap id="flowChartWrap">
          <ReactFlow
            elements={elements}
            style={{
              background: "linear-gradient(215deg, #251d5a 10%, #000 100%)"
            }}
            onLoad={onLoad}
            nodeTypes={nodeTypes}
            connectionLineStyle={connectionLineStyle}
            snapToGrid={true}
            snapGrid={snapGrid}
            defaultZoom={0.8}
            onElementClick={onElementClick}
            onNodeMouseEnter={onNodeMouseEnter}
            onNodeMouseLeave={onNodeMouseLeave}
          >
            <Controls />
          </ReactFlow>

          {/* Utility buttons on the bottom left */}
          <UtilityBtn
            onClick={() => handleShowButton()}
            style={{ marginBottom: "1rem" }}
          >
            {showAll ? <FaToggleOn /> : <FaToggleOff />}
            <span style={{ color: !showAll && "rgb(209, 213, 219)" }}>
              Show all paths
            </span>
          </UtilityBtn>
          <UtilityBtn
            onClick={() => toggleCentre(!centreOnClick)}
            style={{ marginBottom: "3rem" }}
          >
            {centreOnClick ? <FaToggleOn /> : <FaToggleOff />}
            <span style={{ color: !centreOnClick && "rgb(209, 213, 219)" }}>
              Follow clicked shapes
            </span>
          </UtilityBtn>

          {/* Description box on hover nodes */}
          <DescriptionBox id="nodeDescriptionBox">
            <h1>{elementData.label}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(
                  elementData.description || "",
                  sanitizeOptions
                )
              }}
            ></p>
          </DescriptionBox>

          {/* Help button (& its content) on the bottom right */}
          <MdHelp
            title="Help / tutorial"
            onClick={() => setShowHelp(!showHelp)}
            style={{
              zIndex: "10",
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: "1.5rem",
              color: showHelp ? "rgb(167, 243, 208)" : "white",
              fontSize: showHelp ? "3rem" : "2.25rem",
              cursor: "pointer"
            }}
          />
          <HelpDiv data-for="help" style={{ display: !showHelp && "none" }}>
            {textForHelp.map((text) => {
              return (
                <HelpText key={`help-${text.question}`}>
                  <h1>{text.question}</h1>
                  <p>{text.answer}</p>
                </HelpText>
              );
            })}
            <div
              style={{
                width: "100%",
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <button
                onClick={() =>
                  window.open(
                    "https://shef-dataviz.slack.com/archives/C99CXQGK1"
                  )
                }
                style={{
                  marginRight: ".5rem",
                  padding: ".5rem",
                  backgroundColor: "rgb(254, 226, 226)",
                  color: "rgb(185, 28, 28)",
                  border: "solid 1px rgb(254, 202, 202)",
                  fontSize: "1rem",
                  lineHeight: "1.5rem"
                }}
              >
                I need some help / I have suggestions
              </button>
              <button
                onClick={() => setShowHelp(!showHelp)}
                style={{
                  padding: ".5rem",
                  backgroundColor: "rgb(209, 250, 229)",
                  color: "rgb(4, 120, 87)",
                  border: "solid 1px rgb(167, 243, 208)",
                  fontSize: "1rem",
                  lineHeight: "1.5rem"
                }}
              >
                I&apos;ve got it
              </button>
            </div>
          </HelpDiv>
        </FlowchartWrap>

        {/* sidebar */}
        <Sidebar id="sidebar" className="hideScrollBar">
          <SidebarUtility>
            <button
              title="Centre the flowchart"
              onClick={() => reactflowInstance.fitView()}
            >
              Fit view
            </button>
            <button
              title="Reset the flowchart"
              onClick={() => {
                setElements(groupedData);
                setClickedNodes([]);
                reactflowInstance.fitView();
              }}
            >
              Restart
            </button>
            <button
              title="Exit this page"
              onClick={() => setDisplayChart(!displayChart)}
            >
              CLOSE
            </button>
          </SidebarUtility>
          {/* Path tracking */}
          <div style={{ marginTop: "1.25rem" }}>
            <h1
              style={{
                fontWeight: "600",
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                color: "black"
              }}
            >
              {clickedNodes.length >= 2 ? (
                "Your paths:"
              ) : (
                <span
                  style={{
                    fontWeight: "300",
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem"
                  }}
                >
                  &#10140; Please click the first two shapes to start. <br />
                  <br />
                  &#10140; Click on questions (diamond shape) to see more
                  options. <br />
                  <br />
                  &#10140; This flowchart is draggable and zoomable. <br />
                  <br />
                  &#10140; The screen will follow the clicked shapes by default.
                  You can use the button on the bottom left to turn this off.
                  <br />
                  <br />
                  &#10140; FAQ on the bottom right.
                </span>
              )}
            </h1>
            <div style={{ padding: ".75rem auto" }}>
              {clickedNodes.length >= 2 &&
                clickedNodes.map((node, index) => {
                  if (index == 0) {
                    return false;
                  }
                  {
                    /* Check if there is an edge between two nodes */
                  }
                  if (
                    index >= 2 &&
                    !getEdge(
                      elements,
                      clickedNodes[index - 1],
                      clickedNodes[index - 2]
                    )
                  ) {
                    return false;
                  }

                  const currentNodeObj = getNode(elements, node);
                  const lastNode = getNode(elements, clickedNodes[index - 1]);
                  const edge = getEdge(elements, node, lastNode.id);
                  const pathNotification =
                    !edge?.label &&
                    "Looks like you have jumped to a different path. Please unselect the shape you don't want.";

                  return (
                    <PathTrackingDiv key={`path-${node}`}>
                      <div className="nodeLabel">
                        <div
                          title="Click to go to this node."
                          onClick={() =>
                            setCenter(
                              lastNode.position.x,
                              lastNode.position.y,
                              1.1
                            )
                          }
                        >
                          {lastNode?.data?.label}
                        </div>
                      </div>
                      <div className="edgeLabel">{edge.label}</div>
                      {/* Warning box when the user jumped to different path */}
                      {pathNotification && (
                        <div
                          style={{
                            marginTop: ".5rem",
                            fontSize: "1rem",
                            lineHeight: "1.5rem",
                            borderRadius: ".375rem",
                            width: "100%",
                            border: "solid 1px rgb(253, 230, 138)",
                            backgroundColor: "rgb(254, 243, 199)",
                            color: "rgb(180, 83, 9)",
                            padding: ".5rem"
                          }}
                        >
                          {pathNotification}
                        </div>
                      )}
                      {/* Colour box when reaching help or test node */}
                      {(currentNodeObj.type == "help" ||
                        currentNodeObj.type == "test") && (
                        <ColourBox type={currentNodeObj.type}>
                          <h1>{currentNodeObj.data.label}</h1>
                          <p>{currentNodeObj.data?.description}</p>
                        </ColourBox>
                      )}
                    </PathTrackingDiv>
                  );
                })}
            </div>
          </div>
        </Sidebar>
      </FlowchartDiv>
    </div>
  );
};

export default FlowChart;
