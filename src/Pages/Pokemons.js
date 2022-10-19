import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import AnimatedPage2 from './AnimatedPage2'
import s from '../Styles/Pokemons.module.css'
import { useNavigate } from 'react-router';
import { addPokeAPI, appendPokeAPI, setCurrentRender } from '../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import RightPanel from '../Components/RightPanel';
import LeftPanel from '../Components/LeftPanel';


const Pokemons = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const POKEMONS_PER_PAGE = 12

    const { pokeapi } = useSelector( state => state )

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
                dispatch( setCurrentRender( 'pokeapi' ) )
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

        if ( !pokeapi.length ) fetchData()

    }, [] )
    // FUNCTIONS

    return (
        <AnimatedPage2>
            <div
                className={s.window}
            // onClick={() => navigate( "/pokemons/1" )}
            >
                <motion.p
                    whileHover={{ scale: 1.3, color: 'white' }}
                    className={s.click}
                    onClick={() => navigate( "/" )}
                >
                    Back
                </motion.p>

                <div className={s.interface}>
                    <div className={s.leftPanel}>
                        <LeftPanel />
                    </div>
                    <div className={s.rightPanel}>
                        <RightPanel />
                    </div>
                </div>
            </div>
        </AnimatedPage2>
    )
}

export default Pokemons