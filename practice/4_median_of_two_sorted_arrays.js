const median = function(arr, len) 
{ 
    if (len % 2 == 0) 
        return (arr[len / 2] +  
                arr[len / 2 - 1]) / 2; 
    else
        return arr[len / 2]; 
} 


const recurseMedian = function(nums1, l1, h1, nums2, l2, h2){
    const nums1_len = h1-l1;
    const nums2_len = h2-l2;
    
    if(nums1_len === 1 && nums2_len === 1){
        return ((nums1[0] + nums2[0]) / 2);
    }
    
    const mid1 = parseInt(nums1_len/2);
    const mid2 = parseInt(nums2_len);
    const med1 = median(nums1, nums1_len);
    const med2 = median(nums2, nums2_len);
    
    if(med1 < med2){
        if(nums1_len % 2 === 0){
            return recurseMedian(nums1, mid1-1, nums1_len, nums2, 0, nums2_len - mid2 + 1); 
        }
        else {
            return recurseMedian(nums1, mid1, nums1_len, nums2, 0, nums2_len - mid2);  
        }
      
    }
    else if(med1 > med2){
        return recurseMedian(nums1, 0, , nums2, mid2, nums2_len);
    }
    else {
        return med1;
    };
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums1_len = nums1.length;
    const nums2_len = nums2.length;
    
    if(nums1_len === 1 && nums2_len === 1){
        return ((nums1[0] + nums2[0]) / 2);
    }
    
    
    return recurseMedian(nums1, 0, nums1_len, nums2, 0, nums2_len);
    
};


const nums1 = [1,3];
const nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));