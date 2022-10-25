import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { toggleRemovePage } from '../Redux/Actions'
import s from '../Styles/CreateButton.module.css'

const CreateButton = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const navigateHandler = ( event ) => {
        dispatch( toggleRemovePage() )
        setTimeout( () => {
            history.push( `/create` )
        }, 300 );
    }

    return (
        <div className={s.buttonWrapper} >
            <button
                className={s.button}
                onClick={navigateHandler}
            >
                Create a new pokemon!
            </button>
        </div>
    )
}

export default CreateButton
