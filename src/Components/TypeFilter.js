import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTypeFilter, resetPage, setFilterByType } from '../Redux/Actions'
import s from '../Styles/TypeFilter.module.css'
import TypeButton from './TypeButton'

const TypeFilter = () => {
    const dispatch = useDispatch()
    const { typesToRender } = useSelector( state => state )

    const handleClick = ( event ) => {
        dispatch( resetPage() )
        dispatch( addTypeFilter( event.target.innerText ) )
        dispatch( setFilterByType() )
    }


    return (
        <div className={`${s.flexRowCenter} ${s.smallGap}`} >
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Grass</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Poison</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Fire</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Flying</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Water</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Bug</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Normal</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Electric</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Ground</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Fairy</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Fighting</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Psychic</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Rock</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Steel</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Ice</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Ghost</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Dragon</TypeButton>
            <TypeButton handleClick={handleClick} typesToRender={typesToRender} >Dark</TypeButton>
        </div>
    )
}

export default TypeFilter