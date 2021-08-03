/* eslint-disable react/prop-types */
import React, { memo, useState, useCallback } from 'react'
import ReactFlow, { Handle, MiniMap, Controls, useZoomPanHelper } from 'react-flow-renderer';
import { chartNodeData } from "./chartNode"
import { chartEdgeData } from "./chartEdge"
import { FaToggleOff, FaToggleOn } from "react-icons/fa"
import Consultation from "./consultation.gif"
import TestGif from "./test.gif"
import UniversityLogo from "./TUOS_PRIMARY_LOGO_LINEAR_BLACK.png"

/*********************************
 * Define custom node components
 *********************************/
const TriangleNodeComponent = memo(({ data }) => {
  return (
    <div className="random-border-colour" style={{width: 0, height: 0, borderTop: '100px solid transparent', borderBottom: '100px solid transparent', borderLeft: '200px solid rgba(255, 255, 255, .96)', position: 'relative'}}>
      <div style={{margin: '-15px 0 0 -165px', fontSize: '1rem', fontWeight: '800'}}>{data.label}</div>
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ borderRadius: 0, zIndex: '-1', visibility: 'hidden', marginRight: '10px' }}
      />
    </div>
  )
})
TriangleNodeComponent.displayName = "TriangleNodeComponent"

const DecisionNodeComponent = memo(({ data }) => {
  return (
    <div data-type="decision" style={{background: 'rgba(255, 255, 255, .99)', height: '140px', textAlign: 'center', transform: 'rotate(45deg)', width: '140px', border: '4px solid orange', ...data.innerStyle}}>
      <Handle 
        type="target"
        id="a" 
        style={{ borderRadius: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '-1', visibility: 'hidden' }}
      />
      <Handle 
        type="source"
        id="b" 
        style={{ borderRadius: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '-1', visibility: 'hidden' }}
      />
      <div style={{transform: 'rotate(-45deg)', display: 'table-cell', verticalAlign: 'bottom', textAlign: 'center', width: '110px', height: '100px', fontSize: '.88rem', lineHeight: 1.3, }}>{data.label}</div>
    </div>
  )
})
DecisionNodeComponent.displayName = "DecisionNodeComponent"

const InfoNodeComponent = memo(({ data }) => {
  return (
    <div style={{borderRadius: '999px', background: 'white', width: '150px', height: '150px', lineHeight: '150px', display: 'table-cell', verticalAlign: 'middle', border: '5px solid #959595'}}>
      <Handle 
        type="target"
        id="a" 
        style={{ borderRadius: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '-1', visibility: 'hidden' }}
      />
      <Handle 
        type="source"
        id="b" 
        style={{ borderRadius: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '-1', visibility: 'hidden' }}
      />
      <div style={{verticalAlign: 'center', textAlign: 'center', fontSize: '.88rem', lineHeight: 1.3 }}>{data.label}</div>
    </div>
  )
})
InfoNodeComponent.displayName = "InfoNodeComponent"

const GreenNodeComponent = memo(({ data }) => {
  return (
    <div style={{borderRadius: '10px', background: '#c1eabe', width: '160px', height: '100px', lineHeight: '150px', display: 'table-cell', verticalAlign: 'middle', border: '5px solid #9af292'}}>
      <Handle 
        type="target"
        id="a" 
        style={{ borderRadius: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '-1' }}
      />
      <div style={{verticalAlign: 'center', textAlign: 'center', fontSize: '.91rem', lineHeight: 1.2, marginTop: '-30px' }}>{data.label}</div>
      <img alt="Test" src={TestGif} className="absolute" width="40" style={{top: '69%', left: '50%', transform: 'translate(-50%, -50%)'}} />
    </div>
  )
})
GreenNodeComponent.displayName = "GreenNodeComponent"

