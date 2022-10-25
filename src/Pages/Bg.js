import React from 'react'
import { useSelector } from 'react-redux'
import s from '../Styles/Bg.module.css'

export const Bg = ( { location } ) => {

    // console.log( location.pathname, typeof location.pathname )

    const animations = {
        initial: { opacity: 0, },
        animate: { opacity: 1, },
        exit: { opacity: 0 },
    }

    const { bgColor } = useSelector( state => state )
    // console.log( bgColor )

    return (
        <div className={`${s.container} ${s.gray}`}>
            {
                ( location.pathname.length > 9 && location.pathname.includes( '/pokemons' ) ) &&
                (
                    <div
                        className={`${s.container}`}
                        style={{
                            backgroundColor: `#3a3a3a`,
                            opacity: '0.8',
                            backgroundImage: `radial-gradient(circle at center center, ${bgColor.color1}, #3a3a3a), repeating-radial-gradient(circle at center center,${bgColor.color1},${bgColor.color1},40px,transparent 40px,transparent 40px`,
                            backgroundBlendMode: 'multiply'
                        }}
                    >
                    </div>
                )
            }

            {
                ( !location.pathname.includes( '/pokemons' ) ) &&
                (
                    <div
                        className={`${s.container} ${s.red}`}
                    >
                    </div>
                )
            }

        </div >
    )
}
