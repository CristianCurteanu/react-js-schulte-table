Array.prototype.shuffle = function() {
    var arr = this
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

const generateGrid = () => {
    let arr = []

    for (let i = 1; i <= 25; i++) {
        arr[i - 1] = { id: i, enabled: true }
    }

    arr = arr.shuffle()
    arr = [].concat.apply([], arr.map((e, i) => i % 5 ? [] : [arr.slice(i, i + 5)]))
    arr[2][2]['centre'] = true
    return arr
}

var grid = generateGrid()

const init = {
    table: grid.shuffle(),
    next: 1,
    finish: false,
    start: 0,
    end: 0
}


export default function reducer(state = init, action) {
    if (action.type === 'CLICK_BUTTON') {
        var result
        var nextItem
        var start
        var end
        var finish = false


        for (let i = 0; i < state.table.length; i++) {
            let row = state.table[i]
            result = row.find((el) => el.id === action.payload.id)
            if (result) { break }
        }

        if (result.id === state.next) {
            result.enabled = false
            nextItem = state.next + 1
            if (state.start === 0) {
                start = new Date().getTime()
                result.checkpoint = state.start
            } else {
                start = state.start
                result.checkpoint = (new Date().getTime() - state.start) / 1000
            }
        }

        if (action.payload.id === 25) {
            finish = true
            end = (new Date().getTime() - state.start) / 1000
        }

        return {
            table: [...state.table],
            next: nextItem || state.next,
            start: start,
            end: end,
            finish: finish
        }
    }

    return state
}