/**
 * dataviz.shef.ac.uk
 * This visualisation is covered by a CC BY-SA 4.0 license.
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

/* eslint-disable react/prop-types */
import React, { useState, useCallback, useEffect } from "react"
import ReactFlow, { Controls, useZoomPanHelper } from "react-flow-renderer"
import {
  TriangleNodeComponent,
  DecisionNodeComponent,
  GreenNodeComponent,
  InfoNodeComponent,
  RedNodeComponent
} from "./nodeComponents"
import { getEdge, getNode, getNodesAndEdges } from "./utils"
import { chartNodeData } from "./nodeData"
import { chartEdgeData } from "./edgeData"
import { textForHelp } from "./textData"
import { FaToggleOff, FaToggleOn } from "react-icons/fa"
import { MdHelp } from "react-icons/md"

/***********************************
 * Flowchart Data and settings
 **********************************/
const nodeTypes = {
  start: TriangleNodeComponent,
  decision: DecisionNodeComponent,
  info: InfoNodeComponent,
  test: GreenNodeComponent,
  help: RedNodeComponent
}

const snapGrid = [15, 15]
const connectionLineStyle = { stroke: "#fff" }

// Initialise data
let groupedData = [...chartNodeData, ...chartEdgeData].map((el) => ({
  ...el,
  isHidden: el.id != "start",
  labelStyle: el.id.charAt(0) == "e" && { fontSize: ".95rem" }
}))

/**************************
 * Return flowchart
 * @returns
 *************************/
