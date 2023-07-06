/**
 * 解码
 * @param nums string字符串 数字串
 * @return int整型
 */
function solve(nums) {
    let index = 0;
    for (index; index < nums.length; index++) {
        if (nums[index] != '0') {
            break;
        }
    }
    nums = nums.substring(index, nums.length);

    let dp = new Array(nums.length);

    if (nums.length == 0)
        return 0;
    if (nums.length == 1 && nums[0] == '0')
        return 0;
    if (nums.length == 1)
        return 1;
    if (nums[1] != '0' && parseInt(nums[0] + nums[1]) <= 26)
        dp[1] = 2;
    else
        dp[1] = 1;

    dp[0] = 1;


    for (let i = 2; i < nums.length; i++) {
        if (nums[i] == '0') {
            if (nums[i - 1] == '0') {
                return 0;
            } else if (nums[i - 1] <= '2') {
                dp[i] = dp[i - 2];
            } else {
                return 0;
            }
        } else {
            if (nums[i - 1] == '0') {
                dp[i] = dp[i - 1]
            } else if (parseInt(nums[i - 1] + nums[i]) <= 26) {
                dp[i] = dp[i - 1] + dp[i - 2];
            } else {
                dp[i] = dp[i - 1];
            }
        }
    }
    return dp[nums.length - 1];
}

module.exports = {
    solve: solve
};