function push(node) {
    // write code here
    arr.push(node);
}

function pop() {
    // write code here
    return arr.pop();
}

function top() {
    // write code here
    return arr[arr.length - 1];
}

function min() {
    // write code here
    return Math.min.apply(null, arr)
}

let arr = [];
module.exports = {
    push: push,
    pop: pop,
    top: top,
    min: min
};