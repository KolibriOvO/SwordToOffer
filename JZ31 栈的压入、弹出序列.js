function IsPopOrder(pushV, popV) {
    // write code here
    let arr = [];
    let k = 0;
    for (let i = 0; i < popV.length; i++) {
        arr.push(pushV[i])
        while (arr[arr.length - 1] === popV[k]) {
            k++;
            arr.pop();
            if (!arr.length) {
                break;
            }
        }
    }
    for (let i = 0; i < k; i++) {
        popV.pop()
    }

    return !arr.length || !popV.length;
}

module.exports = {
    IsPopOrder: IsPopOrder
};