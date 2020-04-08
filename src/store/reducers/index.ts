import { combineReducers } from 'redux'
import { spinnerReducer } from './spinner-reducer'
import { usersReducer } from './user-reducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    spinner: spinnerReducer
})
