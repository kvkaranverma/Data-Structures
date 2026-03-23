/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 * Example 1:
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
    
 * Example 2:
 * Input: nums = [1,0,1,1,0,1]
 * Output: 2
 * Explanation: The longest consecutive 1s is 2.
 */

findMaxConsecutiveOnes = (nums) => {
    let counter = 0;
    let maxOnes = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            counter++;
            maxOnes = Math.max(counter, maxOnes);
        } else {
            counter = 0;
        }
    }
    return maxOnes;
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));
