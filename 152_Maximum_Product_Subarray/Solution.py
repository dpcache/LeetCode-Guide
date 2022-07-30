class Solution:
    def maxProduct(self, nums: List[int]) -> int:
       
        curMin, curMax = 1, 1
        Max = nums[0]
        #or get the max element value of array. Max = max(nums)

        for n in nums:
            tmp = curMax * n
            print('tmp ' + str(tmp))
            curMax = max(n * curMax, n * curMin, n)
            print('curMax ' + str(curMax))
            curMin = min(tmp, n * curMin, n)
            print('curMin ' + str(curMin))
            Max = max(Max, curMax)
        return Max