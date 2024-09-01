function binarySearch(arr, value) {

    arr.sort((a, b) => a - b)

    function helper(array, start, end, value) {
        let mid = Math.floor((start + end) / 2)
        if (start > end) return -1
        if (array[mid] == value) return array[mid]

        if (value > array[mid]) {
            return helper(array, mid + 1, end, value)
        } else {
            return helper(array, start, mid - 1, value)
        }
    }

    return helper(arr, 0, arr.length - 1, value)

}

console.log(binarySearch([1, 10, 20, 15, 4, 8, 12], 4))

//why number sort need this

// const arr = [10, 2, 5];
// arr.sort();
// console.log(arr); // Output: [10, 2, 5]

//Here, 10 comes before 2 because "10" (as a string) is compared to "2", and "1" comes before "2" in string comparison.
//arr.sort((a, b) => a - b);

// If the result is negative, a is considered smaller than b, so a comes before b.
// If the result is positive, a is considered larger than b, so b comes before a.
// If the result is zero, a and b are considered equal, and their order remains unchanged.