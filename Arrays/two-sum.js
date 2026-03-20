var twoSum = function(nums, target) {
    const result = [];
    let found = false;
    // if(nums.length < 2) {
    //     return 
    // }
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                result.push(i, j);
                found = true;
                break;
            }
        }
    }
    return result;
};

console.log(twoSum([3,2,4], 6));
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,3], 6));
