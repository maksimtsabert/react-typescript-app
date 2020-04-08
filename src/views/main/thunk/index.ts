import { loadUsers } from '../../../store/actions/user-actions'
import { fetchUsersData } from '../../../api'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { showSpinner } from '../../../store/actions/spinner-actions'

export const thunkFecthUsersData = () => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>): Promise<void> => {
        dispatch(showSpinner(true))
        const response = await fetchUsersData()
        dispatch(loadUsers(response))
        dispatch(showSpinner(false))
    }
}
