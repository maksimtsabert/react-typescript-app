import React from 'react'

interface Props {
    callBack: (value: any) => void,
    title: string
}

export const SearchInput = ({ callBack, title }: Props) => {
    return (
        <div className="form-group mt-2">
            <label>{title}</label>
            <input type="search" className="form-control" placeholder="Search" onChange={callBack} />
        </div>
    )
}
