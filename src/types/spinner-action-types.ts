export const SHOW_SPINNER = 'SHOW_SPINNER'

export interface ShowSpinner {
    type: typeof SHOW_SPINNER,
    loading: boolean
}

export type SpinnerTypes = ShowSpinner
