import React from 'react'
import s from '../Styles/PokemonCard.module.css'

const PokemonCard = ( { pokemon } ) => {

    const formatId = ( id ) => {
        if ( id < 10 ) {
            return `00${id}`
        } else if ( id < 100 ) {
            return `0${id}`
        } else {
            return id
        }


    }

    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatId( pokemon.id )}.png`

    const capFirstLetter = ( name ) => {
        return name.replace( name[0], name[0].toUpperCase() )
    }
    return (
        <div className={s.individualCard}>
            <div className={s.cardTitle}>

                <p>{capFirstLetter( pokemon.name )}</p>
                <p>{pokemon.id}</p>
            </div>
            <img className={s.miniImage} alt='' src={image} />
            <div className={s.cardTypes}>
                Feugo
            </div>

        </div>
    )
}

export default PokemonCard