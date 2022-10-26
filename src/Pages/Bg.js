import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import s from '../Styles/Bg.module.css'

export const Bg = () => {
    const location = useLocation()
    const [dataCss, setDataCss] = useState( {
        dataCss: 'root',
        removing: false
    } )
    const { bgColor } = useSelector( state => state )
    const locationArray = location.pathname.split( '/' )
    console.log( dataCss, bgColor, locationArray )


    useEffect( () => {
        let temp = ''
        if ( locationArray[2] ) {
            temp = bgColor
        } else {
            temp = locationArray[1]
        }
        setDataCss( prev => temp )

    }, [locationArray, bgColor] )



    return (
        <div className={`${s.container} ${s.gray}`}>
            <div className={s.container} data-css={dataCss} />
        </div >
    )
}
