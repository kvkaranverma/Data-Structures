/**
 * Move all the zeros to the end of the array, while maintaining the relative order of the non-zero elements.
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 */

function moveZeros(nums) {

    // First move all the non-zeros items in array to the front
    let counter = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[counter++] = nums[i];
        }
    }

    while(counter < nums.length) {
        nums[counter++] = 0;
    }

    return nums;
}

console.log(moveZeros([0,1,0,3,12]));
console.log(moveZeros([0]));
