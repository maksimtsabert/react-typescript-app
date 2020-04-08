import { SHOW_SPINNER, SpinnerTypes } from '../../types'

export const showSpinner = (loading: boolean): SpinnerTypes => ({
    type: SHOW_SPINNER, loading
})
