# Inside out
# abcba
#   c
#  b b
# a    a
class Solution:
    def longestPalindrome(self, s: str) -> str:
        resPointerRight = 0
        resPointerLeft = 0
        resLen = 0

        for i in range(len(s)):
            # odd length
            l, r = i, i
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    resPointerRight = r
                    resPointerLeft = l
                    resLen = r - l + 1
                l -= 1
                r += 1

            # even length
            l, r = i, i + 1
            while l >= 0 and r < len(s) and s[l] == s[r]:
                if (r - l + 1) > resLen:
                    resPointerRight = r
                    resPointerLeft = l
                    resLen = r - l + 1
                l -= 1
                r += 1

        return s[resPointerLeft : resPointerRight + 1]