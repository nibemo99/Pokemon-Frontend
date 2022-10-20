import React from 'react'
import s from '../Styles/Animations.module.css'


const AnimatedDisplayer = ( { children } ) => {
    return (
        <div className={s.loadPokemonsCard}>
            {children}
        </div>
    )
}

export default AnimatedDisplayer