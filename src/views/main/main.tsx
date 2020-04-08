import React, { useEffect, useState } from 'react'
import { UserCard } from '../../components/user-card'
import { DefaultForm } from '../../components/form'
import { SearchInput } from '../../components/search-input'
import { Button } from '../../components/button'
import { User } from '../../types'

const getNextId = (): number => Math.floor(Math.random() * Math.floor(100))
const setIdMapper = (values: User) => ({ id: getNextId(), ...values })

interface Props {
    users: User[],
    setSearchQuery: (query: string) => void,
    loadUsers: () => void,
    addUser: (data: User) => void
}

export const MainComponent = ({ users, loadUsers, setSearchQuery, addUser }: Props) => {
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        !users.length && loadUsers()
        // eslint-disable-next-line
    }, [loadUsers])

    const formCallBack = (values: User): void => {
        addUser(setIdMapper(values))
        setShowForm(false)
    }

    return (<div className="main-wrapper">
        <SearchInput
            callBack={({ target: { value } }) => setSearchQuery(value)}
            title='Search users' />
        <Button
            onClick={() => setShowForm(true)}
            text="Add user"
            disabled={showForm} />
        <DefaultForm
            callBack={formCallBack}
            show={showForm} />
        <div className="users-list">
            {users.map((user, index) => (
                <UserCard user={user} key={index} />
            ))}
        </div>
    </div>)
}
