import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSearch, clearTypeFilter, resetPage, setCurrentRender, setLoadingFalse, setLoadingTrue, setSourceToRender } from '../Redux/Actions'
import s from '../Styles/LeftPanel.module.css'

const SearchInput = () => {
    const dispatch = useDispatch()
    const { sourceToRender } = useSelector( state => state )

    const handleChange = ( event ) => {
        if ( event.target.value === '' ) {
            dispatch( setCurrentRender( sourceToRender ) )
            dispatch( resetPage() )
        }
        if ( event.keyCode !== 13 ) return
        dispatch( setLoadingTrue() )
        let query = event.target.value
        event.target.value = ''
        // dispatch( setCurrentRender( 'empty' ) )
        dispatch( clearTypeFilter() )
        dispatch( resetPage() )
        fetchData( query )

    }

    const fetchData = async ( query ) => {
        try {
            // const res = await fetch( `https://pokeapi.co/api/v2/pokemon/${query}` )
            // const json = await res.json()
            // let { id, name, height, weight, stats, types, sprites } = json
            // let image = sprites.other["official-artwork"].front_default

            // dispatch( addSearch( [{ id, name, height, weight, image, stats, types }] ) )
            // dispatch( setSourceToRender( 'search' ) )
            // dispatch( setCurrentRender( 'search' ) )

            // const res = await fetch( `http://localhost:3001/pokemons/?name=${query}` )
            const res = await fetch( `https://backendpi.up.railway.app/pokemons/?name=${query}` )
            let json = await res.json()
            console.log( json )
            if ( json.error ) throw new Error()
            if ( !json.length ) {
                let stats = [
                    { "base_stat": json.hp, "stat": { "name": "hp" } },
                    { "base_stat": json.attack, "stat": { "name": "attack" } },
                    { "base_stat": json.defense, "stat": { "name": "defense" } },
                    { "base_stat": json.specialAttack, "stat": { "name": "special-attack" } },
                    { "base_stat": json.specialDefense, "stat": { "name": "special-defense" } },
                    { "base_stat": json.speed, "stat": { "name": "speed" } }
                ]
                let types = [{ "type": { "name": json.type1 } }]
                if ( json.type2 ) types.push( { "type": { "name": json.type2 } } )
                json = [{
                    id: json.id,
                    name: json.name,
                    height: json.height,
                    weight: json.weight,
                    image: json.url,
                    stats,
                    types
                }]
            }

            dispatch( addSearch( json ) )
            dispatch( setSourceToRender( 'search' ) )
            dispatch( setCurrentRender( 'search' ) )



            // console.log( json )
        } catch ( error ) {
            // console.log( error )
            dispatch( addSearch( [{ id: '', name: 'Not found...', image: 'https://i.imgur.com/J9jdC56.png', types: [{ "type": { "name": "Sorry" } }] }] ) )
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