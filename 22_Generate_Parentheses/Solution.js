/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {

    let result = [];
    let makeString = [];
    
    dfs(0, 0);
    
    function dfs(openCount, closedCount) {
        if(openCount == n && closedCount == n) {
            //join '' will remove commas 
            return result.push(makeString.join(''));
        }
        
        if(openCount < n) {
            makeString.push('(');
            dfs(openCount+1, closedCount);
            makeString.pop();
        }
        
        if(closedCount < openCount) {
            makeString.push(')');
            dfs(openCount, closedCount+1);
            makeString.pop();
        }
    }
    
    return result;
    
};