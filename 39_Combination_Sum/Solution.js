/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {

    const result = [];
    const combination = [];

    dfs(0, 0);
    
    return result; 
    
    function dfs(index, sum){
        if (sum === target) {
            console.log(combination);
            result.push(combination);
            console.log(result);
            return;
        }
        
        if (sum < target && index < candidates.length) { 
            
            combination.push(candidates[index]);
            dfs(index, sum + candidates[index]); 
            
            //skip to next index
            combination.pop();
            dfs(index + 1, sum);   

            // This is bad! First DFS, [2, 2, 2, 2] sum = 8 then sum will be 0 then return.
            //  combination.pop();
            // This DFS, [2, 2, 2, POP, 3], sum = 3. Causing it to continue.
            //  combination.push(candidates[index + 1]);
            //  dfs(index + 1, sum + candidates[index + 1]);   
            
        } 
        
        sum = 0;
        return; 
    }
};