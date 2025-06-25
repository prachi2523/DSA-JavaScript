const isValid = (s) => {
    let stack = [];

    let mData = {
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for (let d of s) {
        console.log(d, "data")
        if (['(', '{', '['].includes(d)) {
            stack.push(d)
        } else if (d in mData) {
            const top = stack.length > 0 ? stack.pop() : '#';
            if (mData[d] !== top) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("[]"))