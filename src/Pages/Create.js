import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { setRemovePage } from '../Redux/Actions'
import AnimatedPage2 from './AnimatedPage2'

const Create = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [removing, setRemoving] = useState( false )

    dispatch( setRemovePage( false ) )

    const navigateHandler = ( event ) => {
        setRemoving( prev => !prev )
        setTimeout( () => {
            navigate( '/pokemons' )
        }, 300 );
    }


    return (
        <AnimatedPage2 removing={removing}>

            <div
                onClick={navigateHandler}
            >Create</div>

        </AnimatedPage2>
    )
}

export default Create