import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { flipArray, setSourceToRender, setOrderAs, setOrderDe, resetPage, applyOrder, setCurrentRender, clearFilters, setLoadingTrue, setLoadingFalse } from '../Redux/Actions'
import s from '../Styles/LeftPanel.module.css'
import Order from './Order'
import { AnimatePresence, motion } from "framer-motion";
import AnimatedFiltersTitle from './AnimatedFiltersTitle'
import SearchInput from './SearchInput'
import OrderButton from './OrderButton'
import TypeButton from './TypeButton'
import TypeFilter from './TypeFilter'

const LeftPanel = () => {
    const dispatch = useDispatch()
    const { sourceToRender, orderToRender, currentOrder } = useSelector( state => state )
    const hasFilters = ( sourceToRender === 'pokeapi' && orderToRender === 'id' )

    // Functions
    const setFilter = ( text ) => {
        // console.log( , typeof text )
        dispatch( resetPage() )
        if ( orderToRender !== text.toLowerCase() ) {
            dispatch( setOrderAs() )
            dispatch( applyOrder( text.toLowerCase() ) )
        } else {
            dispatch( flipArray( 'currentRender' ) )
            if ( currentOrder === 'as' ) {
                dispatch( setOrderDe() )
            } else {
                dispatch( setOrderAs() )
            }
        }
    }

    const handleOrder = ( event ) => {
        const type = event.target.innerText
        setFilter( type )
    }

    const setSource = async ( text ) => {
        if ( sourceToRender === text.toLowerCase() ) return
        dispatch( setLoadingTrue() )
        dispatch( setOrderAs() )
        dispatch( resetPage() )
        dispatch( setCurrentRender( 'empty' ) )
        dispatch( setSourceToRender( text.toLowerCase() ) )
        dispatch( setCurrentRender( text.toLowerCase() ) )
        dispatch( applyOrder( orderToRender ) )
        setTimeout( () => {
            dispatch( setLoadingFalse() )
        }, 800 );
    }

    const handleSource = ( event ) => {
        const type = event.target.innerText
        setSource( type )
    }

    const handleClearFilters = ( event ) => {
        dispatch( clearFilters() )
        dispatch( setCurrentRender( 'empty' ) )
        setTimeout( () => {
            dispatch( setCurrentRender( 'pokeapi' ) )
        }, 500 );
    }

    // Animations
    const animations = {
        whileHover: {
            scale: 1.1,
            backgroundColor: '#B3541E',
            // color: 'white'
        },
        whileTap: {
            scale: 1.2,
        },
    }


    return (
        <div className={s.wrapper}>
            <div className={` ${s.flexColCenter}`} >
                <div className={`${s.filterTitle}`} >
                    <AnimatePresence mode="wait">
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
                    </AnimatePresence>
                </div>
                <SearchInput />
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
                        className={`${s.mx} ${( sourceToRender === 'pokeapi' ) && s.selected}`}
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
                    <OrderButton orderToRender={orderToRender} handleOrder={handleOrder}>
                        ID
                    </OrderButton>
                    <OrderButton orderToRender={orderToRender} handleOrder={handleOrder}>
                        Alphabetical
                    </OrderButton>
                    <OrderButton orderToRender={orderToRender} handleOrder={handleOrder}>
                        Attack
                    </OrderButton>
                    <OrderButton orderToRender={orderToRender} handleOrder={handleOrder}>
                        Defense
                    </OrderButton>
                    <OrderButton orderToRender={orderToRender} handleOrder={handleOrder}>
                        Speed
                    </OrderButton>
                </div>
            </div>
            <div className={` ${s.flexColCenter} ${s.mediumGap}`} >
                <p className={`${s.searchTitle}`} >Type</p>
                <TypeFilter />
            </div>

        </div>
    )
}

export default LeftPanel