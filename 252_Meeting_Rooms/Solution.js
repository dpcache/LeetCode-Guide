/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

 export class Solution {
    /**
     * @param intervals: an array of meeting time intervals
     * @return: if a person could attend all meetings
     */
    canAttendMeetings(intervals) {
        const arr = intervals.sort((a, b) => a.start - b.start);
    
        for (let i = 1; i < arr.length; i ++) {
          if (arr[i].start < arr[i - 1].end) return false;
        }
    
      return true;
    }
  }