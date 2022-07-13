/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if (!digits) return [];
    
    const result = [];

    const digitToChar = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "qprs"],
        ["8", "tuv"],
        ["9", "wxyz"]
    ]);
    
    dfs(0,'')
    return result; 
    
    function dfs(index, combineStr) {
        
        if (combineStr.length === digits.length) {
            return result.push(combineStr);
        }
        
        for (const value of digitToChar.get(digits[index])) { 
            dfs(index + 1, combineStr + value);
        }
        
    }
};