const subsetUtil = function(arr, result, subset, idx){
    const len = arr.length;
    for(let i = idx; i < len; i++){
        subset.push(arr[i]);
        result.push(Object.assign([],subset));
        
        subsetUtil(arr, result, subset, i+1);
        
        subset.pop();
    };
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    let subset = [];
    result.push(subset);
    let idx = 0;
    subsetUtil(nums, result, subset, idx);
    
    return result;
};

var result = subsets([1,2,3]);
console.log();