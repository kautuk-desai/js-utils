/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.arr = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.arr;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let temp = Object.assign([], this.arr);
    for (let i = temp.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        console.log(j);
        [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    return temp;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * 
 * 
 */

var obj = new Solution([1,2,3]);
var param_1 = obj.reset();
var param_2 = obj.shuffle();