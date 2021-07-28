export const chartNodeData = [
  {
    id: 'start',
    type: 'start',
    data: { label: 'Start!' },
    position: { x: 2900, y: 3000 }
  },
  {
    id: 'D.bothDepVars',
    type: 'decision',
    data: { label: 'Are they both dependent variables?' },
    position: { x: 3220, y: 3030 }
  },
  {
    id: 'D.typeOfDep',
    type: 'decision',
    data: { label: 'What type of variable is your dependent?' },
    position: { x: 3350, y: 2730 }
  },
  {
    id: 'D.avgDiff',
    type: 'decision',
    data: { label: 'Are you interested in the averaged difference between them?' },
    position: { x: 3350, y: 3330 }
  },
  // LEFT branches of "What type of variable is your dependent?"
  {
    id: 'D.assumeConstVar',
    type: 'decision',
    data: { label: 'Are you happy to assume constant variance?' },
    position: { x: 3000, y: 2730 }
  },
  {
    id: 'D.VarPropMean',
    type: 'decision',
    data: { label: 'Does spread increase with increases in mean?' },
    position: { x: 2650, y: 2730 }
  },
  {
    id: 'Info.normality',
    type: 'info',
    data: { label: 'Assume normality' },
    position: { x: 3000, y: 2400 }
  },
  // RIGHT Branches of "What type of variable is your dependent?"
  {
    id: 'D.howManyCats',
    type: 'decision',
    data: { label: 'How many categories?' },
    position: { x: 3700, y: 2730 }
  },
]