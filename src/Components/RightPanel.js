import React from 'react'
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import s from '../Styles/RightPanel.module.css'


const RightPanel = () => {
    const pokemonsAll = useSelector( state => state.pokemonsAPI )

    return (
        <div className={s.wrapper}>

            <div>Create new pokemon</div>
            <div className={s.rightPanel}>
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

export default RightPanel