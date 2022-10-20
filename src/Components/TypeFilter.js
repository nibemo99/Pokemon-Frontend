import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTypeFilter } from '../Redux/Actions'
import s from '../Styles/TypeFilter.module.css'
import TypeButton from './TypeButton'

const TypeFilter = () => {
    const dispatch = useDispatch()
    const { typesToRender } = useSelector( state => state )

    const handleClick = ( event ) => {
        // console.log( event.target.innerText, typeof event.target.innerText )
        dispatch( addTypeFilter( event.target.innerText ) )
    }

    console.log( typesToRender )

    return (
        <div className={`${s.flexRowCenter} ${s.smallGap}`} >
            <TypeButton handleClick={handleClick} selected={false} >Grass</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Poison</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Fire</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Flying</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Water</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Bug</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Normal</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Electric</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Ground</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Fairy</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Fighting</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Psychic</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Rock</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Steel</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Ice</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Ghost</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Dragon</TypeButton>
            <TypeButton handleClick={handleClick} selected={false} >Dark</TypeButton>
        </div>
    )
}

export default TypeFilter