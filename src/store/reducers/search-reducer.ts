export const SET_QUERY = 'SET_QUERY'

interface Action {
    type: string,
    payload: string
}

export const setSearchQuery = (query: string): Action => ({ type: SET_QUERY, payload: query })

export function searchReducer(state: string = '', action: Action): string {
    switch (action.type) {
        case SET_QUERY:
            return action.payload
        default:
            return state
    }
}
