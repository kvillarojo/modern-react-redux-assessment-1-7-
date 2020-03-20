import React from 'react'

export const UserDetails = (props) => {
    const {avatar, email, jobTitle} = props.userDetails[0]
    return(
        <div >
            <img className="right floated mini ui image" src={avatar}/>
            <div className="header">
                {email}
            </div>
            <div className="meta">
                {jobTitle}
            </div>
        </div>
    )
}

