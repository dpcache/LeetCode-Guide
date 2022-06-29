export class Solution {
    /**
     * @param n: An integer
     * @param edges: a list of undirected edges
     * @return: true if it's a valid tree, or false
     */
    validTree(n, edges) {
  
      const parents = [];
      for (let i = 0; i < n; i++) {
          parents.push(i);
      }
  
      const find = (x) => {
        if ( parents[x] === x ) {
          return x;
        } else {
          return parents[x] = find(parents[x]);
        }
      }
  
      const union = (x, y) => {
        const deepParentOfY = find(y);
        parents[deepParentOfY] = find(x); // or parents[find(x)] = find(y); 
      }
  
      for(let [x, y] of edges) {
        if (find(a) === find(b)) {
          return false
        } else { 
          union(x, y);
        }
      }
  
      return true;
    }
}