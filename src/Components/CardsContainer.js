import React from 'react'
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import s from '../Styles/CardsContainer.module.css'


const CardsContainer = () => {
    const pokemonsAll = useSelector( state => state.pokemonsAPI )

    return (
        <div className={s.wrapper}>

            <div>Create new pokemon</div>
            <div className={s.cardsContainer}>
                {( pokemonsAll.length ) ?
                    ( pokemonsAll.map( pokemon => (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                        />
                    ) ) )
                    : "hola"}

            </div>
        </div>
    )
}

export default CardsContainer