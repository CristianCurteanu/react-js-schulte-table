var grid = []

Array.prototype.shuffle = function() {
    var arr = this
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

for (let i = 1; i <= 25; i++) {
    grid[i - 1] = { id: i, enabled: true }
}

grid = grid.shuffle()
grid = [].concat.apply([], grid.map((e, i) => i % 5 ? [] : [grid.slice(i, i + 5)]))

const init = {
    table: grid.shuffle(),
    next: 1,
    finish: false
}


export default function reducer(state = init, action) {
    if (action.type === 'CLICK_BUTTON') {
        var result
        var nextItem
        var finish = false

        for (let i = 0; i < state.table.length; i++) {
            let row = state.table[i]
            result = row.find((el) => el.id === action.payload.id)
            if (result) { break }
        }

        if (result.id === state.next) {
            result.enabled = false
            nextItem = state.next + 1
        }

        if (action.payload.id === 25)
            finish = true

        return {
            table: [...state.table],
            next: nextItem || state.next,
            finish
        }
    }

    return state
}