import React from 'react'
import './index.css'

interface Props {
    onClick: () => void,
    text: string,
    disabled?: boolean
}

export const Button = ({ onClick, text, disabled = false }: Props) => {
    return <button className="btn btn-primary mt-2" onClick={onClick} disabled={disabled}>{text}</button>
}
