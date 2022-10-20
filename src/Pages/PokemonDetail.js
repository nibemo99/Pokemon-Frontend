import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import AnimatedPage2 from './AnimatedPage2'
import s from '../Styles/PokemonDetail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import SpecialDefense from '../Assets/Icons/blue-shield.svg'
import Defense from '../Assets/Icons/green-shield.svg'
import Hp from '../Assets/Icons/heart.svg'
import Weight from '../Assets/Icons/weight.svg'
import SpecialAttack from '../Assets/Icons/sword-double.svg'
import Attack from '../Assets/Icons/sword-single.svg'
import Vertical from '../Assets/Icons/vertical.svg'
import Speed from '../Assets/Icons/speed.svg'
import Types from '../Components/Types';
import { setBgColor, setRemovePage } from '../Redux/Actions';
import { TypeColors } from '../Utils/TypeColors';

const PokemonDetail = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const query = Number( pathname.split( '/' ).at( -1 ) )
    const [detail, setDetail] = useState( useSelector( state => state.pokeapi[query - 1] ) )
    const [removing, setRemoving] = useState( false )

    const capFirstLetter = ( name ) => {
        return name.replace( name[0], name[0].toUpperCase() )
    }

    const fetchData = async ( index ) => {
        try {
            let res = await fetch( `https://pokeapi.co/api/v2/pokemon/${index}` )
            let json = await res.json()
            let { id, name, height, weight, stats, types, sprites } = json
            let image = sprites.other["official-artwork"].front_default
            setDetail( { id, name, height, weight, image, stats, types } )
            const colors = TypeColors[capFirstLetter( types[0].type.name )]
            dispatch( setBgColor( colors ) )
            console.log( 'fetched' )
        } catch ( error ) {
            console.log( error )
        }
    }

    const navigateHandler = ( event ) => {
        setRemoving( prev => !prev )
        setTimeout( () => {
            navigate( '/pokemons' )
        }, 300 );
    }

    if ( !detail ) {
        fetchData( query )
    } else {
        const colors = TypeColors[capFirstLetter( detail.types[0].type.name )]
        dispatch( setBgColor( colors ) )
        console.log( 'redux' )
    }

    dispatch( setRemovePage( false ) )

    return (
        <AnimatedPage2 removing={removing}>
            <div
                onClick={navigateHandler}
                className={s.wrapper}
            >
                <p className={s.click}>
                    Click anywhere to go back
                </p>

                {detail && (
                    <div className={s.card}>
                        <img alt='' className={s.image} src={detail.image} />
                        <div className={s.info}>
                            <div className={s.title}>
                                <p className={s.name}>{capFirstLetter( detail.name )}</p>
                                <p className={s.id}>#{detail.id}</p>
                            </div>
                            <div className={s.stats}>
                                <p>
                                    <img alt='' className={s.icons} src={Vertical} />
                                    Height: {detail.height}
                                </p>
                                <p>
                                    <img alt='' className={s.icons} src={Weight} />
                                    Weight: {detail.weight}
                                </p>
                            </div>
                            <div className={s.stats} >
                                <p>
                                    <img alt='' className={s.icons} src={Hp} />
                                    HP: {detail.stats[0].base_stat}
                                </p>
                                <p>
                                    <img alt='' className={s.icons} src={Attack} />
                                    Attack: {detail.stats[1].base_stat}
                                </p>
                                <p>
                                    <img alt='' className={s.icons} src={Defense} />
                                    Defense: {detail.stats[2].base_stat}
                                </p>
                                <p>
                                    <img alt='' className={s.icons} src={SpecialAttack} />
                                    Special Attack: {detail.stats[3].base_stat}
                                </p>
                                <p>
                                    <img alt='' className={s.icons} src={SpecialDefense} />
                                    Special Defense: {detail.stats[4].base_stat}
                                </p>
                                <p>
                                    <img alt='' className={s.icons} src={Speed} />
                                    Speed: {detail.stats[5].base_stat}
                                </p>
                            </div>
                            <div className={s.types}>
                                {detail.types.map( type => (
                                    <Types key={type.type.name} type={capFirstLetter( type.type.name )} />
                                ) )}
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </AnimatedPage2>
    )
}

export default PokemonDetail