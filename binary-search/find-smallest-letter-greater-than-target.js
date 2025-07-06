var nextGreatestLetter = function (letters, target) {
    let start = 0;
    let end = letters.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (letters[mid] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }


    return letters[start % letters.length]
};

console.log(nextGreatestLetter(["c", "f", "j"], "c"))