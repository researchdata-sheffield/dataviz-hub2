export const chartNodeData = [
  {
    id: '1',
    type: 'start',
    data: { label: '<h1>Start!</h1><br/><p>Two variables</p>' },
    position: { x: 1200, y: 1200 }
  },
  {
    id: '2',
    type: 'decision',
    data: { label: 'Are they both dependent variables' },
    position: { x: 1300, y: 1200 }
  },
  {
    id: '2Y',
    type: 'decision',
    data: { label: 'Are you interested in the averaged difference between them?' },
    position: { x: 1300, y: 1300 }
  },
  {
    id: '2N',
    type: 'decision',
    data: { label: 'What type of variable is your dependent?' },
    position: { x: 1300, y: 1100 }
  }
]