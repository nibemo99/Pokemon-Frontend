import React from 'react'
import s from '../Styles/PokemonCard.module.css'

const PokemonCard = ( { pokemon } ) => {




    const capFirstLetter = ( name ) => {
        return name.replace( name[0], name[0].toUpperCase() )
    }


    return (
        <div className={s.individualCard}>
            <div className={s.cardTitle}>
                <p>{capFirstLetter( pokemon.name )}</p>
                <p>{pokemon.id}</p>
            </div>
            <img className={s.miniImage} alt='' src={pokemon.image} />
            <div className={s.cardTypes}>
                Feugo
            </div>

        </div>
    )
}

export default PokemonCard