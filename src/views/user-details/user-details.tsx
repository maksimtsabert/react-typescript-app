import React, { useEffect } from 'react'
import { BlockWithIcon } from '../../components/block-with-icon'
import { Link, Redirect } from 'react-router-dom'
import { Avatar } from '../../components/avatart'
import { UserMainInfo } from '../../components/user-main-info'
// import { User } from '../../types'
import './index.css'

interface Props {
    user: any, //refactor
    loadUser: () => void,
    loading: boolean
}

export const UserDetailsComponent = ({ user, loadUser, loading }: Props) => {
    useEffect(() => {
        !Object.keys(user).length && loadUser()
        // eslint-disable-next-line
    }, [loadUser])

    if(!loading && !Object.keys(user).length) {
        return <Redirect to='/'/>
    }

    return (<div className="user-view-card">
        <div className="arrow-back">
            <Link to='/'>
                <BlockWithIcon icon='arrow-alt-circle-left' />
            </Link>
        </div>
        <Avatar img="/avatar.png" />
        <div>{user.name}</div>
        <div className="wrapper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        </div>
        <div className="wrapper">
            <div>Contacts:</div>
            <UserMainInfo user={user} />
        </div>
    </div>)
}
