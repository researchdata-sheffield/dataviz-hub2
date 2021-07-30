/* eslint-disable react/prop-types */
import React, { memo, useState, useCallback } from 'react'
import ReactFlow, { Handle, MiniMap, Controls } from 'react-flow-renderer';
import { chartNodeData } from "./chartNode"
import { chartEdgeData } from "./chartEdge"
import { FaToggleOff, FaToggleOn } from "react-icons/fa"

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
        style={{ borderRadius: 0 }}
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
        position="top" 
        style={{ borderRadius: 0, left: 0 }}
      />
      <div style={{transform: 'rotate(-45deg)', display: 'table-cell', verticalAlign: 'bottom', textAlign: 'center', width: '110px', height: '100px', fontSize: '.88rem', lineHeight: 1.3, }}>{data.label}</div>
      <Handle
        type="source"
        id="b"
        position="bottom"
        style={{ borderRadius: 0, right: '-4px', left: 'unset', transform: 'unset', bottom: '-4px' }}
      />
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
        position="top" 
        style={{ borderRadius: 0 }}
      />
      <div style={{verticalAlign: 'center', textAlign: 'center', fontSize: '.88rem', lineHeight: 1.3 }}>{data.label}</div>
      <Handle
        type="source"
        id="b"
        position="bottom"
        style={{ borderRadius: 0 }}
      />
    </div>
  )
})
InfoNodeComponent.displayName = "InfoNodeComponent"

const GreenNodeComponent = memo(({ data }) => {
  return (
    <div style={{borderRadius: '10px', background: '#c1eabe', width: '150px', height: '80px', lineHeight: '150px', display: 'table-cell', verticalAlign: 'middle', border: '5px solid #9af292'}}>
      <Handle 
        type="target"
        id="a" 
        position="top" 
        style={{ borderRadius: 0 }}
      />
      <div style={{verticalAlign: 'center', textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.3 }}>{data.label}</div>
      <Handle
        type="source"
        id="b"
        position="bottom"
        style={{ borderRadius: 0 }}
      />
    </div>
  )
})
GreenNodeComponent.displayName = "GreenNodeComponent"

const RedNodeComponent = memo(({ data }) => {
  return (
    <div style={{borderRadius: '10px', background: '#fadbdb', width: '150px', height: '80px', lineHeight: '150px', display: 'table-cell', verticalAlign: 'middle', border: '5px solid #f9aeae'}}>
      <Handle 
        type="target"
        id="a" 
        position="top" 
        style={{ borderRadius: 0 }}
      />
      <div style={{verticalAlign: 'center', textAlign: 'center', fontSize: '1.1rem', lineHeight: 1.3 }}>{data.label}</div>
      <Handle
        type="source"
        id="b"
        position="bottom"
        style={{ borderRadius: 0 }}
      />
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
  // Get all child of current element
  const edges = data.filter(item => item.source == element.id);

  if (edges.length == 0) {
    return [];
  }

  if (deepLevel && edges[0].isHidden) {
    return [];
  }

  const edgeTargetIds = edges.map(el => el.target);

  const nodes = data.filter(node => edgeTargetIds.includes(node.id));
  const nodeIds = nodes.map(el => el.id);
  
  // check if child node is showing
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
    {...el, isHidden: el.id != "start"}
  ));



/**************************
 * Return flow chart
 * @returns 
 *************************/
const flowChart = () => {
  const [displayChart, setDisplayChart] = useState(true);
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const [elements, setElements] = useState(groupedData);
  const [showAll, toggleShowAll] = useState(false);
  const [elementData, setElementData] = useState({label: '', description: ''});
  const [clickedNodes, setClickedNodes] = useState(['']);

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
        console.log('flow loaded:', rfi);
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
    domEl.style.background = 'rgba(34, 32, 31, 0.97)';
    domEl.style.color = 'white';
  })

  /**
   * utility function for update current list of clicked nodes
   * @param {array} clickedNodes 
   * @param {array} childIds 
   * @param {object} element 
   */
  const updateClickedNodes = useCallback((clickedNodes, childIds, element) => {
    let newClickedNodes = clickedNodes;
    const index = clickedNodes.indexOf(element.id);

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

        if (el.id.charAt(0) != 'e') {
          let domEl = document.querySelector(`div[data-id='${el.id}'] > div`);
          if(domEl) {
            domEl.dataset.highlight = false;
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
  });

  /**
   * Execute when mouse enters nodes
   */
  const onNodeMouseEnter = useCallback((_event, node) => {
    setElementData(node.data);
    let el = document.querySelector('#nodeDescriptionBox');
    el.style.visibility = "visible";
    setTimeout(() => el.style.opacity = 100, 300);
  });

  /**
   * Execute when mouse leaves nodes
   */
  const onNodeMouseLeave = useCallback(() => {
    let el = document.querySelector('#nodeDescriptionBox');
    el.opacity = 0;
    el.style.visibility = "hidden";
  })

  return (
    <div>
      <button className="px-2 py-1 rounded-md bg-shefPurple text-white" onClick={() => setDisplayChart(!displayChart)}>What test to use?</button>
      <div className={`${displayChart ? 'block' : 'hidden'} w-full min-h-100 fixed flex flex-wrap top-0 left-0`} style={{zIndex: '100'}}>
        <div id="flowChartWrap" className="relative w-full md:w-10/12" style={{height: '100vh'}}>
          <ReactFlow
            elements={elements}
            //onElementClick={onElementClick}
            style={{ background: 'linear-gradient(45deg, #251d5a 10%, #000 100%)' }}
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
          <button className="z-10 absolute bottom-0 left-0 ml-16 mb-4 text-white flex text-4xl self-center cursor-pointer" style={{alignItems: 'center'}} onClick={() => handleShowButton()}>
            {showAll ? <FaToggleOn /> : <FaToggleOff style={{color: '#969696'}} />}
            <span className="text-base ml-3">Show all paths</span>
          </button>
          <div 
            id="nodeDescriptionBox" 
            className="absolute p-4 bg-white shadow-2xl rounded-lg z-50 opacity-0 invisible" 
            style={{transform: 'translate(-50%, 0%)', left: '50%', bottom: '20px', width: '350px', boxShadow: '0 10px 50px -5px #00aeef', transition: 'visibility .2s, opacity 0.5s linear'}}
          >
            <h1 className="font-bold mb-2 leading-5">{elementData.label}</h1>
            <p className="text-sm leading-4">{elementData.description}</p>
          </div>
        </div>
        <div className="w-full md:w-2/12 bg-white" style={{height: '100vh'}}>
          <div className="w-full flex flex-wrap">
            <button className="px-2 py-1 rounded-md bg-shefPurple text-white" onClick={() => setDisplayChart(!displayChart)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default flowChart