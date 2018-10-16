const maxIndex = function(arr, len, prev, curr, next){
    let p = prev >= 0 ? arr[prev] : -Infinity;
    let c = arr[curr];
    let n = next >= len ? -Infinity : arr[next];
    
    const max = Math.max(c, Math.max(p, n));
    if(arr[curr] === max){
        return curr;
    }
    
    if(arr[prev] === max){
        return prev;
    }
    
    return next;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const len = nums.length;
    if(len === 1){
        return 0;
    }
    let i = 1,
        maxIdx;
    while(i < len){
        maxIdx = maxIndex(nums, len, i-1, i, i+1);
        if(i === maxIdx){
            return i;
        }
        i = maxIdx;
    }
    
};

nums = [1,3, 5, 2, 8,7];
console.log(findPeakElement(nums));