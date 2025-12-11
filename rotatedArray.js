const rotatedBinarySearch = function(arr, key) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === key) {
            return mid; // key found
        }

        // Check if left half is sorted
        if (arr[left] <= arr[mid]) {
            // Key is in the left half
            if (arr[left] <= key && key < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (arr[mid] < key && key <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1; // key not found
};

// Example usage
const arr = [6, 7, 1, 2, 3, 4, 5];
const key = 3;
const result = rotatedBinarySearch(arr, key);
console.log(result); // Output: 4
