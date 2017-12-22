

//TYPES
const SAVE_NAME = 'SAVE_NAME'

//ACITON BUILDERS

//sim 2 43E
export function saveName(n) {
    return {
        type: SAVE_NAME,
        payload: n
    }
}

//REDUCER

//43D
export default function reducer( state, action ) {

    switch ( action.type ) {

        case SAVE_NAME:
            return Object.assign({}, state, { housename: action.payload})

        default: return state
    }
}