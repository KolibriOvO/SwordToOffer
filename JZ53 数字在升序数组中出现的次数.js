function GetNumberOfK(data, k) {
    // write code here
    let num = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i] === k) {
            num++
        }
    }
    return num
}

module.exports = {
    GetNumberOfK: GetNumberOfK
};