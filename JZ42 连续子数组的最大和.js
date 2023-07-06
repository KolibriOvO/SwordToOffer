// function FindGreatestSumOfSubArray(array) {
//     // write code here
//     let index = 0;
//     let l = array.length;
//     let arr = [];
//
//     function sum(arr) {
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             sum += arr[i];
//         }
//         return sum;
//     }
//
//     while (index <= l - 1) {
//         for (let i = index; i < l; i++) {
//             arr.push(sum(array.slice(index, i + 1)));
//         }
//         index++;
//     }
//     return Math.max(...arr);
// }
//
// module.exports = {
//     FindGreatestSumOfSubArray: FindGreatestSumOfSubArray,
// };
function FindGreatestSumOfSubArray(array) {
    // write code here
    let temp = 0;
    let res = array[0];
    for (let i = 0; i < array.length; i++) {
        temp = Math.max(array[i], array[i] + temp)
        res = Math.max(temp, res)
    }
    return res;
}

module.exports = {
    FindGreatestSumOfSubArray: FindGreatestSumOfSubArray
};