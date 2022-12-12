import React from 'react'
import { TypeColors } from '../Utils/TypeColors'
import s from '../Styles/Types.module.css'

const Types = ( { type } ) => {
    const { color1, color2, color3 } = TypeColors[type]

    return (
        <p
            className={s.parrafo}
            style={{
                backgroundImage: `linear-gradient(${color1} 50%, ${color2} 50%)`,
                padding: '0 5%',
                paddingBottom: '1%',
                borderRadius: '8px',
                // fontSize: 'medium',
                color: color3
            }}
        >
            {type}
        </p>
    )
}

export default Types