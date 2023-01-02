import React from 'react'
import SocialFriends from '../communities/SocialFriends'
import './RightBar.css'

const RightBar = ({styles, righter}) => {
    return (
        <div style={styles} onClick={righter} className="rightbar">
            <SocialFriends />
        </div>
    )
}

export default RightBar
