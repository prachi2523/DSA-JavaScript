
const search = (nums, target) => {
    let start = 0;
    let end = nums.length - 1

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (nums[mid] == target) {
            return mid
        }

        if (nums[mid] < target) {
            end = mid - 1
        }

        if (nums[mid] < target) {
            start = mid + 1
        }
    }
    return -1
}



console.log(search([-1, 0, 2, 4, 6, 8], 4))