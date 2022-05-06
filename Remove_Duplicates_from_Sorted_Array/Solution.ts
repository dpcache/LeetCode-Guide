// Remove Duplicates from Sorted Array

// Input: nums = [1,1,1,2,2,4,4,4]
// Expected Output: 3, nums = [1,2,4,does not care,does not care]
// 3 is k, the size of the array it will be accpected, and anything after k doesn't matter. 
// nums: number[] is pass by reference.


// First Solution: 

// [curr->1,1,1,2,2,4,4,4]
// [prev->1,1,1,2,2,4,4,4]
// count = 1 

// First diffierence found. if(curr != nums[i])
// [1,1,1,curr->2,2,4,4,4]
// [1,prev->1,1,2,2,4,4,4]
// count = 2
// [1,1,1,curr->2,2,4,4,4]
// [1,prev->2,1,2,2,4,4,4]

// Second difference found. if(curr != nums[i])
// [1,1,1,2,2,curr->4,4,4]
// [1,2,prev->1,2,2,4,4,4]
// count = 3
// [1,1,1,curr->2,2,4,4,4]
// [1,2,prev->4,2,2,4,4,4]

// Keep looping and finding difference till.

// Expected Output: 3, nums =[->1,->2,->4,2,2,4,4,4]

function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    let count: number = 1;
    let prev: number = 0;
    let curr: number = nums[0];
    for(let i = 0; i < nums.length; i++){
        if(curr != nums[i]){
            count++;
            prev++;
            curr = nums[i];
            nums[prev] = curr;
        } 
    }
    return count;
};

// public int removeDuplicates(int[] nums) {
//     int i = nums.length > 0 ? 1 : 0;
//     for (int n : nums)
//         if (n > nums[i-1])
//             nums[i++] = n;
//     return i;
// }