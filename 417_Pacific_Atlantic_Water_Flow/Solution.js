/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    // We can go backwards. from ocean to the highest point.
    //  We trace all of higest point from pacific ocean.
    //  We trace all of higest point from atlantic ocean.
    //  We can have two set for each ocean of highest points. 
    //   
    // To get to the highest point. We compare currPoint have to be smaller than the next point 
    //  currPoint <= nextPoint, then we repeat using the next point in all directions. 
    //  everytime we visted a point, it mark it as visited and put it into the set. 
    
    const pacific = new Set();
    const atlantic = new Set();
    const result = [];
    
    // We can start using first row.
    for (let i = 0; i < heights[0].length; i++) {
        // now we search in all directions
        dfs(0, i, pacific);
        dfs(heights.length - 1, i, atlantic);
    }
    
    for (let i = 1; i < heights.length; i++) {
        dfs(i, 0, pacific)
        dfs(heights.length - 1 - i, heights[i].length - 1, atlantic);
    }
    
    return result;
    
    function dfs(row, column, ocean) {


        if (ocean.has(`${row}-${column}`)) return;
            ocean.add(`${row}-${column}`);

        if (pacific.has(`${row}-${column}`) && atlantic.has(`${row}-${column}`)) {
            result.push([row,column]);    
        }

        if (column < heights[0].length - 1 && heights[row][column] <= heights[row][column + 1]) {
            dfs(row, column + 1, ocean);
        }
        
        if (row > 0 && heights[row][column] <= heights[row - 1][column]) {
            dfs(row - 1, column, ocean);
        }

        if (row < heights.length - 1 && heights[row][column] <= heights[row + 1][column]) {
            dfs(row + 1, column, ocean);
        }

        if (column > 0 && heights[row][column] <= heights[row][column -1]) {
            dfs(row, column - 1, ocean);
        }
    
    }
    
};