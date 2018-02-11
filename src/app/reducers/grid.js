import grid from '../helpers/grid_gen'
import configs from '../helpers/game_configs'

var size = 0

// if (localStorage.getItem('tableSize') === null) {
//     size = 5
//     localStorage.setItem('tableSize', size)
// } else {
//     size = parseInt(localStorage.getItem('tableSize'))
// }

const init = {
    table: grid(size),
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

        if (action.payload.id === (size * size)) {
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