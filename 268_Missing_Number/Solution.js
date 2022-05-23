/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        
        let makeNegativeIndex = Math.abs(nums[i]) - 1;
        
        // Zero is pain in the butt
        if (nums[i] !== 0) { 
            if (nums[makeNegativeIndex] === 0) {
                // if the nums[index] == 0 
                nums[makeNegativeIndex] = -1 * Math.abs(nums[i]);
            } else { 
                nums[makeNegativeIndex] = -1 * Math.abs(nums[makeNegativeIndex]);
            }
        }  
        
    }

     for (let i = 0; i < nums.length; i++) {
        if ( nums[i] >= 0 ) {
            return i + 1;
        }
     }
    return 0; 
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let total = 0;
    let currAmount = 0;
    for (let i = 0; i < nums.length; i++) {
        total = total + i + 1;
        currAmount = currAmount + nums[i];
    }
    return total - currAmount;
};
