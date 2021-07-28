export const chartEdgeData = [
  {
    id: 'start',
    source: 'start',
    target: 'D.bothDepVars',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
  },
  {
    id: 'eD.bothDepVars-Yes',
    source: 'D.bothDepVars',
    target: 'D.avgDiff',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
  {
    id: 'eD.bothDepVars-No',
    sourceHandle: 'a',
    source: 'D.bothDepVars',
    target: 'D.typeOfDep',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  {
    id: 'eD.typeOfDep-Scalar',
    sourceHandle: 'a',
    source: 'D.typeOfDep',
    target: 'D.assumeConstVar',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Scalar'
  },
  {
    id: 'eD.typeOfDep-ordinal',
    sourceHandle: 'a',
    source: 'D.typeOfDep',
    target: 'D.howManyCats',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Ordinal'
  },
  {
    id: 'eD.assumeConstVar-Yes',
    sourceHandle: 'b',
    source: 'D.assumeConstVar',
    target: 'Info.normality',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
  {
    id: 'eD.assumeConstVar-No',
    sourceHandle: 'a',
    source: 'D.assumeConstVar',
    target: 'D.VarPropMean',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  }
]