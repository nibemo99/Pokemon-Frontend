import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import s from '../Styles/CardsManager.module.css'


const CardsManager = () => {
    const pokemonsAll = useSelector( state => state.pokemonsAPI )

    const [page, setPage] = useState( 1 )


    // Functions
    const handlePrevious = ( event ) => {
        setPage( prev => prev - 1 )
    }
    const handleNext = ( event ) => {
        setPage( prev => prev + 1 )
    }

    return (
        <div className={s.cardsManager}>
            <div className={s.navbar}>
                <svg onClick={handlePrevious} class={s.icons} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
                <div>{page - 1}</div>
                <div>{page}</div>
                <div>{page + 1}</div>
                <svg onClick={handleNext} class={s.icons} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>

            <div className={s.wrapper}>
                {( pokemonsAll.length ) ?
                    (
                        <div className={s.cardsDisplayer}>
                            {pokemonsAll.map( pokemon => (
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
                        >Loading</div>
                    )}

            </div>
        </div>
    )
}

export default CardsManager