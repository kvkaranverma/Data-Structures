function rotateArray (nums, k) {
    for(let i = 0; i < k; i++) {
        let lastElement = nums[nums.length - 1];
        for(let j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j-1];
        }
        nums[0] = lastElement;
    }
    return nums;
}

console.log(rotateArray([1,2,3,4,5,6,7], 3));
console.log(rotateArray([-1,-100,3,99], 2));
