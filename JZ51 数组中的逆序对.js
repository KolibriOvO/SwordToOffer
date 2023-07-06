function InversePairs(data) {
    // write code here
    let sum = 0;
    mergeSort(data);
    return sum % 1000000007

    function mergeSort(nums) {
        if (nums.length < 2) {
            return nums;
        }
        let mid = Math.floor(nums.length / 2)
        let left = nums.slice(0, mid)
        let right = nums.slice(mid)
        return merge(mergeSort(left), mergeSort(right))
    }

    function merge(left, right) {
        let res = []
        let leftLen = left.length
        let rightLen = right.length
        for (let i = 0, j = 0, index = 0; index < leftLen + rightLen; index++) {
            if (i >= leftLen) {
                res.push(right[j++])
            } else if (j >= rightLen) {
                res.push(left[i++])
            } else if (left[i] <= right[j]) {
                res.push(left[i++])
            } else {
                res.push(right[j++])
                sum = sum + leftLen - i
            }
        }
        return res
    }
}

module.exports = {
    InversePairs: InversePairs
};