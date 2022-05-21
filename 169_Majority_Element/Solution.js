var majorityElement = function(nums) {
    
    let count = 1;
    let result = nums[0];
    
    //Boyer Moore algorithm
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== result) {
            count--;
        } 
        else if (nums[i] === result) {
            count++;
        }

        if (count === 0) {
            result = nums[i];
            count++;
        }
        
    }
    
    return result;
    
};