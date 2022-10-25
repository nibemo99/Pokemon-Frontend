import React from 'react'

const AnimatedLoading = ( { children, removing } ) => {
    return (
        <div
        // className={`${s.loadLandingPage} ${( removing ) ? s.removingLandingPage : ''}`}
        >
            {children}
        </div>
    )
}

export default AnimatedLoading