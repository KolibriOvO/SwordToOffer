function rectCover(number) {
    // write code here
    if (number == 0) {
        return 0
    }
    if (number == 1) {
        return 1
    }
    if (number == 2) {
        return 2
    }
    return rectCover(number - 1) + rectCover(number - 2)
}

module.exports = {
    rectCover: rectCover
};