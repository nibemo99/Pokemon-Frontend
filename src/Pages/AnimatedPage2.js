import React from 'react'
import s from '../Styles/Animations.module.css'

const AnimatedPage2 = ( { children, removing } ) => {
    return (
        <div
            className={`${s.loadPokemonsPage} ${( removing ) ? s.removingPokemonsPage : ''}`}
        >
            {children}
        </div>
    )
}

export default AnimatedPage2