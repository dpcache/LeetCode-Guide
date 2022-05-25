/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let sLowerCaseStr = s.toLowerCase();
    let leftIndex = 0;
    let rightIndex = sLowerCaseStr.length - 1;

    while (leftIndex < rightIndex) {

        //leftIndex < rightIndex very important, otherwise it will keep looping, always return false.
        while (leftIndex < rightIndex && !isAlphaNum(sLowerCaseStr.charAt(leftIndex))){
            leftIndex = leftIndex + 1;
        }
        
        while (leftIndex < rightIndex && !isAlphaNum(sLowerCaseStr.charAt(rightIndex))){
            rightIndex = rightIndex - 1;
        } 
    
        if(sLowerCaseStr.charAt(leftIndex) !== sLowerCaseStr.charAt(rightIndex)) {
            return false;
        }
        leftIndex = leftIndex + 1;
        rightIndex = rightIndex - 1;
    }
    
    return true;
};

var isAlphaNum = function(char) { 
    if ('a'.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0))
    {   
        return true;
    }
    
    if ('0'.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0)  <= '9'.charCodeAt(0))
    {
        return true;
    }
    
    return false;
};