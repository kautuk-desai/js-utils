/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let num1 = 0;
    let num2 = 0;
    var result = new Array(1);
    for (let i = 0; i < nums.length; i++){
        num1 = target - nums[i];
        index_of_num2 = nums.indexOf(num1);
        if(index_of_num2 > -1 && index_of_num2 !== i){
            result[0] = i;
            result[1] = index_of_num2;
            return result;
        }
    }
    return -1;
};