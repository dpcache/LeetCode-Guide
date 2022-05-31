/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    if (word.length < 1) return false;
    let height = board.length;
    let width = board[0].length;
    let count = 0;
    for (let row = 0; row < height; row++) {
        for (let column = 0; column < width; column++) {
            if (dfs(row, column, count)){
                return true;
            }
        }
    }
    return false;
    
    //DFS
    function dfs(row, column, count) {
        if (row >= 0 && column >= 0 && row < board.length && column < board[0].length && board[row][column] == word.charAt(count)) {
        //Optional chaining is somehow slower...
        //if (board?.[row]?.[column] == word.charAt(count)) {
            // IMPORTANT! Word length - 1 is very important, because charAt start at 0. 
            if(count === word.length - 1) {
                return true;
            }  
            board[row][column] = "0";

            // IMPORTANT! We only need one true. Without 'or' it will return the last dfs called. 
            const result = 
                dfs(row + 1, column, count + 1) ||
                dfs(row - 1, column, count + 1) ||
                dfs(row, column + 1, count + 1) ||
                dfs(row, column - 1, count + 1);

            // IMPORTANT! Reset zeros on board back to orginial value.
            board[row][column] = word.charAt(count);
            return result;
        } 
    }
};