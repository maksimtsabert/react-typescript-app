import React from 'react'
import './index.css'

interface Props {
    loading: boolean
}

export const SpinnerComponent = ({ loading }: Props) => {
    if (!loading) {
        return null
    }

    return (<div className="parent">
        <div className="loader"></div>
    </div>)
}
