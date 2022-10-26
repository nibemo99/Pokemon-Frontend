import React, { useEffect, useState } from 'react'
import AnimatedPage2 from './AnimatedPage2'
import s from '../Styles/Pokemons.module.css'
import { useHistory } from "react-router-dom"
import { addPokeAPI, setCurrentRender } from '../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import RightPanel from '../Components/RightPanel';
import LeftPanel from '../Components/LeftPanel';


const Pokemons = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    // const POKEMONS_PER_PAGE = 12
    const [removing, setRemoving] = useState( false )


    const { pokeapi, removingPage } = useSelector( state => state )

    useEffect( () => {
        // let pokemons = []
        const fetchData = async () => {
            try {
                // for ( let i = 1; i <= ( POKEMONS_PER_PAGE * 13 ); i++ ) {
                //     let res = await fetch( `https://pokeapi.co/api/v2/pokemon/${i}` )
                //     let json = await res.json()
                //     let { id, name, height, weight, stats, types, sprites } = json
                //     let image = sprites.other["official-artwork"].front_default
                //     pokemons.push( { id, name, height, weight, image, stats, types } )
                // }

                let res = await fetch( `http://localhost:3001/pokemons/` )
                let json = await res.json()
                dispatch( addPokeAPI( json ) )
                dispatch( setCurrentRender( 'pokeapi' ) )
                // setTimeout( async () => {
                //     pokemons = []
                //     for ( let i = POKEMONS_PER_PAGE + 1; i <= POKEMONS_PER_PAGE * 13; i++ ) {
                //         let res = await fetch( `https://pokeapi.co/api/v2/pokemon/${i}` )
                //         let json = await res.json()
                //         let { id, name, height, weight, stats, types, sprites } = json
                //         let image = sprites.other["official-artwork"].front_default
                //         dispatch( appendPokeAPI( [{ id, name, height, weight, image, stats, types }] ) )
                //         console.log( name )
                //     }
                // }, 500 );
                // console.log( pokemons )
            } catch ( error ) {
                console.log( error )
            }
        }

        if ( !pokeapi.length ) fetchData()

    }, [] )
    // FUNCTIONS

    const handleNavigate = ( event ) => {
        setRemoving( prev => !prev )
        setTimeout( () => {
            history.push( '/' )
        }, 300 );
    }


    return (
        <AnimatedPage2 removing={removing}>
            <div className={s.window} >
                <p
                    className={s.click}
                    onClick={handleNavigate}
                >
                    Back
                </p>

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