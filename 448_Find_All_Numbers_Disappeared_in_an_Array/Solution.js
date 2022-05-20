const nums = [4,3,2,7,8,2,3,1];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        // get index - 1 of the number we already have.
        // why index - 1 ? for out of bounding. indices start at 0.  
        const index = Math.abs(nums[i]) - 1; //Math.abs search for the index of value that is already negative.
        // change their value to negative if not negative already.
        if (nums[index] > 0) { 
          nums[index] = -1 * nums[index];
        }
    }

    const missingNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        if ( nums[i] > 0) {
            missingNumbers.push(i + 1);           
        }
    }
    return missingNumbers;
};

findDisappearedNumbers(nums);