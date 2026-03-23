/**
 * Input: [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */

function twoSum (nums, target) {
    let j = nums.length - 1;

    for(let i = 0; i < nums.length; j--) {
        if(i === j) {
            i++;
            j = nums.length;
            continue;
        }

        if(nums[i] + nums[j] === target) {
            return [i, j];
        }
    }
}

console.log(twoSum([3,2,4], 6));
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([4,5,3,8,2,3], 6));
