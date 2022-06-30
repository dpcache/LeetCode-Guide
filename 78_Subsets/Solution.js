/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const result = [];
    const subset = [];
    
    dfs(0);
    return result; 
    
    function dfs (index) {
        if (index >= nums.length) {
            result.push([...subset]);
            return;
        }; 
        
        subset.push(nums[index]);
        dfs(index + 1);
        
        subset.pop();
        dfs(index + 1);
        
    }

};