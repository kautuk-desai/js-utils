class Permutation{
    constructor(){
        this.result = [];
    };

    swap(arr, pos1, pos2){
        let temp = arr[pos1];
        arr[pos1] = arr[pos2];
        arr[pos2] = temp;
        return arr;
    };
    
    heapPermutation(arr, len, n){
        if (len == 1){
            console.log(arr.toString())
            this.result.push(arr.slice(0));
            return;
        };
        
        for (let i=0; i<len; i++) { 
            let temp_arr = arr;
            this.heapPermutation(temp_arr,len-1,n); 
            
            // if len is odd, swap first and last 
            // element 
            if (len%2==1){
                temp_arr = this.swap(temp_arr, 0, len-1);
            }
            // If len is even, swap ith and last 
            // element 
            else {
                temp_arr = this.swap(temp_arr, i, len-1);
            }
        };
    };
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const obj = new Permutation();
    obj.heapPermutation(nums, nums.length, nums.length);
    return obj.result;
};

console.log(permute([1,2,3]).toString());