const RedNodeComponent = memo(({ data }) => {
  return (
    <div style={{borderRadius: '10px', background: '#fff1f0', width: '160px', height: '100px', lineHeight: '150px', display: 'table-cell', verticalAlign: 'middle', border: '5px solid #ffa39e', color: '#f5222d'}}>
      <Handle 
        type="target"
        id="a" 
        style={{ borderRadius: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '-1' }}
      />
      <div style={{verticalAlign: 'center', textAlign: 'center', fontSize: '.95rem', lineHeight: 1.2 }}>{data.label}</div>
      <img alt="Consultation" src={Consultation} className="absolute" width="50" style={{right: '0px', bottom: '0px'}} />
    </div>
  )
})
RedNodeComponent.displayName = "RedNodeComponent"


/************************************************/
/******** END of custom node components *********/
/************************************************/

/**
 * Get nodes and edges of an clicked element recursively
 * Strategy:
 * -> Return current element's direct node and edges if children are not visible yet.
 * OR
 * -> If children are visible, recursively find visible children (of children) by setting "deepLevel" to true.
 *  If "deepLevel" is true, it will skip hidden children.
 * @param {array} data current flow chart data
 * @param {object} element element that user clicked 
 * @param {boolean} deepLevel whether to get data more than one level deep
 * @returns {array} array of element ids.
 */
export const getNodesAndEdges = (data, element, deepLevel = false) => {
  // Get all child edges of current element
  const edges = data.filter(item => item.source == element.id);

  if (edges.length == 0) {
    return [];
  }

  if (deepLevel && edges[0].isHidden) {
    return [];
  }

  // get nodes on the other end of edges
  const edgeTargetIds = edges.map(el => el.target);

  const nodes = data.filter(node => edgeTargetIds.includes(node.id));
  const nodeIds = nodes.map(el => el.id);
  
  // check if child nodes is showing
  let childShowing = (nodes && nodes[0] && !nodes[0].isHidden) || false;

  // if children nodes are showing, recursively get their children
  if (childShowing && !element.isHidden) {
    let childNodesAndEdges = nodes
      .filter(node => !node.isHidden)
      .map(node => getNodesAndEdges(data, node, true));

    let mergeAllArray = [].concat.apply([], childNodesAndEdges);
    return [...edges.map(el => el.id), ...nodeIds, ...mergeAllArray];
  }

  return [...edges.map(el => el.id), ...nodeIds];
}

/**
 * Get edge according to node ids
 * @param {array} data 
 * @param {string} firstNodeId 
 * @param {string} secondNodeId 
 * @returns object
 */
export const getEdge = (data, firstNodeId, secondNodeId) => {
  if (data.length <= 1) { return false; }

  const result = data.filter(edge => 
    (edge.source == firstNodeId && edge.target == secondNodeId) 
    | (edge.source == secondNodeId && edge.target == firstNodeId)
  )

  if (result.length == 0) { return false; }

  return result[0];
}

/***********************************
 * Flow chart Data and settings
 **********************************/
const nodeTypes = {
  start: TriangleNodeComponent,
  decision: DecisionNodeComponent,
  info: InfoNodeComponent,
  test: GreenNodeComponent,
  help: RedNodeComponent
};

const snapGrid = [15, 15];
const connectionLineStyle = { stroke: '#fff' };

// Initialise data
let groupedData = [...chartNodeData, ...chartEdgeData]
  .map(el => (
    {
      ...el, 
      isHidden: el.id != "start",
      labelStyle: el.id.charAt(0) == 'e' && { fontSize: '.95rem' }
    }
  ));



/**************************
 * Return flow chart
 * @returns 
 *************************/
