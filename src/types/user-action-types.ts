import { User } from './user'

export const LOAD_USERS = 'LOAD_USERS'
export const LOAD_USER_DETAILS = 'LOAD_USER_DETAILS'
export const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS'
export const ADD_USER = 'ADD_USER'

export interface LoadUsers {
    type: typeof LOAD_USERS,
    users: User[],
}

export interface AddUSer {
    type: typeof ADD_USER,
    user: User
}

export interface UpdateUserDetails {
    type: typeof UPDATE_USER_DETAILS,
    user: User
}

export interface LoadUserDetails {
    type: typeof LOAD_USER_DETAILS,
    user: User
}

export type UserActionTypes = LoadUsers | AddUSer | UpdateUserDetails | LoadUserDetails
