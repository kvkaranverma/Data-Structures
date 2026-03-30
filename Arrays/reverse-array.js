/**
 * Reverse an array in place.
 * Example 1:
 * Input: [1, 2, 3, 4, 5]
 * Output: [5, 4, 3, 2, 1]
 */

function reverseArray(arr) {

    let n = arr.length - 1;
    for(let i = 0; i < arr.length / 2; i++) {
        let temp = arr[n];
        arr[n] = arr[i];
        arr[i] = temp;
        n--;
    }

    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(['a', 'b', 'c', 'd', 'e']));
console.log(reverseArray([1, 4, 3, 2, 6, 5]));
