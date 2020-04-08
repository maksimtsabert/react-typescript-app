import { User } from '../../types'
import {
    UserActionTypes,
    LOAD_USERS,
    UPDATE_USER_DETAILS,
    ADD_USER,
    LOAD_USER_DETAILS
} from '../../types'

export const loadUsers = (users: User[]): UserActionTypes => ({
    type: LOAD_USERS, users
})

export const updateUserDetails = (user: User): UserActionTypes => ({
    type: UPDATE_USER_DETAILS, user
})

export const addUser = (user: User): UserActionTypes => ({
    type: ADD_USER, user
})

export const loadUserDetails = (user: User): UserActionTypes => ({
    type: LOAD_USER_DETAILS, user
})
