import { connect } from 'react-redux'
import { SpinnerComponent } from './spinner'
import { AppState } from '../../store/store'


const mapStateToProps = (store: AppState) => {
    return {
        loading: store.spinner
    }
}

export const Spinner = connect(mapStateToProps)(SpinnerComponent)
