import { User } from '../../types'
import { LOAD_USERS, UPDATE_USER_DETAILS, ADD_USER } from '../../types'
import { UserActionTypes } from '../../types'

export function usersReducer(state: User[] = [], action: UserActionTypes): User[] {
    switch (action.type) {
        case LOAD_USERS:
            return [...state, ...action.users];
        case UPDATE_USER_DETAILS:
            return state.map((user) => {
                if (user.id !== action.user.id) {
                    return user;
                }
                return {
                    ...user,
                    ...action.user
                };
            });
        case ADD_USER:
            return [...state, action.user];
        default:
            return state
    }
}
