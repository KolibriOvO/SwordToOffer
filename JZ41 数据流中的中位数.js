let arr = [];

function Insert(num) {
    // write code here
    let i = 0;
    while (arr[i] < num) {
        i++;
    }
    arr.splice(i, 0, num)
}

function GetMedian() {
    // write code here
    let index = Math.floor(arr.length / 2)
    if (arr.length % 2) {
        return arr[index]
    } else {
        return (arr[index - 1] + arr[index]) / 2
    }
}

module.exports = {
    Insert: Insert,
    GetMedian: GetMedian
};