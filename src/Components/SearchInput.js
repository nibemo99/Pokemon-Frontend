import React from 'react'
import s from '../Styles/LeftPanel.module.css'


const SearchInput = () => {

    const handleChange = ( event ) => {
        if ( event.keyCode !== 13 ) return
        let query = event.target.value
        event.target.value = ''
        fetchData( query )

    }

    const fetchData = async ( query ) => {
        try {
            const res = await fetch( `https://pokeapi.co/api/v2/pokemon/${query}` )
            const data = await res.json()
            console.log( data )
        } catch ( error ) {
            console.log( error )
        }
    }

    return (
        <input
            placeholder='Name'
            className={s.input}
            onKeyUp={handleChange}
        />
    )
}

export default SearchInput