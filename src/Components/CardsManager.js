import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import loading from '../Assets/loading_smaller2.gif'
import s from '../Styles/CardsManager.module.css'
import { appendPokemonsAPI, createAlphabeticalOrder, createByIdOrder, setOrderAs } from '../Redux/Actions';
import { AnimatePresence } from 'framer-motion';
import AnimatedLoading from './AnimatedLoading';
import Navbar from './Navbar';


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



    return (
        <div className={s.cardsManager}>
            <Navbar pokemonsPerPage={pokemonsPerPage} />

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