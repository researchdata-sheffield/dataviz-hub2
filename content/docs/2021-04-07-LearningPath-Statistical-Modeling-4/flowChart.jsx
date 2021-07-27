/* eslint-disable react/prop-types */
import React, { memo, useState, useCallback } from 'react'
import ReactFlow, { Handle, MiniMap, Controls } from 'react-flow-renderer';
import { chartNodeData } from "./chartNode"
import { edgeNodeData } from "./chartEdge"


const nodeTypes = {
  start: TriangleNodeComponent,
  decision: DecisionNodeComponent
};

const snapGrid = [20, 20];
const groupedData = [...chartNodeData, ...edgeNodeData];
const connectionLineStyle = { stroke: '#fff' };

function flowChart() {
  const [reactflowInstance, setReactflowInstance] = useState(null);
  const [elements] = useState(groupedData);

  const onLoad = useCallback(
    (rfi) => {
      if (!reactflowInstance) {
        setReactflowInstance(rfi);
        console.log('flow loaded:', rfi);
      }
    },
    [reactflowInstance]
  );

  return (
    <div className="w-full min-h-100">
      <div className="w-full md:w-10/12">
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
      <div className="w-full md:w-2/12">

      </div>
    </div>
  )
}

export default flowChart








const TriangleNodeComponent = memo(({ data }) => {
  return (
    <div style={{width: 0, height: 0, borderTop: '80px solid transparent', borderBottom: '80px solid transparent', borderLeft: '160px solid rgba(255, 255, 255, .6)', position: 'relative'}}>
      <div style={{margin: '-25px 0 0 -125px'}}>{data.label}</div>
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
    <div style={{background: 'rgba(255, 255, 255, .6', height: '120px', textAlign: 'center', transform: 'rotate(45deg)', width: '120px', border: '4px solid orange'}}>
      <Handle 
        type="target" 
        position="top" 
        style={{ borderRadius: 0 }}
      />
      <div style={{transform: 'rotate(-45deg)', display: 'table-cell', verticalAlign: 'middle', textAlign: 'center', width: '100px', height: '100px'}}>{data.label}</div>
      <Handle
        type="source"
        position="top"
        style={{ borderRadius: 0 }}
      />
    </div>
  )
})

DecisionNodeComponent.displayName = "DecisionNodeComponent"