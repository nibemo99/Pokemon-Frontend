import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { flipArray, setSourceToRender, setOrderAs, setOrderDe, resetPage, applyOrder, setCurrentRender, clearFilters, setLoadingTrue, setLoadingFalse, setDatabase, setBoth } from '../Redux/Actions'
import s from '../Styles/LeftPanel.module.css'
import Order from './Order'
import { AnimatePresence } from "framer-motion";
import AnimatedFiltersTitle from './AnimatedFiltersTitle'
import SearchInput from './SearchInput'
import OrderButton from './OrderButton'
import TypeFilter from './TypeFilter'
import SourceButton from './SourceButton'

const LeftPanel = () => {
    const dispatch = useDispatch()
    const { sourceToRender, orderToRender, currentOrder, typesToRender, database } = useSelector( state => state )
    const hasFilters = ( sourceToRender === 'pokeapi' && orderToRender === 'id' && typesToRender.length === 0 )


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

    const fetchDatabase = async ( text ) => {
        try {
            const res = await fetch( 'http://localhost:3001/pokemons/database' )
            const json = await res.json()
            let parsed = json.map( pokemon => {
                let stats = [
                    { "base_stat": pokemon.hp, "stat": { "name": "hp" } },
                    { "base_stat": pokemon.attack, "stat": { "name": "attack" } },
                    { "base_stat": pokemon.defense, "stat": { "name": "defense" } },
                    { "base_stat": pokemon.specialAttack, "stat": { "name": "special-attack" } },
                    { "base_stat": pokemon.specialDefense, "stat": { "name": "special-defense" } },
                    { "base_stat": pokemon.speed, "stat": { "name": "speed" } }
                ]
                let types = [{ "type": { "name": pokemon.type1 } }]
                if ( pokemon.type2 ) types.push( { "type": { "name": pokemon.type2 } } )
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    image: pokemon.url,
                    stats,
                    types
                }
            } )

            dispatch( setDatabase( parsed ) )
            dispatch( setBoth() )
            console.log( text, text === 'database' )
            if ( json.length === 0 && text === 'database' ) {
                dispatch( setSourceToRender( 'notfound' ) )
                dispatch( setCurrentRender( 'notfound' ) )
            } else {
                dispatch( setSourceToRender( text ) )
                dispatch( setCurrentRender( text ) )
            }
            dispatch( applyOrder( orderToRender ) )
            setTimeout( () => {
                dispatch( setLoadingFalse() )
            }, 800 );

        } catch ( error ) {
            console.log( error )
        }
    }

    const setSource = ( text ) => {
        // if ( sourceToRender === 'pokeapi' ) return
        dispatch( setLoadingTrue() )
        dispatch( setOrderAs() )
        dispatch( resetPage() )
        dispatch( setCurrentRender( 'empty' ) )
        if ( text.toLowerCase() === 'database' ) {
            return fetchDatabase( text.toLowerCase() )
        }
        if ( text.toLowerCase() === 'both' ) {
            return fetchDatabase( text.toLowerCase() )
        }
        dispatch( setSourceToRender( text.toLowerCase() ) )
        dispatch( setCurrentRender( text.toLowerCase() ) )
        dispatch( applyOrder( orderToRender ) )
        setTimeout( () => {
            console.log( 'setloadingfalse' )
            console.log( database, sourceToRender )
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
                    <SourceButton handleSource={handleSource} sourceToRender={sourceToRender} >
                        Both
                    </SourceButton>
                    <SourceButton handleSource={handleSource} sourceToRender={sourceToRender} >
                        PokeAPI
                    </SourceButton>
                    <SourceButton handleSource={handleSource} sourceToRender={sourceToRender} >
                        Database
                    </SourceButton>
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