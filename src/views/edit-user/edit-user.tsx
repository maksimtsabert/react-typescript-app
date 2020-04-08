import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { DefaultForm } from '../../components/form'
import { UserMainInfo } from '../../components/user-main-info'
import { Avatar } from '../../components/avatart'
import { User } from '../../types'
import './index.css'

interface Props {
    user: any, //refactor
    loadUser: () => void,
    updateUserDetails: (user: User) => void,
    loading: boolean
}

export const EditUserComponent = ({ user, loadUser, updateUserDetails, loading }: Props) => {
    useEffect(() => {
        !Object.keys(user).length && loadUser()
        //eslint-disable-next-line
    }, [loadUser])

    if (!loading && !Object.keys(user).length) {
        return <Redirect to='/' />
    }

    const formCallback = (values: User) => {
        const userData = { id: user.id, ...values }
        updateUserDetails(userData)
    }

    return (<div>
        <div className="user-info d-flex">
            <Avatar img="/avatar.png">
                <Link to={`/user/${user.id}`} className="link">View</Link>
            </Avatar>
            <UserMainInfo user={user} />
        </div>
        <DefaultForm callBack={formCallback} userDetails={user} />
    </div>)
}
