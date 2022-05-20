/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let biggestGain = 0;
    let leftPointer = 0;
    let rightPointer = 1;

    // Why "length - 1"? because rightPointer is already incremented by 1.
    for (let i = 0; i < prices.length - 1; i++ ) {

        //Check if it is higher than the current biggest gain.
        //Saving biggest gain.
        // Thinking! we may not need to check it if it is not bigger than prices[leftPointer].
        if ( prices[rightPointer] - prices[leftPointer] > biggestGain ) {    
            biggestGain = prices[rightPointer] - prices[leftPointer];
        }
        
        // Found new lowest. Move left pointer. 
        if ( prices[leftPointer] > prices[rightPointer]  ) {
            leftPointer = rightPointer;  
        }  

        rightPointer = rightPointer + 1;
    }
    
    return biggestGain;
};