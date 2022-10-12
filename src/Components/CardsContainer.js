import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';


const CardsContainer = () => {
    const pokemonsAll = useSelector( state => state.pokemonsAPI )


    return (
        <div>

            <div>Create new pokemon</div>
            <div>
                {pokemonsAll?.map( pokemon => (
                    <PokemonCard
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                    />
                )
                )}

            </div>
        </div>
    )
}

export default CardsContainer