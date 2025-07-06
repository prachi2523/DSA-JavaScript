const searchInInfiniteArray = (array, target) => {
    let start = 0;
    let end = 1;

    while (target > array[end]) {
        let temp = end + 1
        end = end + (end - start + 1) * 2
        start = temp
        // end = end +1 *2
    }

    return binarySearch(array, target, start, end)
}

const binarySearch = (arr, target, start, end) => {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] > target) {
            end = mid - 1
        } else if (arr[mid] < target) {
            start = mid + 1
        } else {
            return mid
        }
    }

    return -1
}

console.log(searchInInfiniteArray([2, 5, 6, 7, 9, 12], 6))