import React from 'react'
import s from "../Styles/TypeButton.module.css";

const TypeButton = ( { children, selected, handleClick, typesToRender } ) => {

    const isSelected = ( children ) => {
        if ( typesToRender.includes( children ) ) {
            return true
        }
        return false
    }

    return (
        <button
            onClick={handleClick}
            className={`${s.text} ${s[children]} ${( isSelected( children ) ) ? s[`${children}Sel`] : ''}`}
        >
            {children}
        </button>
    )
}

export default TypeButton