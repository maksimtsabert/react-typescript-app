import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../avatart'
import { UserMainInfo } from '../user-main-info'
import { User } from '../../types'
import './index.css'

interface Props {
    user: User
}

export const UserCardComponent = ({ user }: Props) => {
    return (<div className="user-card">
        <Avatar img="/avatar.png">
            <Link to={`/edit/user/${user.id}`} className="link">Edit</Link>
            <Link to={`/user/${user.id}`} className="link">View</Link>
        </Avatar>
        <UserMainInfo user={user} />
    </div>)
}
