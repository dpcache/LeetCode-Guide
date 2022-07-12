/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    
    const result = [];
    const partition = [];
    
    dfs(0);
    return result;
    
    function dfs(index) {
        
        if (index === s.length) {
            result.push([...partition]);
            return;
        }
        

        for (let j = index; j < s.length; j++) { 
            if (isPalindrome(s.substring(index, j + 1))) {
                partition.push(s.substring(index, j + 1));
    
                // Since isPalindrome stop continuing bad DFS.
                // dfs(index + 1); ["aa" "a" "b"] BAD
                dfs(j + 1); // ["aa" "b"] GOOD
                partition.pop();
            }
        }
        
    }
    
    function isPalindrome(subString) {
        let leftSide = 0;        
        let rightSide = subString.length - 1;
        
        while(leftSide < rightSide) {
            
            if (subString[leftSide] === subString[rightSide]) {
                leftSide = leftSide + 1;
                rightSide = rightSide - 1;
            } else {
                return false;
            }
        }
        return true;
    }
    
};