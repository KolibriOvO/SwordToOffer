function Find(target, array) {
    // write code here
    for (let i = 0; i < array.length; i++) {
        let n = array[i];
        for (let j = 0; j < n.length; j++) {
            if (target === n[j]) {
                return true;
            }
        }
    }
    return false;
}

module.exports = {
    Find: Find
};

let f = Find(1,[[2]]);
console.log(f)