const flowChart = () => {
  const [displayChart, setDisplayChart] = useState(false)
  const [showAll, toggleShowAll] = useState(false)
  const [centreOnClick, toggleCentre] = useState(true)
  const [reactflowInstance, setReactflowInstance] = useState(null)
  const { setCenter } = useZoomPanHelper()
  const [showHelp, setShowHelp] = useState(false)
  // data for all edges and nodes
  const [elements, setElements] = useState(groupedData)
  // dialog box
  const [elementData, setElementData] = useState({ label: "", description: "" })
  //list of clicked nodes
  const [clickedNodes, setClickedNodes] = useState([])

  /****************************************
   * Utility functions for the flowchart
   ***************************************/

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi)
        localStorage.removeItem("dataviz-flowchart")
      }
      setTimeout(() => rfi.fitView(), 500)
    },
    [reactflowInstance]
  )

  /**
   * Handle show all button
   */
  const handleShowButton = useCallback(() => {
    if (!showAll) {
      localStorage.setItem("dataviz-flowchart", JSON.stringify(elements))

      setElements(groupedData.map((el) => ({ ...el, isHidden: false })))

      toggleShowAll(!showAll)
      setTimeout(() => reactflowInstance.fitView({ padding: 0.2 }), 100)
      return
    }

    const restore =
      JSON.parse(localStorage.getItem("dataviz-flowchart")) || groupedData

    setElements(restore)
    toggleShowAll(!showAll)
    setTimeout(() => reactflowInstance.fitView({ padding: 0.2 }), 100)
  })

  /**
   * Utility function for update decision node style
   */
  const updateNodeStyle = useCallback((elementId, action = "add") => {
    if (elementId == "start") {
      return
    }

    let domEl = document.querySelector(`div[data-id='${elementId}'] > div`)
    if (!domEl) {
      return
    }

    const type = domEl.dataset.type || ""
    if (type != "decision") {
      return
    }

    if (action == "remove") {
      domEl.style.border = "5px solid orange"
      domEl.style.background = "white"
      domEl.style.color = "black"
      return
    }

    domEl.style.border = "5px solid #00aeef"
    domEl.style.background = "rgba(34, 32, 31, 0.98)"
    domEl.style.color = "white"
  })

  /**
   * utility function for update current list of clicked nodes
   * @param {array} clickedNodes
   * @param {array} childIds
   * @param {object} element
   */
  const updateClickedNodes = useCallback(
    (OldClickedNodes, childIds, element) => {
      let newClickedNodes = OldClickedNodes
      const index = OldClickedNodes.indexOf(element.id)

      // if exists, remove from the array
      if (index !== -1) {
        newClickedNodes.splice(index, 1)
        updateNodeStyle(element.id, "remove")
      }
      // remove children nodes
      if (index !== -1 && childIds.length != 0) {
        for (let i in childIds) {
          let childIndex = newClickedNodes.indexOf(childIds[i])
          if (childIndex == -1) continue
          newClickedNodes.splice(childIndex, 1)
          updateNodeStyle(childIds[i], "remove")
        }
      }
      if (index == -1) {
        newClickedNodes.push(element.id)
        updateNodeStyle(element.id)
      }

      return newClickedNodes
    }
  )

  /**
   * Execute when nodes are clicked
   */
  const onElementClick = useCallback((event, element) => {
    if (showAll) {
      return
    }
    // Get all children nodes and edges
    const childIds = getNodesAndEdges(elements, element)

    // update clicked nodes
    let newClickedNodes = updateClickedNodes(clickedNodes, childIds, element)
    setClickedNodes(newClickedNodes)

    // Show/hide children elements
    let currentElements = elements
      .filter((el) => el.id != element.id)
      .map((el) => {
        if (!childIds.includes(el.id)) {
          return { ...el }
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
          }
        }

        // toggle child elements
        return {
          ...el,
          isHidden: !el.isHidden
        }
      })

    // for all elements, change property accordingly
    for (let i in currentElements) {
      if (currentElements[i].id.charAt(0) != "e") {
        continue
      }
      if (currentElements[i].isHidden) {
        currentElements[i].animated = false
        currentElements[i].style = {}
        continue
      }

      // highlight all edges between clicked nodes
      const includeSource = newClickedNodes.includes(currentElements[i].source)
      const includeTarget = newClickedNodes.includes(currentElements[i].target)

      if (!includeSource || !includeTarget) {
        currentElements[i].animated = false
        currentElements[i].style = {}
      }
      if (includeSource && includeTarget) {
        currentElements[i].animated = true
        currentElements[i].style = { stroke: "#00aeef" }
      }
    }

    setElements([...currentElements, element])

    if (centreOnClick) {
      setCenter(element.position.x, element.position.y, 1.1)
    }
  })

  /**
   * Execute when mouse enters nodes
   */
  const onNodeMouseEnter = useCallback((_event, node) => {
    setElementData(node.data)
    let el = document.querySelector("#nodeDescriptionBox")
    el.style.visibility = "visible"
    setTimeout(() => (el.style.opacity = 100), 300)

    let newElements = elements.map((element) => {
      if (element.target == node.id) {
        return {
          ...element,
          animated: true,
          style: {
            ...element?.style,
            stroke: element?.style?.stroke == "#00aeef" ? "#00aeef" : "orange"
          }
        }
      }
      return element
    })

    setElements(newElements)
  })

  /**
   * Execute when mouse leaves nodes
   */
  const onNodeMouseLeave = useCallback((_event, node) => {
    let el = document.querySelector("#nodeDescriptionBox")
    el.opacity = 0
    el.style.visibility = "hidden"

    let newElements = elements.map((element) => {
      if (element.target == node.id) {
        return {
          ...element,
          animated: element.style.stroke == "#00aeef",
          style: {
            ...element?.style,
            stroke: element?.style?.stroke == "#00aeef" ? "#00aeef" : "#fff"
          }
        }
      }
      return element
    })

    setElements(newElements)
  })

  useEffect(() => {
    if (clickedNodes.length < 7) {
      return
    }

    setTimeout(() => {
      let sidebar = document.getElementById("sidebar")
      sidebar.scrollTop = sidebar.scrollHeight
    }, 100)
  }, [elements])

  /****************************************
   * End of Utility functions
   ***************************************/

  return (
    <div>
      <button
        className="px-5 py-3 rounded-md bg-shefPurple text-white my-10"
        onClick={() => setDisplayChart(!displayChart)}
      >
        Click here to open the flowchart
      </button>
      <div
        className={`${
          displayChart ? "block" : "hidden"
        } w-full hideScrollBar min-h-100 fixed flex flex-wrap top-0 left-0`}
        style={{ zIndex: "100", height: "100vh", overflowY: "scroll" }}
      >
        <div
          id="flowChartWrap"
          className="relative w-full md:w-8/12 2xl:w-9/12 min-h-70 md:min-h-100 text-black"
        >
          <ReactFlow
            elements={elements}
            //onElementClick={onElementClick}
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
          <button
            className="z-10 absolute bottom-0 left-0 ml-16 mb-4 text-white flex text-3xl self-center cursor-pointer"
            style={{ alignItems: "center" }}
            onClick={() => handleShowButton()}
          >
            {showAll ? (
              <FaToggleOn
                style={{ filter: "drop-shadow(0px 1px 7px rgb(0, 0, 0))" }}
              />
            ) : (
              <FaToggleOff style={{ color: "#969696" }} />
            )}
            <span
              className={`${!showAll && "text-gray-300"} text-base ml-3`}
              style={{ textShadow: "0px 1px 5px #000" }}
            >
              Show all paths
            </span>
          </button>
          <button
            className="z-10 absolute bottom-0 left-0 ml-16 mb-12 text-white flex text-3xl self-center cursor-pointer"
            style={{ alignItems: "center" }}
            onClick={() => toggleCentre(!centreOnClick)}
          >
            {centreOnClick ? (
              <FaToggleOn
                style={{ filter: "drop-shadow(0px 1px 7px rgb(0, 0, 0))" }}
              />
            ) : (
              <FaToggleOff style={{ color: "#969696" }} />
            )}
            <span
              className={`${!centreOnClick && "text-gray-300"} text-base ml-3`}
              style={{ textShadow: "0px 1px 5px #000" }}
            >
              Follow clicked shapes
            </span>
          </button>
          <div
            id="nodeDescriptionBox"
            className="absolute p-4 bg-white shadow-2xl rounded-lg z-50 opacity-0 invisible"
            style={{
              transform: "translate(-50%, 0%)",
              left: "50%",
              bottom: "20px",
              width: "350px",
              boxShadow: "0 10px 50px -5px #00aeef",
              transition: "visibility .2s, opacity 0.5s linear"
            }}
          >
            <h1 className="text-base font-bold mb-2 leading-5">
              {elementData.label}
            </h1>
            <p className="text-sm leading-5">{elementData.description}</p>
          </div>
          <MdHelp
            title="Help / tutorial"
            onClick={() => setShowHelp(!showHelp)}
            className={`${
              showHelp && "text-green-200 text-5xl"
            } z-10 absolute bottom-0 right-0 m-6 text-white text-4xl cursor-pointer`}
          />
          <div
            data-for="help"
            className={`${
              !showHelp && "hidden"
            } rounded-xl shadow-2xl fixed z-10 p-5 bg-white`}
            style={{
              width: "650px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            {textForHelp.map((text) => {
              return (
                <div key={`help-${text.question}`}>
                  <h1 className="text-base mb-2 font-semibold">
                    {text.question}
                  </h1>
                  <p className="text-sm mb-3 leading-5 text-gray-700">
                    {text.answer}
                  </p>
                </div>
              )
            })}
            <div className="w-full mt-6 flex justify-end">
              <button
                onClick={() =>
                  window.open(
                    "https://shef-dataviz.slack.com/archives/C99CXQGK1"
                  )
                }
                className="mr-2 p-2 bg-red-100 text-red-700 border-red-200 border-1 text-base"
              >
                I need some help / I have suggestions
              </button>
              <button
                onClick={() => setShowHelp(!showHelp)}
                className="p-2 bg-green-100 text-green-700 border-green-200 border-1 text-base"
              >
                I&apos;ve got it
              </button>
            </div>
          </div>
        </div>

        {/* sidebar */}
        <div
          id="sidebar"
          className="w-full md:w-4/12 2xl:w-3/12 bg-white p-3 overflow-y-auto hideScrollBar"
          style={{ height: "100vh" }}
        >
          <div className="w-full flex flex-wrap pb-5 space-x-2 space-y-2 border-b-1 border-gray-100">
            <button
              title="Centre the flowchart"
              className="mt-2 ml-2 px-2 py-1 rounded-md bg-pink-600 hover:bg-pink-500 text-white font-semibold"
              onClick={() => reactflowInstance.fitView()}
            >
              Fit view
            </button>
            <button
              title="Reset the flowchart"
              className="px-2 py-1 rounded-md bg-pink-600 hover:bg-pink-500 text-white font-semibold"
              onClick={() => {
                setElements(groupedData)
                setClickedNodes([])
                reactflowInstance.fitView()
              }}
            >
              Restart
            </button>
            <button
              title="Exit this page"
              className="px-2 py-1 rounded-md bg-pink-700 hover:bg-pink-600 text-white font-semibold"
              onClick={() => setDisplayChart(!displayChart)}
            >
              CLOSE
            </button>
          </div>
          {/* Path tracking */}
          <div className="mt-5">
            <h1 className="font-semibold text-xl text-black">
              {clickedNodes.length >= 2 ? (
                "Your paths:"
              ) : (
                <span className="font-light text-lg">
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
            <div className="py-3">
              {clickedNodes.length >= 2 &&
                clickedNodes.map((node, index) => {
                  if (index == 0) {
                    return false
                  }
                  if (
                    index >= 2 &&
                    !getEdge(
                      elements,
                      clickedNodes[index - 1],
                      clickedNodes[index - 2]
                    )
                  ) {
                    return false
                  }

                  const currentNodeObj = getNode(elements, node)
                  const lastNode = getNode(elements, clickedNodes[index - 1])
                  const edge = getEdge(elements, node, lastNode.id)
                  const pathNotification =
                    !edge?.label &&
                    "Looks like you have jumped to a different path. Please unselect the shape you don't want."

                  return (
                    <div
                      key={`path-${node}`}
                      className="mt-2 flex flex-wrap justify-center w-full"
                    >
                      <div className="w-9/12 pr-3">
                        <div
                          title="Click to go to this node."
                          onClick={() =>
                            setCenter(
                              lastNode.position.x,
                              lastNode.position.y,
                              1.1
                            )
                          }
                          className="w-full p-2 text-base text-white rounded-md cursor-pointer"
                          style={{
                            border: "solid 2px #00aeef",
                            background: "rgba(0,0,0,.94)"
                          }}
                        >
                          {currentNodeObj.id == "D.avgDiff" && (
                            <h3 className="text-red-500">
                              WARNING: This path requires further clarity and
                              correction, if you are not sure about anything
                              please{" "}
                              <a
                                href="https://shef-dataviz.slack.com/archives/C99CXQGK1"
                                target="_blank"
                                rel="noreferrer"
                              >
                                contact us
                              </a>
                              .
                            </h3>
                          )}
                          {lastNode?.data?.label}
                        </div>
                      </div>
                      <div className="w-3/12 p-2 text-base text-center bg-blue-100 text-blue-700 border-1 border-blue-200 rounded-md">
                        {edge.label}
                      </div>
                      {pathNotification && (
                        <div className="mt-2 text-base rounded-md w-full border-1 border-yellow-200 bg-yellow-100 text-yellow-700 p-2">
                          {pathNotification}
                        </div>
                      )}
                      {(currentNodeObj.type == "help" ||
                        currentNodeObj.type == "test") && (
                        <div
                          className={`${
                            currentNodeObj.type == "help"
                              ? "border-red-200 bg-red-100 text-red-700"
                              : "border-green-200 bg-green-100 text-green-700"
                          } mt-2 border-1`}
                          style={{
                            width: "100%",
                            textAlign: "center",
                            padding: ".5rem",
                            borderRadius: ".375rem"
                          }}
                        >
                          <h1 className="font-bold mb-1">
                            {currentNodeObj.data.label}
                          </h1>
                          <p className="text-base">
                            {currentNodeObj.data?.description}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default flowChart
