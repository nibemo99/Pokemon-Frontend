import React from 'react'
import s from '../Styles/App.module.css'

const AnimatedPage = ( { children, removing } ) => {
    return (
        <div
            className={`${s.loadLandingPage} ${( removing ) ? s.removing : ''}`}
        >
            {children}
        </div>
    )
}

export default AnimatedPage