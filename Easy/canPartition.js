/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition() {
    let arr = [2, 8, 4, 1];
    let sum = 0;
    let product = 1;
    let result = false;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    if (sum % 2 === 0) {
        if (product === sum / 2) {
            result = true;
        }
    }
    return result;

}

exports.solution = canPartition;

