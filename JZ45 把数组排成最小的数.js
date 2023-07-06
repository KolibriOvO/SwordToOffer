function PrintMinNumber(numbers) {
    // write code here
    return numbers.sort((a, b) => (a + '' + b) - (b + '' + a)).join('')
}

module.exports = {
    PrintMinNumber: PrintMinNumber
};

PrintMinNumber([])