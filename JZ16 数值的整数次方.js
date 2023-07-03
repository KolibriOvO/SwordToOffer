function Power(base, exponent) {
    // write code here
    let res = 1;
    if (exponent < 0) {
        base = 1 / base
        exponent = -exponent
    }
    for (let i = 0; i < exponent; i++) {
        res *= base;
    }
    return res;
}

module.exports = {
    Power: Power
};