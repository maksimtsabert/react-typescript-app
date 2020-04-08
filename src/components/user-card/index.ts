import { connect } from 'react-redux'
import { UserCardComponent } from './user-card'
import { AppState } from '../../store/store'

const mapStateToProps = (store: AppState) => {
    return {
        users: store.users
    }
}

export const UserCard = connect(mapStateToProps)(UserCardComponent)
