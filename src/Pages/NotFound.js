import React from 'react'
import { useNavigate } from 'react-router';
import s from '../Styles/NotFound.module.css'


const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div
            className={s.wrapper}
        >
            <h1 className={s.title} >404</h1>
            <button
                className={s.button}
                onClick={() => navigate( "/pokemons" )}
            >
                Go back
            </button>
        </div>
    )
}




export default NotFound


