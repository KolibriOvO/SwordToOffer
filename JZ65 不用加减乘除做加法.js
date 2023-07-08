function Add(num1, num2)
{
    // write code here
    while (num2){
        let sum1 = num1^num2
        let sum2 = (num1&num2)<<1
        num1 = sum1
        num2 = sum2
    }
    return num1
}
module.exports = {
    Add : Add
};