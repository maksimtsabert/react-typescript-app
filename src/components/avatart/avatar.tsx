import React, { ReactNode } from 'react'
import './index.css'

interface Props {
    children?: ReactNode, //?
    img: string
}

export const Avatar = ({ children, img }: Props) => {
    return (
        <div className="user-wrapper-avatar">
            <img className="user-avatar" src={img} alt="" />
            {children &&
                <div>
                    {children}
                </div>
            }
        </div>
    )
}
