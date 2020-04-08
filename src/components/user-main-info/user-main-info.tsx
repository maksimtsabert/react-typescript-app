import React from 'react'
import { BlockWithIcon } from '../block-with-icon'
import { User } from '../../types'
import './index.css'

interface Props {
    user: User
}

export const UserMainInfo = ({ user }: Props) => {
    return (
        <div className="user-details">
            <BlockWithIcon icon='user' text={user.name} />
            <BlockWithIcon icon='phone' text={user.phone} />
            <BlockWithIcon icon='envelope' text={user.email} />
        </div>
    )
}
