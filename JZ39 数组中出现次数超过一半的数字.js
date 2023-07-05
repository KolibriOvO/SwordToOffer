function MoreThanHalfNum_Solution(numbers) {
    // write code here
    let res = Array.from(new Set(numbers))
    let k = 0;

    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (res[i] === numbers[j]) {
                k++;
            }
        }
        if (k > (numbers.length - 1) / 2) {
            return res[i];
        }
        k = 0;
    }

}

module.exports = {
    MoreThanHalfNum_Solution: MoreThanHalfNum_Solution
};