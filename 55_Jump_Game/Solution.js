/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    if(nums.length == 1) return true;
    
    let MAX_JUMP_INDEX = 0;
    let CURR_JUMP_INDEX = 0;
    
    if(nums[MAX_JUMP_INDEX] + MAX_JUMP_INDEX >= nums.length - 1) return true;
    for (let i = 0; i < nums.length; i++) {
        //get the max && see if it can reach the end.
        for (let j = CURR_JUMP_INDEX; j < nums[CURR_JUMP_INDEX] + CURR_JUMP_INDEX + 1; j++) {
            if (nums[j] >= nums[CURR_JUMP_INDEX] || nums[j] + j >= nums[CURR_JUMP_INDEX] + CURR_JUMP_INDEX) {
                CURR_JUMP_INDEX = j; 
                i = j;
            } 
        }
        
        if (CURR_JUMP_INDEX !== MAX_JUMP_INDEX) {
            MAX_JUMP_INDEX = CURR_JUMP_INDEX;
            if(nums[MAX_JUMP_INDEX] + MAX_JUMP_INDEX >= nums.length - 1) return true;
        } 
        
        return false;
    }
    return false;

};