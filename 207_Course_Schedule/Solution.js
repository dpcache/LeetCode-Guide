/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    
    const graph = new Map();
    const visited = new Set(); 
    
    for(let [node, e] of prerequisites){
        // e.g 0 => [1] then 0 => [1,2]
        let edges = graph.get(node) || [];
        edges.push(e);
        graph.set(node, edges);
    }
    
    
    for (let [n, e] of graph) {
        if (!dfs(n)) return false;
    }
    return true; 
    
    
    
    function dfs(n) {
        if(visited.has(n)) return false; 
        
        const edges = graph.get(n);
        if(!edges) return true;
        
        visited.add(n);
        for (let i = 0; i < edges.length; i++) {
            if (!dfs(edges[i])) {
                return false; 
            };
        }
        // This allow stop repeated dfs, that we already we know this is true. 
        graph.set(n, []);
        visited.delete(n);
        return true;
    }
};