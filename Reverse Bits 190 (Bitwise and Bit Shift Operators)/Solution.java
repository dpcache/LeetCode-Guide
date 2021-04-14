//Reverse bits of a given 32 bits unsigned integer.
//Input:            n = BIN(00000010100101000001111010011100)
//Output:               BIN(00111001011110000010100101000000)
//Credit:  Amadou

public int reverseBits(int n) {
    int result = 0;
        for (int i = 0; i < 32; i++) {
            result <<= 1;
            if ((n & 1) == 1) result++;
            n >>= 1;
        }
    return result;
}

/*
Example:  
Input: 1001
Output: 1001

	Loop 
	
		i = 0
		Shift left Result = 0
		100(1) & 1 = 1 ... result++
		Shift right n = 100
		
		i = 1
		Shift left Result = 10
		10(0) & 1 = 0
		Shift right n = 10
		
		i = 2
		Shift left Result = 100
		1(0) & 1 = 0
		Shift right n = 1
		
		i = 3
		Shift left Result = 1000
		(1) & 0 = 1 ... result ++;
		Shift right n =
		
	endloop
	result = 1001

*/

