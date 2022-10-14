import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAlphabeticalOrder, createByIdOrder, flipArray, setSourceToRender, setOrderAs, setOrderDe, setOrderToRender, resetPage } from '../Redux/Actions'
import s from '../Styles/LeftPanel.module.css'
import Order from './Order'
import { AnimatePresence, motion } from "framer-motion";
import AnimatedFiltersTitle from './AnimatedFiltersTitle'

const LeftPanel = () => {
    const dispatch = useDispatch()
    const { sourceToRender, orderToRender, currentOrder } = useSelector( state => state )
    const hasFilters = ( sourceToRender === 'pokeAPI' && orderToRender === 'id' )

    // Functions
    const handleOrder = ( event ) => {
        const type = event.target.innerText
        switch ( type ) {
            case 'Alphabetical':
                dispatch( setOrderToRender( 'alphabetical' ) )
                if ( sourceToRender !== 'pokemonsAlphabetical' ) {
                    dispatch( createAlphabeticalOrder() )
                    dispatch( setSourceToRender( 'pokemonsAlphabetical' ) )
                    dispatch( setOrderAs() )
                } else {
                    if ( currentOrder === 'as' ) {
                        dispatch( flipArray( 'pokemonsAlphabetical' ) )
                        dispatch( setSourceToRender( 'pokemonsAlphabetical' ) )
                        dispatch( setOrderDe() )
                    } else {
                        dispatch( flipArray( 'pokemonsAlphabetical' ) )
                        dispatch( setSourceToRender( 'pokemonsAlphabetical' ) )
                        dispatch( setOrderAs() )
                    }
                }
                break;
            case 'ID':
                dispatch( setOrderToRender( 'id' ) )
                console.log( sourceToRender )
                if ( sourceToRender !== 'pokemonsById' ) {
                    dispatch( createByIdOrder() )
                    if ( sourceToRender === 'pokeAPI' ) dispatch( flipArray( 'pokemonsById' ) )
                    dispatch( setSourceToRender( 'pokemonsById' ) )
                    dispatch( ( sourceToRender === 'pokeAPI' ) ? setOrderDe() : setOrderAs() )
                } else {
                    if ( currentOrder === 'as' ) {
                        console.log( sourceToRender )
                        dispatch( flipArray( 'pokemonsById' ) )
                        dispatch( setSourceToRender( 'pokemonsById' ) )
                        dispatch( setOrderDe() )
                    } else {
                        dispatch( flipArray( 'pokemonsById' ) )
                        dispatch( setSourceToRender( 'pokemonsById' ) )
                        dispatch( setOrderAs() )
                    }
                }
                break;
            case 'Attack':
                dispatch( setOrderToRender( 'attack' ) )
                break
            case 'Defense':
                dispatch( setOrderToRender( 'defense' ) )
                break
            case 'Speed':
                dispatch( setOrderToRender( 'speed' ) )
                break
            default:
                break;
        }
    }
    const handleSource = ( event ) => {
        const type = event.target.innerText
        switch ( type ) {
            case 'Both':
                if ( sourceToRender === 'both' ) break
                dispatch( setSourceToRender( 'empty' ) )
                setTimeout( () => {
                    dispatch( setSourceToRender( 'both' ) )
                }, 500 );
                break;
            case 'PokeAPI':
                if ( sourceToRender === 'pokeAPI' ) break
                dispatch( setSourceToRender( 'empty' ) )
                setTimeout( () => {
                    dispatch( setSourceToRender( 'pokeAPI' ) )
                }, 500 );
                break;
            case 'Database':
                if ( sourceToRender === 'database' ) break
                dispatch( setSourceToRender( 'empty' ) )
                setTimeout( () => {
                    dispatch( setSourceToRender( 'database' ) )
                }, 500 );
                break;

            default:
                break;
        }
    }
    const handleClearFilters = ( event ) => {
        dispatch( setSourceToRender( 'empty' ) )
        dispatch( setOrderToRender( 'empty' ) )
        dispatch( setOrderAs() )
        dispatch( resetPage() )
        setTimeout( () => {
            dispatch( setSourceToRender( 'pokeAPI' ) )
            dispatch( setOrderToRender( 'id' ) )
        }, 500 );
    }

    // Animations
    const animations = {
        whileHover: {
            scale: 1.2,
            backgroundColor: '#B3541E',
            color: 'white'
        },
        whileTap: {
            scale: 0.9,
        },
    }


    return (
        <div className={s.wrapper}>
            <div className={` ${s.flexColCenter}`} >
                <div className={`${s.filterTitle}`} >
                    <AnimatePresence mode="wait">
                        {/* <AnimatedFiltersTitle> */}
                        {( hasFilters ) && (
                            <AnimatedFiltersTitle>
                                <p className={s.absolute} >
                                    Filter by...
                                </p>
                            </AnimatedFiltersTitle>
                        )}
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        {( !hasFilters ) &&
                            (
                                <AnimatedFiltersTitle>
                                    <p className={`${s.absolute} ${s.pointer}`} onClick={handleClearFilters} >
                                        Clear filters
                                    </p>
                                </AnimatedFiltersTitle>
                            )}
                        {/* </AnimatedFiltersTitle> */}
                    </AnimatePresence>
                </div>
                <input
                    placeholder='Name'
                    className={s.input}
                />
            </div>
            <div className={` ${s.flexColCenter} ${s.mediumGap}`} >
                <p className={`${s.searchTitle}`} >Source</p>
                <div className={`${s.flexRowCenter} ${s.smallGap}`} >
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={`${s.mx} ${( sourceToRender === 'both' ) && s.selected}`}
                        onClick={handleSource}
                    >
                        Both
                    </motion.button>
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={`${s.mx} ${( sourceToRender === 'pokeAPI' ) && s.selected}`}
                        onClick={handleSource}
                    >
                        PokeAPI
                    </motion.button>
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={`${s.mx} ${( sourceToRender === 'database' ) && s.selected}`}
                        onClick={handleSource}
                    >
                        Database
                    </motion.button>
                </div>
            </div>
            <div className={` ${s.flexColCenter} ${s.mediumGap}`} >
                <p className={`${s.searchTitle}`} ><Order /></p>
                <div className={`${s.flexRowCenter} ${s.smallGap}`} >
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={`${s.mx} ${( orderToRender === 'id' ) && s.selected}`}
                        onClick={handleOrder}
                    >
                        ID
                    </motion.button>
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={`${s.mx} ${( orderToRender === 'alphabetical' ) && s.selected}`}
                        onClick={handleOrder}
                    >
                        Alphabetical
                    </motion.button>
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={`${s.mx} ${( orderToRender === 'attack' ) && s.selected}`}
                        onClick={handleOrder}
                    >
                        Attack
                    </motion.button>
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={`${s.mx} ${( orderToRender === 'defense' ) && s.selected}`}
                        onClick={handleOrder}
                    >
                        Defense
                    </motion.button>
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={`${s.mx} ${( orderToRender === 'speed' ) && s.selected}`}
                        onClick={handleOrder}
                    >
                        Speed
                    </motion.button>
                </div>
            </div>
            <div className={` ${s.flexColCenter} ${s.mediumGap}`} >
                <p className={`${s.searchTitle}`} >Type</p>
                <div className={`${s.flexRowCenter} ${s.smallGap}`} >
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={s.mx}
                    >
                        Fire
                    </motion.button>
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={s.mx}
                    >
                        Water
                    </motion.button>
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={s.mx}
                    >
                        Grass
                    </motion.button>
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={s.mx}
                    >
                        Rock
                    </motion.button>
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={s.mx}
                    >
                        Posion
                    </motion.button>
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={s.mx}
                    >
                        Fight
                    </motion.button>
                    <motion.button
                        variants={animations}
                        whileHover='whileHover'
                        whileTap='whileTap'
                        className={s.mx}
                    >
                        Fairy
                    </motion.button>
                </div>
            </div>

        </div>
    )
}

export default LeftPanel