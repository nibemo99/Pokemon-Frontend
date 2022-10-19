import React from 'react'
import s from '../Styles/LeftPanel.module.css'


const SearchInput = () => {

    const handleChange = ( event ) => {
        if ( event.target.value === '' ) {
            console.log( 'yes' )

        }
    }

    return (
        <input
            placeholder='Name'
            className={s.input}
            onChange={handleChange}
        />
    )
}

export default SearchInput