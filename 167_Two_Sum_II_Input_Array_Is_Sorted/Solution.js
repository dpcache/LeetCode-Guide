/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let solution = [];
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;
    
    while (leftPointer != rightPointer) {

        if ((numbers[leftPointer] + numbers[rightPointer]) > target) {
            rightPointer = rightPointer - 1;
        }
        
        if ((numbers[leftPointer] + numbers[rightPointer]) < target) {
            leftPointer = leftPointer + 1;
        }
        
        if ((numbers[leftPointer] + numbers[rightPointer]) == target) {
            solution.push(leftPointer + 1);
            solution.push(rightPointer + 1);
            return solution;
        }
        
    }
    return [];
};