import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'

interface Props {
    icon: IconName,
    text?: string
}

export const BlockWithIcon = ({ icon, text }: Props) => {
    return (<div>
        <FontAwesomeIcon icon={['fas', icon]} />
        <span className="ml-2">{text}</span>
    </div>)
}
