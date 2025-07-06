const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1

    let min = nums[left];

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        // let 
        if (nums[left] <= nums[mid]) {
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
}

console.log(search([3, 4, 5, 6, 1, 2], 1))
