/**
 * Get nodes and edges of an clicked element recursively
 * Strategy:
 * -> Return current element's direct node and edges if children are not visible yet.
 * OR
 * -> If children are visible, recursively find visible children (of children) by setting "deepLevel" to true.
 *  If "deepLevel" is true, it will skip hidden children.
 * @param {array} data current flowchart data
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

export const getNode = (data, nodeId) => {
  if (data.length <= 1) { return false; }

  const result = data.filter(node => node.id == nodeId);

  if (result.length == 0) { return false; }

  return result[0];
}