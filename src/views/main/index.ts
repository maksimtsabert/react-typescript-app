import { connect } from 'react-redux'
import { thunkFecthUsersData } from './thunk/index'
import { MainComponent } from './main'
import { addUser } from '../../store/actions/user-actions'
import { filteredUsers } from '../../store/selectors'
import { setSearchQuery } from '../../store/reducers/search-reducer'
import { AppState } from '../../store/store'

const mapStateToProps = (state: AppState) => ({
    users: filteredUsers(state),
})

const mapDispatchToProps = {
    loadUsers: thunkFecthUsersData,
    addUser: addUser,
    setSearchQuery: setSearchQuery
}

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent)
