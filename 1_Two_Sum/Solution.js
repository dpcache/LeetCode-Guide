function twoSum(arr, target) {
    const cache = new Map();
  
    for (let i = 0; i < arr.length; i++) {
      const current = target - arr[i];
      if (cache.has(arr[i])) {
        return [i, cache.get(arr[i])];
      } else {
        cache.set(current, i);
      }
    }
  }