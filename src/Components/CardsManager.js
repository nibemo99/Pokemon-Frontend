import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import loading from '../Assets/loading_smaller2.gif'
import s from '../Styles/CardsManager.module.css'
import { appendPokemonsAPI, createAlphabeticalOrder, createByIdOrder, setOrderAs, setPageTo } from '../Redux/Actions';
import { AnimatePresence } from 'framer-motion';
import AnimatedDisplayer from './AnimatedDisplayer';
import AnimatedLoading from './AnimatedLoading';


const CardsManager = () => {
    const dispatch = useDispatch()

    const conditionToRender = useSelector( state => state.conditionToRender )
    const pokemonsToRender = useSelector( state => state[conditionToRender] )
    const currentPage = useSelector( state => state.currentPage )

    // const [page, setPage] = useState( 0 )
    const POKEMONS_PER_PAGE = 12
    let pokemonsPerPage = [...pokemonsToRender.slice( ( currentPage - 1 ) * POKEMONS_PER_PAGE, POKEMONS_PER_PAGE * currentPage )]
    // console.log( pokemonsPerPage.length, pokemonsToRender.length )


    useEffect( () => {
        let pokemons = []
        const fetchData = async () => {
            try {
                for ( let i = pokemonsToRender.length + 1; i <= ( currentPage + 2 ) * POKEMONS_PER_PAGE; i++ ) {
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

        if ( !pokemonsPerPage.length && currentPage > 3 ) {
            fetchData()
        }
    }, [pokemonsPerPage.length, currentPage, pokemonsToRender.length, dispatch] )



    // Functions
    const handlePrevious = ( event ) => {
        if ( !pokemonsPerPage.length ) return
        if ( currentPage !== 1 ) {
            dispatch( setPageTo( currentPage - 1 ) )
        }
    }
    const handleNext = ( event ) => {
        if ( pokemonsPerPage.length ) dispatch( setPageTo( currentPage + 1 ) )
    }
    const handlePage = ( event ) => {
        if ( !pokemonsPerPage.length ) return
        const number = Number( event.target.innerText )
        dispatch( setPageTo( number ) )
    }


    // Animations

    return (
        <div className={s.cardsManager}>
            <div className={s.navbar}>
                <svg onClick={handlePrevious} className={s.icons} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>

                <button onClick={handlePage} className={`${s.button} ${( currentPage === 1 ) ? ( s.selected ) : ''}`} >
                    {( currentPage >= 4 ) ? ( currentPage - 2 ) : '1'}
                </button>
                <button onClick={handlePage} className={`${s.button} ${( currentPage === 2 ) ? ( s.selected ) : ''}`} >
                    {( currentPage >= 4 ) ? ( currentPage - 1 ) : '2'}
                </button>
                <button onClick={handlePage} className={`${s.button} ${( currentPage > 2 ) ? ( s.selected ) : ''}`} >
                    {( currentPage >= 4 ) ? ( currentPage ) : '3'}
                </button>
                <button onClick={handlePage} className={`${s.button} `} >
                    {( currentPage >= 4 ) ? ( currentPage + 1 ) : '4'}
                </button>
                <button onClick={handlePage} className={`${s.button} `} >
                    {( currentPage >= 4 ) ? ( currentPage + 2 ) : '5'}
                </button>

                <svg onClick={handleNext} className={s.icons} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>

            <div className={s.wrapper}>
                {( pokemonsPerPage.length ) ?
                    (
                        <div className={s.cardsDisplayer}>
                            {pokemonsPerPage.map( pokemon => (
                                <AnimatePresence key={pokemon.id} mode="wait">
                                    <PokemonCard
                                        key={pokemon.id}
                                        pokemon={pokemon}
                                    />
                                </AnimatePresence>
                            ) )}
                        </div>
                    )
                    : ''}
                <AnimatePresence mode="wait">
                    {!pokemonsPerPage.length &&
                        ( (
                            <AnimatedLoading>
                                <div className={s.loading} >
                                    <img alt='' src={loading} />
                                    <p>Loading</p>
                                </div>
                            </AnimatedLoading>

                        ) )
                    }
                </AnimatePresence>
            </div>
        </div >
    )
}

export default CardsManager