/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    const len = nums.length;
    let left = 0,
        right = len - 1;
    let result = -1;
    let mid;
    while(left <= right){
        mid = parseInt((left + right)/2);
        if(nums[mid] === target){
            result = mid;
            break;
        }
        
        if(nums[left] < nums[mid]){ // this means left half is sorted
            if(nums[left] <= target && target < nums[mid]){
                left = mid+1;
            }
            else {
                right = mid-1;
            }
        }
        else if(nums[mid] < nums[left]){ // this means right is sorted
            if(target <= nums[right] && target > nums[mid]){
                left = mid+1;
            }
            else {
                right = mid - 1;
            }
        }
    }
    
    return result;  
};


// let nums = [4,5,6,7,0,1,2], target = 0;
// let nums = [4,5,6,7,0,1,2], target = 3;
// let nums = [15,16,19,20,25,1,3,4,5,7,10,14], target = 5;
let nums = [1,3], target = 3;
console.log(search(nums, target));