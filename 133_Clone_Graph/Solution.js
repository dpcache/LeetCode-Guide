/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

 function cloneGraph(node) {
	if (!node) return null;
    
    const oldToNewNodeMap = new Map();
    
    function dfs(oldNode) {
        // If map have just return it to link newNode to newNode.
        if(oldToNewNodeMap.has(oldNode)) 
            return oldToNewNodeMap.get(oldNode);
        
        // Map doesn't have that neighbor node. Will need to create that.
        const newNode = new Node();
        newNode.val = oldNode.val; 
        oldToNewNodeMap.set(oldNode, newNode);
        
        for (let oldNeighbor of oldNode.neighbors) {
            newNode.neighbors.push(dfs(oldNeighbor));  
        }
        return newNode;
    }
    
    return dfs(node);

};