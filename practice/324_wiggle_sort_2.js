const swap = function(src, dest, arr){
    let temp = arr[src];
    arr[src] = arr[dest];
    arr[dest] = temp;
    return arr;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    const len = nums.length;
    
    if(len == 2 && nums[1] < nums[0]){
        nums = swap(0,1,nums);
        return nums;
    }
    else if(len === 2){
        return nums;
    };
    
    for(let i = 1; i < len; i+=2){
        if(nums[i] < nums[i-1]){
            nums = swap(i, i-1, nums);
        };
        
        if((i+1) < len && nums[i] < nums[i+1]){
            nums = swap(i, i+1, nums);
        };
    };
    
    console.log(nums);
};

const nums = [1, 5, 1, 1, 6, 4];
wiggleSort(nums);