import React from 'react'
import s from '../Styles/PokemonCard.module.css'
import loading from '../Assets/loading_smaller2.gif'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import AnimatedDisplayer from './AnimatedDisplayer';
import { useNavigate } from 'react-router';
import Types from './Types';
import { useDispatch } from 'react-redux';
import { toggleRemovePage } from '../Redux/Actions';

const PokemonCard = ( { pokemon } ) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const capFirstLetter = ( name ) => {
        return name.replace( name[0], name[0].toUpperCase() )
    }

    const navigateHandler = ( event ) => {
        dispatch( toggleRemovePage() )
        setTimeout( () => {
            navigate( `/pokemons/${pokemon.id}` )
            dispatch( toggleRemovePage() )
        }, 300 );
    }


    return (
        <AnimatedDisplayer>
            <div
                className={s.individualCardd}
                onClick={navigateHandler}

            >
                <div className={s.cardTitle}>
                    <p>{capFirstLetter( pokemon.name )}</p>
                    <p>{pokemon.id}</p>
                </div>
                <LazyLoadImage
                    className={s.miniImage}
                    alt=''
                    src={pokemon.image}
                    effect='blur'
                    placeholderSrc={loading}
                />
                <div className={s.cardTypes}>
                    {pokemon.types.map( type => (
                        // <p>{capFirstLetter( type.type.name )}</p>
                        <Types key={type.type.name} type={capFirstLetter( type.type.name )} />
                    ) )}
                </div>
            </div>
        </AnimatedDisplayer>
    )
}

export default PokemonCard