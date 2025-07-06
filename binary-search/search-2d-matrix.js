const searchMatrix = (matrix, target) => {
    let left = 0;
    let right = matrix[0].length - 1;

    while (left < matrix.length && right >= 0) {
        if (matrix[left][right] == target) {
            return true
        }

        if (matrix[left][right] > target) {
            right--;
        } else {
            left++
        }
    }
    return false
}

console.log(searchMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]], 5))