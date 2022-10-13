import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import loading from '../Assets/loading_smaller2.gif'
import s from '../Styles/CardsManager.module.css'
import { appendPokemonsAPI, createAlphabeticalOrder, createByIdOrder, setOrderAs } from '../Redux/Actions';


const CardsManager = () => {
    const dispatch = useDispatch()
    const nextPageRef = useRef()
    const prevPageRef = useRef()
    const midPageRef = useRef()

    const conditionToRender = useSelector( state => state.conditionToRender )
    const pokemonsToRender = useSelector( state => state[conditionToRender] )

    const [page, setPage] = useState( 0 )
    const POKEMONS_PER_PAGE = 12
    let pokemonsPerPage = [...pokemonsToRender.slice( page * POKEMONS_PER_PAGE, POKEMONS_PER_PAGE * ( page + 1 ) )]
    // console.log( pokemonsPerPage.length, pokemonsToRender.length )


    useEffect( () => {
        let pokemons = []
        const fetchData = async () => {
            try {
                for ( let i = pokemonsToRender.length + 1; i <= ( page + 3 ) * POKEMONS_PER_PAGE; i++ ) {
                    let res = await fetch( `https://pokeapi.co/api/v2/pokemon/${i}` )
                    let json = await res.json()
                    let { id, name, height, weight, stats, types, sprites } = json
                    let image = sprites.other["official-artwork"].front_default
                    pokemons.push( { id, name, height, weight, image, stats, types } )
                }
                dispatch( appendPokemonsAPI( pokemons ) )
                dispatch( createAlphabeticalOrder() )
                dispatch( createByIdOrder() )
                dispatch( setOrderAs() )
                console.log( pokemons )
            } catch ( error ) {
                console.log( error )
            }
        }

        if ( !pokemonsPerPage.length && page > 2 ) {
            fetchData()
        }
    }, [pokemonsPerPage.length, page, dispatch] )



    // Functions
    const handlePrevious = ( event ) => {
        if ( page !== 0 ) {
            setPage( prev => prev - 1 )
        }
    }
    const handleNext = ( event ) => {
        if ( pokemonsPerPage.length ) setPage( prev => prev + 1 )
    }
    const handlePage = ( ref ) => {
        const number = Number( ref.current.innerText ) - 1
        setPage( number )
    }

    return (
        <div className={s.cardsManager}>
            <div className={s.navbar}>
                <svg onClick={handlePrevious} className={s.icons} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
                <div onClick={() => handlePage( prevPageRef )} ref={prevPageRef} >{( page <= 1 ) ? ( 1 ) : ( page - 1 )}</div>
                <div onClick={() => handlePage( midPageRef )} ref={midPageRef} >{( page === 0 ) ? ( page + 2 ) : ( page + 1 )}</div>
                <div onClick={() => handlePage( nextPageRef )} ref={nextPageRef} >{( page === 0 ) ? ( page + 3 ) : ( page + 3 )}</div>
                <svg onClick={handleNext} className={s.icons} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>

            <div className={s.wrapper}>
                {( pokemonsPerPage.length ) ?
                    (
                        <div className={s.cardsDisplayer}>

                            {pokemonsPerPage.map( pokemon => (
                                <PokemonCard
                                    key={pokemon.id}
                                    pokemon={pokemon}
                                />
                            ) )}
                        </div>
                    )
                    : (
                        <div
                            className={s.loading}
                        >

                            <img alt='' src={loading} />
                            <p>Loading</p>
                        </div>
                    )}

            </div>
        </div>
    )
}

export default CardsManager