/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let midPoint = parseInt((leftPointer + rightPointer) / 2);
    while (leftPointer <= rightPointer ) {
        
        if (target > nums[midPoint]) {
            leftPointer = midPoint + 1; 
        }
        
        else if (target < nums[midPoint]) {
            rightPointer = midPoint - 1; 
        }
        
        midPoint = parseInt((leftPointer + rightPointer) / 2);
        
        if(nums[midPoint] === target) {
                return midPoint;   
        }
    }
    
    return -1;
    
};