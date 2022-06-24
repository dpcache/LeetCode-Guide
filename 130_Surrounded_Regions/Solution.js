//Runtime: 95 ms, faster than 85.61% of JavaScript online submissions for Surrounded Regions.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
    const width = board[0].length;
    const height = board.length;
    
    // Loop columns from first row
    for (let i = 0; i < width; i++) {
        dfs(0, i);
    }
    
    // Loop rows from first column
    for (let i = 0; i < height; i++) {
        dfs(i, 0);
    }
    
    // Loop columns from bottom row 
    for (let i = 0; i < width; i++) {
        dfs(height - 1, i);
    }
    
    // Loop rows from bottom column
    for (let i = 0; i < height; i++) {
        dfs(i, width - 1);
        console.log(board[i][width - 1]);
    }
    
    // Scan for 0 to change it back to 'O'. 
    // Other 'O' not connected kill it by changing it to 'X'
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if(board[i][j] === 0) {
               board[i][j] = 'O' 
            } else if (board[i][j] = 'O') {
                board[i][j] = 'X';
            }
        }
    }

    return board;
    
    
    // DFS will change connected or border node to 0 if node is 'O'
    function dfs(row, column) {
        if (board?.[row]?.[column] === 'O') {
            board[row][column] = 0; 
            
            dfs(row + 1, column);
            dfs(row - 1, column);
            dfs(row, column + 1);
            dfs(row, column - 1);
            
        }
        
        return; 
    }
    
};