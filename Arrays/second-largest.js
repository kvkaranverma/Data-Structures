/**
 * Find the second largest element in an array of numbers.
 * Example 1:
 * Input: [3, 1, 4, 2]
 * Output: 3
 * Explanation: The largest element is 4 and the second largest is 3.
 *
 * Example 2:
 * Input: [10, 5, 8, 12]
 * Output: 10
 * Explanation: The largest element is 12 and the second largest is 10.
 */

function secondLargest(arr) {
    let largest = -1;
    let secondLargest = -1;

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }

        if(secondLargest < arr[i] && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

console.log(secondLargest([3, 1, 4, 2]));
console.log(secondLargest([12, 35, 1, 10, 34, 1]));
console.log(secondLargest([10, 5, 10]));
