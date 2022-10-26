import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import loading from '../Assets/loading_smaller2.gif'
import s from '../Styles/CardsManager.module.css'
import { appendPokeAPI, setCurrentRender, setOrderAs } from '../Redux/Actions';
import AnimatedLoading from './AnimatedLoading';
import Navbar from './Navbar';


const CardsManager = () => {
    const dispatch = useDispatch()

    const { currentPage, currentRender, isLoading, sourceToRender } = useSelector( state => state )

    const POKEMONS_PER_PAGE = 12
    let pokemonsPerPage = [...currentRender.slice( ( currentPage - 1 ) * POKEMONS_PER_PAGE, POKEMONS_PER_PAGE * currentPage )]
    // console.log( pokemonsPerPage.length, currentRender.length )


    useEffect( () => {
        let pokemons = []
        const fetchData = async () => {
            try {
                // for ( let i = currentRender.length + 1; i <= ( currentPage + 2 ) * POKEMONS_PER_PAGE; i++ ) {
                //     let res = await fetch( `https://pokeapi.co/api/v2/pokemon/${i}` )
                //     let json = await res.json()
                //     let { id, name, height, weight, stats, types, sprites } = json
                //     let image = sprites.other["official-artwork"].front_default
                //     pokemons.push( { id, name, height, weight, image, stats, types } )
                // }
                for ( let i = currentRender.length + 1; i <= ( currentPage + 2 ) * POKEMONS_PER_PAGE; i++ ) {
                    let res = await fetch( `http://localhost:3001/pokemons/${i}` )
                    let json = await res.json()
                    pokemons.push( json )
                }
                dispatch( appendPokeAPI( pokemons ) )
                dispatch( setOrderAs() )
                dispatch( setCurrentRender( 'pokeapi' ) )
                console.log( pokemons )
            } catch ( error ) {
                console.log( error )
            }
        }

        if ( sourceToRender === 'pokeapi' ) {
            if ( !pokemonsPerPage.length ) {
                if ( currentPage <= 1 ) {
                    dispatch( setCurrentRender( 'pokeapi' ) )
                } else {
                    fetchData()
                }
            }
        }

    }, [pokemonsPerPage.length, currentPage, currentRender.length, dispatch] )

    // console.log( pokemonsPerPage )

    return (
        <div className={s.cardsManager}>
            <Navbar pokemonsPerPage={pokemonsPerPage} />

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
                    : ''}
                {( isLoading || !pokemonsPerPage.length ) &&
                    ( (
                        <AnimatedLoading>
                            <div className={s.loading} >
                                <img alt='' src={loading} />
                                <p>Loading</p>
                            </div>
                        </AnimatedLoading>

                    ) )
                }
            </div>
        </div >
    )
}

export default CardsManager