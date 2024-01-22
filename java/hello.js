/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < (nums.length) - 1 ;i++) {
        for (let j = i + 1; i < nums.length ; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    //return{};
};

//console.log(twoSum(nums[2,3,4],6));

