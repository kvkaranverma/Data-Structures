function maximumSubArray(nums) {
    let maxSums = nums[0];

    for(let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];
            maxSums = Math.max(maxSums, currentSum);
        }
    }
    return maxSums;
}

console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]));
