import React from 'react'
import s from "../Styles/TypeButton.module.css";

const TypeButton = ( { children, selected } ) => {
    return (
        <button className={`${s.text} ${s[children]} ${( selected ) ? s[`${children}Sel`] : ''}`}>
            {children}
        </button>
    )
}

export default TypeButton