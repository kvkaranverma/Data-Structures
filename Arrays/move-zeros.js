function moveZeros(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            for(let j = i; j < nums.length - 1; j++) {
                nums[j] = nums[j + 1];
            }
            nums[nums.length - 1] = 0;
        }
    }
    return nums;
}

console.log(moveZeros([0,1,0,3,12]));
console.log(moveZeros([0]));
