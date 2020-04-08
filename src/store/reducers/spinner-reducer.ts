import { SHOW_SPINNER, SpinnerTypes } from '../../types'

export function spinnerReducer(state: boolean = false, action: SpinnerTypes): boolean {
    switch (action.type) {
        case SHOW_SPINNER:
            return action.loading
        default:
            return state
    }
}
