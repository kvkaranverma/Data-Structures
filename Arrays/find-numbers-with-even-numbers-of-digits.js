/**
 * Given an array nums of integers, return how many of them contain an even number of digits.
 * Example 1:
 * Input: nums = [12,345,2,6,7896]
 * Output: 2
 * Explanation: 12 and 7896 have an even number of digits.
 */

function findNumbers(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        let digitCount = 0;
        let n = nums[i];
        
        while(n > 0) {
            n = Math.floor(n / 10);
            digitCount++;
        }
        if(digitCount % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(findNumbers([12,345,2,6,7896]));
