var findRedundantConnection = function(edges) {
    // First element not used, use it as placeholder, need it to access first node to first parent correctly.
    let parents = [99]; 
    for (let i = 1; i < edges.length + 1; i++) {
        parents.push(i);
    }
    //console.log(parents);
    
    function find(x) {
        if (x === parents[x])  {
            return parents[x];
        } else { 
            // path compression.
            return parents[x] = find(parents[x]);
        }
    }
    
    // Find if they all come from the same tree.
    function union(x,y) {
        //console.log(x,y);
        parents[find(x)] = find(y); // or parents[find(y)] = find(x);
        //console.log("find(x): " + find(x));
        //console.log("UNION: " + parents);
    }
    
    for (let [a,b] of edges) {
        if (find(a) === find(b)) return [a,b]
        else union(a,b)
    }
};