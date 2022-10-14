
import React, { useEffect } from 'react'
import AnimatedPage from './AnimatedPage'
import s from '../Styles/Pokemons.module.css'
import { useNavigate } from 'react-router';
import { addPokeAPI, appendPokeAPI } from '../Redux/Actions';
import { useDispatch } from 'react-redux';
import RightPanel from '../Components/RightPanel';
import LeftPanel from '../Components/LeftPanel';


const Pokemons = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const POKEMONS_PER_PAGE = 12

    useEffect( () => {
        let pokemons = []
        const fetchData = async () => {
            try {
                for ( let i = 1; i <= POKEMONS_PER_PAGE; i++ ) {
                    let res = await fetch( `https://pokeapi.co/api/v2/pokemon/${i}` )
                    let json = await res.json()
                    let { id, name, height, weight, stats, types, sprites } = json
                    let image = sprites.other["official-artwork"].front_default
                    pokemons.push( { id, name, height, weight, image, stats, types } )
                }
                dispatch( addPokeAPI( pokemons ) )
                setTimeout( async () => {
                    pokemons = []
                    for ( let i = POKEMONS_PER_PAGE + 1; i <= POKEMONS_PER_PAGE * 13; i++ ) {
                        let res = await fetch( `https://pokeapi.co/api/v2/pokemon/${i}` )
                        let json = await res.json()
                        let { id, name, height, weight, stats, types, sprites } = json
                        let image = sprites.other["official-artwork"].front_default
                        dispatch( appendPokeAPI( [{ id, name, height, weight, image, stats, types }] ) )
                    }

                }, 500 );
                console.log( pokemons )
            } catch ( error ) {
                console.log( error )
            }
        }
        fetchData()
        return () => { }
    }, [dispatch] )
    // FUNCTIONS

    return (
        <AnimatedPage>
            <div
                className={s.window}
            // onClick={() => navigate( "/pokemons/1" )}
            >
                <div className={s.interface}>
                    <div className={s.leftPanel}>
                        <LeftPanel />
                    </div>
                    <div className={s.rightPanel}>
                        <RightPanel />
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Pokemons