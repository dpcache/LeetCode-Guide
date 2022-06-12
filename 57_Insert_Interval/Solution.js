var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
      return [ newInterval ];
  }

  const result = [];
  
  let i;
  for (i = 0; i < intervals.length; i++) {
      
      // [[1,2],[3,5]...
      // if net interval [x,0] or [x,2]
      if (newInterval && newInterval[1] < intervals[i][0]) {
          result.push(newInterval);
          newInterval = null;
          result.push(intervals[i]);
      // [[1,2],[3,5]...
      // If new interval [6,x]
      } else if(!newInterval || newInterval[0] > intervals[i][1]) {
          result.push(intervals[i]);
      } else {
          // [[1,2],[3,5]...
          //If newInterval [2,4]
          // This will get 1. Because 1 <= 2.
          newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
          // This will get 5. Because 4 <= 5
          newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      }
      
  }

  // If newInterval null, means it has not been added it means it must be the last one
  if (newInterval) {
      result.push(newInterval);
  }

  return result
};