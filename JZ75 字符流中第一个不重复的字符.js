//Init module if you need
let mp = new Map

function Init() {
    // write code here
}

//Insert one char from stringstream
let str = ''

function Insert(ch) {
    // write code here
    let s = mp.get(ch)
    if (!s) {
        mp.set(ch, 1)
    } else {
        mp.set(ch, 2)
    }
}

//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
    // write code here
    for (let ch of mp.keys()) {
        if (mp.get(ch) === 1) {
            return ch
        }
    }
    return '#'

}

module.exports = {
    Init: Init,
    Insert: Insert,
    FirstAppearingOnce: FirstAppearingOnce
};