var peakIndexInMountainArray = function (arr) {
    let start = 0
    let end = arr.length - 1

    while (start != end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] > arr[mid + 1]) {
            end = mid
        } else {
            start = mid + 1
        }
    }
    return start
};

console.log(peakIndexInMountainArray([0, 2, 1, 0]))