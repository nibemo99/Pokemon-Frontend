import React from 'react'
import s from '../Styles/PokemonCard.module.css'
import notfound from '../Assets/notfound-min.png'
import AnimatedDisplayer from './AnimatedDisplayer';
import { useHistory } from "react-router-dom"
import Types from './Types';
import { useDispatch } from 'react-redux';
import { toggleRemovePage } from '../Redux/Actions';

const PokemonCard = ( { pokemon } ) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const capFirstLetter = ( name ) => {
        return name.replace( name[0], name[0].toUpperCase() )
    }

    const navigateHandler = ( event ) => {
        if ( pokemon.id === '' ) return
        dispatch( toggleRemovePage() )
        setTimeout( () => {
            history.push( `/pokemons/${pokemon.id}` )
        }, 300 );
    }


    return (
        <AnimatedDisplayer>
            <div
                className={s.individualCardd}
                onClick={navigateHandler}

            >
                <div className={s.cardTitle}>
                    <p>
                        {capFirstLetter( pokemon.name )}
                    </p>
                    <p>#{pokemon.id}</p>
                </div>
                <img
                    className={s.miniImage}
                    alt=''
                    src={pokemon.image || notfound}
                    data-css={( !pokemon.image ) ? true : false}
                />
                <div className={s.cardTypes}>
                    {pokemon.types.map( type => (
                        <Types key={type.type.name} type={capFirstLetter( type.type.name )} />
                    ) )}
                </div>
            </div>
        </AnimatedDisplayer>
    )
}

export default PokemonCard