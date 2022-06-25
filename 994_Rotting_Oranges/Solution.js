/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    
    const ROWS = grid.length;
    const COLUMNS = grid[0].length;
    const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const Queue = []; 
    let numFresh = 0; 
    let time = 0;
    
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            if (grid[i][j] === 1) {
                numFresh += 1;
            } else if (grid[i][j] === 2) {
                Queue.push([i, j]);
           }
        }
    }

    while (Queue.length && numFresh > 0) {
        const staticQueueLength = Queue.length; 
        for (let i = 0; i < staticQueueLength; i++) {
            const coordinate = Queue.shift();
            for (let j = 0; j < DIRECTIONS.length; j++) {
                const nextRow = coordinate[0] + DIRECTIONS[j][0];
                const nextColumn = coordinate[1] + DIRECTIONS[j][1];
                if(grid?.[nextRow]?.[nextColumn] === 1) {
                    grid[nextRow][nextColumn] = 2;
                    Queue.push([nextRow, nextColumn]);
                    numFresh -= 1;
                }
            }
        }
        time++;
    }
   
    return (numFresh > 0) ? -1 : time;
    
};