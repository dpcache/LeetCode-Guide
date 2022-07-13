/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    
    candidates = candidates.sort();
    const result = [];
    const combination = [];

    dfs(0, 0);   
    
    return result;
    
    function dfs(index, total) {
        
        if (total === target) {
            result.push([...combination]); 
            return;
        }
        
        if (total < target && index < candidates.length){ 
            
            let prev = -1;
            // Move to the next one if fail.
            for (let i = index; i < candidates.length; i++) { 
                if (candidates[i] === prev) {
                    continue
                }

                combination.push(candidates[i]);
                dfs(i + 1, total + candidates[i]);
                combination.pop();
                prev = candidates[i];
            }
            
        }
        
        total = 0;  
        return;
    }
};