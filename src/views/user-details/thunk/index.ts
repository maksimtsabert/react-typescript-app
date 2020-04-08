import { loadUserDetails } from '../../../store/actions/user-actions'
import { fetchUserDetails } from '../../../api/index'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { showSpinner } from '../../../store/actions/spinner-actions'

export const thunkFecthUserData = (id: number) => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>): Promise<void> => {
        dispatch(showSpinner(true))
        const response = await fetchUserDetails(id)
        dispatch(loadUserDetails(response))
        dispatch(showSpinner(false))
    }
}
