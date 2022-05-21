/**
 * @param {number[]} arr
 * @return {number}
 */

//Binary Search
 var peakIndexInMountainArray = function(arr) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while (leftPointer < rightPointer) {
        const midPoint = parseInt(leftPointer + (rightPointer - leftPointer) / 2); 
        if (arr[midPoint] < arr[midPoint+1]) {
            leftPointer = midPoint + 1;
        } else {
            rightPointer = midPoint;
        }
    }
    
    return rightPointer;
};