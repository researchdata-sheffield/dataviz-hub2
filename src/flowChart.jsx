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
    <div style={{...data.innerStyle, background: 'rgba(255, 255, 255, .99)', height: '140px', textAlign: 'center', transform: 'rotate(45deg)', width: '140px', border: '4px solid orange'}}>
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

const nodeTypes = {
  start: TriangleNodeComponent,
  decision: DecisionNodeComponent,
  info: InfoNodeComponent
};

const snapGrid = [20, 20];
const groupedData = [...chartNodeData, ...chartEdgeData];
const connectionLineStyle = { stroke: '#fff' };


/**
 * Return flow chart
 * @returns 
 */
const flowChart = () => {
  const [displayChart, setDisplayChart] = useState(true);
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const [elements, setElements] = useState(groupedData.filter((item) => item.id == "start"));
  const [showAll, toggleShowAll] = useState(false);

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
        console.log('flow loaded:', rfi);
        localStorage.removeItem('dataviz-flowchart');
      }
      setTimeout(() => rfi.fitView(), 1000);
    },
    [reactflowInstance]
  );

  const handleShowButton = useCallback(() => {
    if (!showAll) {
      localStorage.setItem('dataviz-flowchart', JSON.stringify(elements));
      setElements(groupedData);
      toggleShowAll(!showAll);
      return;
    }
    const restore = JSON.parse(localStorage.getItem('dataviz-flowchart')) || groupedData.filter((item) => item.id == "start");
    setElements(restore);
    toggleShowAll(!showAll);
  });

  const onElementClick = useCallback((event, element) => {
    // TODO: start element replication
    // check if element's children already showing
    const edges = groupedData.filter(item => item.source == element.id);
    const childId = edges.map(el => el.target);
    const nodes = groupedData.filter(node => childId.includes(node.id));

    console.log(nodes)

    const elementsToAdd = [...edges, ...nodes];
    let elementsToRemove = element.id == "start" ? [] : [element];

    let newElement = element.id != "start" ? element : '';

    if (newElement) {
      newElement.data.innerStyle = {};
    }

    // if element to add is already showing, remove them
    const intersect = elements.filter(el => elementsToAdd.includes(el));
    
    if (intersect.length != 0) {
      elementsToRemove = [...elementsToRemove, ...intersect];

      setElements([
        newElement || {},
        ...elements.filter(el => !elementsToRemove.includes(el)) // remove elements 
      ]);

      return;
    }

    // remove current element, add current element with styles, add element's children
    newElement.data.innerStyle = {border: '4px solid #00aeef'};

    setElements([
      ...elements.filter(el => !elementsToRemove.includes(el)),
      ...elementsToAdd,
      newElement || {}
    ])
    console.log(elements)
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
            defaultZoom={1.5}
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
          <span className="text-xl ml-3">Show all paths</span>
        </button>
      </div>
    </div>
  )
}

export default flowChart