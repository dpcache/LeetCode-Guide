//Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 function removeElement(nums, val) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if(val != nums[i]){
            nums[count] = nums[i];
            count++;
        }
    }
    return count;
};

nums = [3,2,2,3];
val = 2;
console.log(removeElement(nums, val));
console.log(nums);