function Fibonacci(n) {
    // write code here
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

module.exports = {
    Fibonacci: Fibonacci
};  