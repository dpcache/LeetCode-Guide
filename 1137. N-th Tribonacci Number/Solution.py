class Solution:
    def tribonacci(self, n: int) -> int:
        one = 0 
        two = 1
        three = 1
        if n == 0: return 0
        if n == 1: return 1
        if n == 2: return 1
        for num in range(3, n + 1): 
            temp = three
            three = one + two + three
            one = two
            two = temp
        return three
            
            