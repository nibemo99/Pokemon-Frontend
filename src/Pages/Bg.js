import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import s from '../Styles/Bg.module.css'

export const Bg = () => {
    const location = useLocation()
    const { bgColor } = useSelector( state => state )

    return (
        <div className={`${s.container} ${s.gray}`}>
            <div
                style={{
                    backgroundColor: `#3a3a3a`,
                    opacity: `${( location.pathname.split( '/' )[2] || location.pathname.split( '/' )[1] === 'create' ) ? '1' : '0'}`,
                    backgroundImage: `radial-gradient(circle at center center, ${( location.pathname.split( '/' )[1] === 'create' ) ? 'yellow' : bgColor.color1}, #3a3a3a), repeating-radial-gradient(circle at center center,${( location.pathname.split( '/' )[1] === 'create' ) ? 'yellow' : bgColor.color1},${( location.pathname.split( '/' )[1] === 'create' ) ? 'yellow' : bgColor.color1},40px,transparent 40px,transparent 40px`,
                    backgroundBlendMode: 'multiply',
                    transition: 'all 3s'
                }}
            />
        </div >
    )
}
