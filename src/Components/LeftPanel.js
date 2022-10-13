import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createAlphabeticalOrder, createByIdOrder, flipArray, setArrayToDisplay, setOrderAs, setOrderDe } from '../Redux/Actions'
import s from '../Styles/LeftPanel.module.css'
import Order from './Order'

const LeftPanel = () => {
    const dispatch = useDispatch()
    const state = useSelector( state => state )
    // console.log( state.pokemonsAlphabetical )


    // Functions
    const handleOrder = ( event ) => {
        const type = event.target.innerText
        switch ( type ) {
            case 'Alphabetical':
                if ( state.conditionToRender !== 'pokemonsAlphabetical' ) {
                    dispatch( createAlphabeticalOrder() )
                    dispatch( setArrayToDisplay( 'pokemonsAlphabetical' ) )
                    dispatch( setOrderAs() )
                } else {
                    if ( state.currentOrder === 'as' ) {
                        dispatch( flipArray( 'pokemonsAlphabetical' ) )
                        dispatch( setArrayToDisplay( 'pokemonsAlphabetical' ) )
                        dispatch( setOrderDe() )
                    } else {
                        dispatch( flipArray( 'pokemonsAlphabetical' ) )
                        dispatch( setArrayToDisplay( 'pokemonsAlphabetical' ) )
                        dispatch( setOrderAs() )
                    }
                }
                break;
            case 'ID':
                console.log( state.conditionToRender )
                if ( state.conditionToRender !== 'pokemonsById' ) {
                    dispatch( createByIdOrder() )
                    if ( state.conditionToRender === 'pokemonsAPI' ) dispatch( flipArray( 'pokemonsById' ) )
                    dispatch( setArrayToDisplay( 'pokemonsById' ) )
                    dispatch( ( state.conditionToRender === 'pokemonsAPI' ) ? setOrderDe() : setOrderAs() )
                } else {
                    if ( state.currentOrder === 'as' ) {
                        console.log( state.conditionToRender )
                        dispatch( flipArray( 'pokemonsById' ) )
                        dispatch( setArrayToDisplay( 'pokemonsById' ) )
                        dispatch( setOrderDe() )
                    } else {
                        dispatch( flipArray( 'pokemonsById' ) )
                        dispatch( setArrayToDisplay( 'pokemonsById' ) )
                        dispatch( setOrderAs() )
                    }
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={` ${s.flexColCenter} ${s.filterTitleMargin}`} >
                <p className={`${s.filterTitle}`} >Filter by...</p>
                <input
                    placeholder='Name'
                    className={s.input}
                />
            </div>
            <div className={` ${s.flexColCenter} ${s.mediumGap}`} >
                <p className={`${s.searchTitle}`} >Source</p>
                <div className={`${s.flexRowCenter} ${s.smallGap}`} >
                    <button className={s.mx} >Both</button>
                    <button className={s.mx} >PokeAPI</button>
                    <button className={s.mx} >Database</button>
                </div>
            </div>
            <div className={` ${s.flexColCenter} ${s.mediumGap}`} >
                <p className={`${s.searchTitle}`} ><Order /></p>
                <div className={`${s.flexRowCenter} ${s.smallGap}`} >
                    <button className={s.mx} onClick={handleOrder} >ID</button>
                    <button className={s.mx} onClick={handleOrder} >Alphabetical</button>
                    <button className={s.mx} onClick={handleOrder} >Attack</button>
                    <button className={s.mx} onClick={handleOrder} >Defense</button>
                    <button className={s.mx} onClick={handleOrder} >Speed</button>
                </div>
            </div>
            <div className={` ${s.flexColCenter} ${s.mediumGap}`} >
                <p className={`${s.searchTitle}`} >Type</p>
                <div className={`${s.flexRowCenter} ${s.smallGap}`} >
                    <button className={s.mx} >Fire</button>
                    <button className={s.mx} >Water</button>
                    <button className={s.mx} >Grass</button>
                    <button className={s.mx} >Rock</button>
                    <button className={s.mx} >Posion</button>
                    <button className={s.mx} >Fight</button>
                    <button className={s.mx} >Fairy</button>
                </div>
            </div>

        </div>
    )
}

export default LeftPanel