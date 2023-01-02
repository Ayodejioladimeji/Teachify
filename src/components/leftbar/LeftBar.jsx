import React from 'react'
import ProfileSection from '../communities/ProfileSection'
import Navigation from '../communities/Navigation'
import './LeftBar.css'

const LeftBar = ({style, lefter}) => {
    return (
        <div style={style} className="leftbar" onClick={lefter}>
            <ProfileSection />
            <Navigation />
        </div>
    )
}

export default LeftBar
