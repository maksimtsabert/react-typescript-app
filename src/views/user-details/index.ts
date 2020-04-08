import { connect } from 'react-redux'
import { thunkFecthUsersData } from '../main/thunk'
import { UserDetailsComponent } from './user-details'
import { RouteComponentProps } from 'react-router'
import { AppState } from '../../store/store'

type OwnProps = RouteComponentProps<{ id: string }>

const mapStateToProps = (store: AppState, ownProps: OwnProps) => {
    return {
        user: store.users.find(user => user.id === parseInt(ownProps.match.params.id)) || {},
        loading: store.spinner
    }
}

const mapDispatchToProps = {
    loadUser: thunkFecthUsersData
}

export const UserDetails = connect(mapStateToProps, mapDispatchToProps)(UserDetailsComponent)