const flowChart = () => {
  const [displayChart, setDisplayChart] = useState(true);
  const [showAll, toggleShowAll] = useState(false);
  const [centreOnClick, toggleCentre] = useState(true);
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const { setCenter } = useZoomPanHelper();
  // data for all edges and nodes
  const [elements, setElements] = useState(groupedData);
  // dialog box
  const [elementData, setElementData] = useState({label: '', description: ''});
  //list of clicked nodes
  const [clickedNodes, setClickedNodes] = useState(['']);


  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
        localStorage.removeItem('dataviz-flowchart');
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
      localStorage.setItem('dataviz-flowchart', JSON.stringify(elements));
      
      setElements(
        groupedData.map(el => ({...el, isHidden: false}))
      );
      
      toggleShowAll(!showAll);
      setTimeout(() => reactflowInstance.fitView({padding: .2}), 100);
      return;
    }
    
    const restore = JSON.parse(localStorage.getItem('dataviz-flowchart')) || groupedData;
    
    setElements(restore);
    toggleShowAll(!showAll);
    setTimeout(() => reactflowInstance.fitView({padding: .2}), 100);
  });

  /**
   * Utility function for update decision node style
   */
  const updateNodeStyle = useCallback((elementId, action = "add") => {
    if (elementId == "start") { return; }
    
    let domEl = document.querySelector(`div[data-id='${elementId}'] > div`);
    if (!domEl) { return; }

    const type = domEl.dataset.type || '';
    if (type != "decision") { return; }

    if (action == "remove") {
      domEl.style.border = '5px solid orange';
      domEl.style.background = 'white';
      domEl.style.color = 'black';
      return;
    } 

    domEl.style.border = '5px solid #00aeef';
    domEl.style.background = 'rgba(34, 32, 31, 0.98)';
    domEl.style.color = 'white';
  })

  /**
   * utility function for update current list of clicked nodes
   * @param {array} clickedNodes 
   * @param {array} childIds 
   * @param {object} element 
   */
  const updateClickedNodes = useCallback((OldClickedNodes, childIds, element) => {
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
  })

  /**
   * Execute when nodes are clicked
   */
  const onElementClick = useCallback((event, element) => {
    if (showAll) { return; }
    // Get all children nodes and edges
    const childIds = getNodesAndEdges(elements, element);

    // update clicked nodes
    let newClickedNodes = updateClickedNodes(clickedNodes, childIds, element);
    setClickedNodes(newClickedNodes);

    // Show/hide children elements
    let currentElements = elements
      .filter(el => el.id != element.id)
      .map(el => {
        if (!childIds.includes(el.id)) {
          return {...el};
        }

        // If child node already shown from other node, don't hide it
        if (el.id.charAt(0) != 'e' && !el.isHidden && getEdge(elements, element.id, el.id)) {
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
      });

    // for all elements, change property accordingly
    for (let i in currentElements) {
      if (currentElements[i].id.charAt(0) != 'e') {
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
        currentElements[i].style = {stroke: '#00aeef'};
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
    let el = document.querySelector('#nodeDescriptionBox');
    el.style.visibility = "visible";
    setTimeout(() => el.style.opacity = 100, 300);

    let newElements = elements.map(element => {
      if (element.target == node.id) {
        return {
          ...element,
          animated: true,
          style: {...element.style, stroke: element.style.stroke == '#00aeef' ? '#00aeef' : 'orange'}
        }
      }
      return element;
    });

    setElements(newElements)
  });

  /**
   * Execute when mouse leaves nodes
   */
  const onNodeMouseLeave = useCallback((_event, node) => {
    let el = document.querySelector('#nodeDescriptionBox');
    el.opacity = 0;
    el.style.visibility = "hidden";

    let newElements = elements.map(element => {
      if (element.target == node.id) {
        return {
          ...element,
          animated: (element.style.stroke == '#00aeef'),
          style: {...element.style, stroke: element.style.stroke == '#00aeef' ? '#00aeef' : '#fff'}
        }
      }
      return element;
    });

    setElements(newElements)
  })

  return (
    <div>
      <button className="px-3 py-2 rounded-md bg-shefPurple text-white" onClick={() => setDisplayChart(!displayChart)}>Which statistical test to use for two variables?</button>
      <div 
        className={`${displayChart ? 'block' : 'hidden'} w-full min-h-100 fixed flex flex-wrap top-0 left-0`} 
        style={{zIndex: '100'}}
      >
        <div 
          id="flowChartWrap" 
          className="relative w-full md:w-9/12 2xl:w-10/12" 
          style={{height: '100vh'}}
        >
          <ReactFlow
            elements={elements}
            //onElementClick={onElementClick}
            style={{ background: 'linear-gradient(215deg, #251d5a 10%, #000 100%)' }}
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
            <MiniMap
              nodeStrokeColor={(n) => {
                if (n.type === 'start') return '#0041d0';
                if (n.type === 'decision') return '#ff9500';
                if (n.type === 'selectorNode') return '#00aeef';
                if (n.type === 'output') return '#9bf542';
              }}
            />
            <Controls />
          </ReactFlow> 
          <button className="z-10 absolute bottom-0 left-0 ml-16 mb-4 text-white flex text-3xl self-center cursor-pointer" style={{alignItems: 'center'}} onClick={() => handleShowButton()}>
            {showAll ? <FaToggleOn style={{filter: 'drop-shadow(0px 1px 7px rgb(0, 0, 0))'}} /> : <FaToggleOff style={{color: '#969696'}} />}
            <span className={`${!showAll && 'text-gray-300'} text-base ml-3`} style={{textShadow: '0px 1px 5px #000'}}>Show all paths</span>
          </button>
          <button className="z-10 absolute bottom-0 left-0 ml-16 mb-12 text-white flex text-3xl self-center cursor-pointer" style={{alignItems: 'center'}} onClick={() => toggleCentre(!centreOnClick)}>
            {centreOnClick ? <FaToggleOn style={{filter: 'drop-shadow(0px 1px 7px rgb(0, 0, 0))'}} /> : <FaToggleOff style={{color: '#969696'}} />}
            <span className={`${!centreOnClick && 'text-gray-300'} text-base ml-3`} style={{textShadow: '0px 1px 5px #000'}}>Follow clicked nodes</span>
          </button>
          <div 
            id="nodeDescriptionBox" 
            className="absolute p-4 bg-white shadow-2xl rounded-lg z-50 opacity-0 invisible" 
            style={{transform: 'translate(-50%, 0%)', left: '50%', bottom: '20px', width: '350px', boxShadow: '0 10px 50px -5px #00aeef', transition: 'visibility .2s, opacity 0.5s linear'}}
          >
            <h1 className="font-bold mb-2 leading-5">{elementData.label}</h1>
            <p className="text-sm leading-5">{elementData.description}</p>
          </div>
          <img src={UniversityLogo} alt="TUoS Logo" className="absolute" style={{right: '0%', top: '0%', margin: '30px'}} width="150" />
        </div>

        {/* sidebar */}
        <div className="w-full md:w-3/12 2xl:w-2/12 bg-white p-3" style={{height: '100vh'}}>
          <div className="w-full flex flex-wrap pb-5 space-x-2 space-y-2 border-b-1 border-gray-100">
            <button 
              title="Centre the flow chart" 
              className="mt-2 ml-2 px-2 py-1 rounded-md bg-pink-600 hover:bg-pink-500 text-white font-semibold" 
              onClick={() => reactflowInstance.fitView()}
            >Fit view</button>
            <button 
              title="Reset the flow chart" 
              className="px-2 py-1 rounded-md bg-pink-600 hover:bg-pink-500 text-white font-semibold" 
              onClick={() => {setElements(groupedData); reactflowInstance.fitView()}}
            >Restart</button>
            <button 
              title="Exit this page" className="px-2 py-1 rounded-md bg-pink-600 hover:bg-pink-500 text-white font-semibold" 
              onClick={() => setDisplayChart(!displayChart)}
            >CLOSE</button>
          </div>
          <div className="mt-5">
              <h1 className="font-bold text-xl">Your paths:</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default flowChart