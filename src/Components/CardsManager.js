import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import s from '../Styles/CardsManager.module.css'


const CardsManager = () => {
    const conditionToRender = useSelector( state => state.conditionToRender )
    console.log( conditionToRender );
    const pokemonsToRender = useSelector( state => state[conditionToRender] )


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
                <svg onClick={handlePrevious} className={s.icons} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
                <div>...</div>
                <div>{page - 1}</div>
                <div>{page}</div>
                <div>{page + 1}</div>
                <div>...</div>
                <svg onClick={handleNext} className={s.icons} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>

            <div className={s.wrapper}>
                {( pokemonsToRender.length ) ?
                    (
                        <div className={s.cardsDisplayer}>
                            {pokemonsToRender.map( pokemon => (
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