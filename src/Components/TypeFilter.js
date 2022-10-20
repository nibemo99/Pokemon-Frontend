import React from 'react'
import s from '../Styles/TypeFilter.module.css'
import TypeButton from './TypeButton'

const TypeFilter = () => {

    const selectType = ( event ) => {
        console.log( event.target.value )
    }

    return (
        <div className={`${s.flexRowCenter} ${s.smallGap}`} >
            <TypeButton selectType={selectType} >Grass</TypeButton>
            <TypeButton selectType={selectType} >Poison</TypeButton>
            <TypeButton selectType={selectType} >Fire</TypeButton>
            <TypeButton selectType={selectType} >Flying</TypeButton>
            <TypeButton selectType={selectType} >Water</TypeButton>
            <TypeButton selectType={selectType} >Bug</TypeButton>
            <TypeButton selectType={selectType} >Normal</TypeButton>
            <TypeButton selectType={selectType} >Electric</TypeButton>
            <TypeButton selectType={selectType} >Ground</TypeButton>
            <TypeButton selectType={selectType} >Fairy</TypeButton>
            <TypeButton selectType={selectType} >Fighting</TypeButton>
            <TypeButton selectType={selectType} >Psychic</TypeButton>
            <TypeButton selectType={selectType} >Rock</TypeButton>
            <TypeButton selectType={selectType} >Steel</TypeButton>
            <TypeButton selectType={selectType} >Ice</TypeButton>
            <TypeButton selectType={selectType} >Ghost</TypeButton>
            <TypeButton selectType={selectType} >Dragon</TypeButton>
        </div>
    )
}

export default TypeFilter