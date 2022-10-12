import React from 'react'
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import s from '../Styles/CardsManager.module.css'


const CardsManager = () => {
    const pokemonsAll = useSelector( state => state.pokemonsAPI )

    return (
        <div>
            <div className={s.cardsManager}>
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

export default CardsManager