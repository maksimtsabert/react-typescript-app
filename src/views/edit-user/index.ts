import { connect } from 'react-redux'
import { thunkFecthUsersData } from '../main/thunk/index'
import { updateUserDetails } from '../../store/actions/user-actions'
import { EditUserComponent } from './edit-user'
import { RouteComponentProps } from 'react-router'
import { AppState } from '../../store/store'

type OwnProps = RouteComponentProps<{ id: string }>

const mapStateToProps = (store: AppState, ownProps: OwnProps) => ({
    user: store.users.find(user => user.id === parseInt(ownProps.match.params.id)) || {},
    loading: store.spinner
})

const mapDispatchToProps = {
    loadUser: thunkFecthUsersData,
    updateUserDetails: updateUserDetails
}

export const EditUser = connect(mapStateToProps, mapDispatchToProps)(EditUserComponent)
