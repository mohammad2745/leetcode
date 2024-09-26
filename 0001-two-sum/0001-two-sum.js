/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let data = new Object();  
    
    for(let i=0; i<nums.length; i++) {
        let complement = target - nums[i];
        if(data[complement] !== undefined) {
            return [data[complement], i];
        }
        data[nums[i]] = i;
    }
    
    
};