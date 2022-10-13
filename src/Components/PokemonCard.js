import React from 'react'
import s from '../Styles/PokemonCard.module.css'
import loading from '../Assets/loading_smaller2.gif'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import AnimatedDisplayer from './AnimatedDisplayer';


const PokemonCard = ( { pokemon } ) => {

    const capFirstLetter = ( name ) => {
        return name.replace( name[0], name[0].toUpperCase() )
    }

    return (
        <AnimatedDisplayer>
            <div className={s.individualCardddd}>
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
                    Type
                </div>
            </div>
        </AnimatedDisplayer>
    )
}

export default PokemonCard