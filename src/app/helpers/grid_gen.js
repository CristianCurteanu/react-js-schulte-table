Array.prototype.shuffle = function() {
    var arr = this
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

module.exports = (size = 5) => {
    let arr = []

    for (let i = 1; i <= (size * size); i++) {
        arr[i - 1] = { id: i, enabled: true }
    }

    arr = arr.shuffle()
    arr = [].concat.apply([], arr.map((e, i) => i % size ? [] : [arr.slice(i, i + size)]))
    const middle = parseInt(size / 2)
    arr[middle][middle]['center'] = true
    return arr
}