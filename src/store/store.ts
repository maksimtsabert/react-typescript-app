import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { UserActionTypes } from '../types'

export type AppState = ReturnType<typeof rootReducer>;

//mb not needed
const tools = composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, UserActionTypes>))
const store = createStore(rootReducer, tools)
export default store
