import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { toggleRemovePage } from '../Redux/Actions'
import s from '../Styles/CreateButton.module.css'

const CreateButton = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const navigateHandler = ( event ) => {
        dispatch( toggleRemovePage() )
        setTimeout( () => {
            navigate( `/create` )
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
