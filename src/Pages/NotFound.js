import React from 'react'
import { useHistory } from "react-router-dom"
import s from '../Styles/NotFound.module.css'


const NotFound = () => {
    const history = useHistory();

    return (
        <div
            className={s.wrapper}
        >
            <h1 className={s.title} >404</h1>
            <button
                className={s.button}
                onClick={() => history.push( "/pokemons" )}
            >
                Go back
            </button>
        </div>
    )
}




export default NotFound


