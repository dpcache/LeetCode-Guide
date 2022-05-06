//Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if(val != nums[i]){
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};