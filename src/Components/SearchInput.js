import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch, resetPage, setCurrentRender, setLoadingFalse, setLoadingTrue, setSourceToRender } from '../Redux/Actions'
import s from '../Styles/LeftPanel.module.css'
import notfound from '../Assets/notfound-compressed.png'


const SearchInput = () => {
    const dispatch = useDispatch()

    const handleChange = ( event ) => {
        if ( event.target.value === '' ) {
            dispatch( setCurrentRender( 'pokeapi' ) )
            dispatch( resetPage() )
        }
        if ( event.keyCode !== 13 ) return
        dispatch( setLoadingTrue() )
        let query = event.target.value
        event.target.value = ''
        // dispatch( setCurrentRender( 'empty' ) )
        dispatch( resetPage() )
        fetchData( query )

    }

    const fetchData = async ( query ) => {
        try {
            const res = await fetch( `https://pokeapi.co/api/v2/pokemon/${query}` )
            const json = await res.json()
            let { id, name, height, weight, stats, types, sprites } = json
            let image = sprites.other["official-artwork"].front_default

            dispatch( addSearch( [{ id, name, height, weight, image, stats, types }] ) )
            dispatch( setSourceToRender( 'search' ) )
            dispatch( setCurrentRender( 'search' ) )

            console.log( json )
        } catch ( error ) {
            console.log( error )
            dispatch( addSearch( [{ id: '', name: 'Sorry, no pokemons were found...', image: '../Assets/notfound-compressed.png', height: 0, weight: 0, stats: [], types: [] }] ) )
            dispatch( setSourceToRender( 'search' ) )
            dispatch( setCurrentRender( 'search' ) )
        } finally {
            dispatch( setLoadingFalse() )
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