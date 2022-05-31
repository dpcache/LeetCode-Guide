var numIslands = function(grid) {
    if (grid.length < 0) return 0;
    
    //row, coulumn
    const DIRECTIONS = [[1,0],[-1,0],[0,1],[0,-1]];
    let islandCount = 0;
    
    const Height = grid.length;
    const Width = grid[0].length; 
    
    
    for ( let i = 0; i < Height; i++ ) {
        for ( let j = 0; j < Width; j++) {
            if( grid[i][j] === "1") {
                dfs(i,j); 
                islandCount++;
            }
        }
    }
    
    return islandCount;
    
    
    function dfs(row, column) {
        if(row >= 0 && row < Height && column >= 0 && column < Width) {
            grid[row][column] = "0";
            for(let i = 0; i < DIRECTIONS.length; i++) {
                const findRow = row  +  DIRECTIONS[i][0];
                const findColumn = column +  DIRECTIONS[i][1];
                if( grid[findRow]?.[findColumn] === "1") {
                    dfs(findRow, findColumn);
                }
            }
            return;
        } 
        return;
    } 
}