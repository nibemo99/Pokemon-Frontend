import React from 'react'
import s from '../Styles/Animations.module.css'

const AnimatedPage = ( { children, removing } ) => {
    return (
        <div
            className={`${s.loadLandingPage} ${( removing ) ? s.removingLandingPage : ''}`}
        >
            {children}
        </div>
    )
}

export default AnimatedPage