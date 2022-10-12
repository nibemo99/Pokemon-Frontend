import React from 'react'
import s from '../Styles/CreateButton.module.css'

const CreateButton = () => {
    return (
        <div className={s.buttonWrapper} >
            <button className={s.button}>
                Create a new pokemon!
            </button>
        </div>
    )
}

export default CreateButton
