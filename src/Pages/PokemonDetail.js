import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import AnimatedPage from './AnimatedPage'
import s from '../Styles/PokemonDetail.module.css'

const PokemonDetail = () => {
    const navigate = useNavigate();
    const location = useLocation()

    console.log( location )

    return (
        <AnimatedPage>
            <div
                onClick={() => navigate( "/pokemons" )}
                className={s.temp}
            >
                PokemonDetail
                {location.pathname}
            </div>
        </AnimatedPage>
    )
}

export default PokemonDetail