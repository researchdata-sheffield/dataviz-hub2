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
    <div style={{background: 'rgba(255, 255, 255, .99)', height: '140px', textAlign: 'center', transform: 'rotate(45deg)', width: '140px', border: '4px solid orange', ...data.innerStyle}}>
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


const nodeTypes = {
  start: TriangleNodeComponent,
  decision: DecisionNodeComponent,
  info: InfoNodeComponent
};

const snapGrid = [20, 20];
const connectionLineStyle = { stroke: '#fff' };

// Initialise data
let groupedData = [...chartNodeData, ...chartEdgeData]
  .map(el => (
    {...el, isHidden: el.id != "start"}
  ));

/**
 * Return flow chart
 * @returns 
 */
const flowChart = () => {
  const [displayChart, setDisplayChart] = useState(true);
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const [elements, setElements] = useState(groupedData);
  const [showAll, toggleShowAll] = useState(false);

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

  const onElementClick = useCallback((event, element) => {
    const childIds = getNodesAndEdges(elements, element);

    // Show/hide
    let currentElements = elements
      .filter(el => el.id != element.id)
      .map(el => {
        if (!childIds.includes(el.id)) {
          return {...el};
        }

        return {...el, isHidden: !el.isHidden}
      });

    let newElement = element;
    let domEl = document.querySelector(`div[data-id='${newElement.id}'] > div`);

    if (newElement.type == "decision" && newElement.selected) {
      newElement.selected = false;
      domEl.style.border = '5px solid orange';
      domEl.style.background = 'white';
      domEl.style.color = 'black';
    } else if (newElement.type == "decision" && !newElement.selected) {
      newElement.selected = true;
      domEl.style.border = '5px solid #00aeef';
      domEl.style.background = 'rgba(34, 32, 31, 0.97)';
      domEl.style.color = 'white';
    }

    setElements([...currentElements, newElement]);
    //setTimeout(() => reactflowInstance.fitView({padding: .2}), 100);
  });

  return (
    <div>
      <button className="px-2 py-1 rounded-md bg-shefPurple text-white" onClick={() => setDisplayChart(!displayChart)}>What test to use?</button>
      <div className={`${displayChart ? 'block' : 'hidden'} w-full min-h-100 fixed flex flex-wrap top-0 left-0`} style={{zIndex: '100'}}>
        <div className="w-full md:w-10/12" style={{height: '100vh'}}>
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
        </div>
        <div className="w-full md:w-2/12 bg-white" style={{height: '100vh'}}>
          <div className="w-full flex flex-wrap">
            <button className="px-2 py-1 rounded-md bg-shefPurple text-white" onClick={() => setDisplayChart(!displayChart)}>Close</button>
          </div>
        </div>
        <button className="z-10 absolute bottom-0 left-0 ml-16 mb-4 text-white flex text-4xl self-center cursor-pointer" onClick={() => handleShowButton()}>
          {showAll ? <FaToggleOn /> : <FaToggleOff />}
          <span className="text-lg ml-3">Show all paths</span>
        </button>
      </div>
    </div>
  )
}

export default flowChart