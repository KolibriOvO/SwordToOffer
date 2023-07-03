function cutRope(number) {
    // write code here
    if (number == 2) {
        return 1;
    }
    if (number == 3) {
        return 2;
    }
    let x = number % 3;
    let y = Math.floor(number / 3);
    if (x == 0) {
        return Math.pow(3, y)
    } else if (x == 1) {
        return 2 * 2 * Math.pow(3, y - 1)
    } else {
        return 2 * Math.pow(3, y)
    }
}

module.exports = {
    cutRope: cutRope
};