import { useEffect, useState } from 'react';
import s from '../Styles/App.module.css'
import { imgs } from '../Utils/Backgrounds'
import React from 'react'
import AnimatedPage from './AnimatedPage';
import { useHistory } from "react-router-dom"

const LandingPage = () => {
    const history = useHistory();

    const [backgroundIndex, setBackgroundIndex] = useState( { index: 0, isVisible: true } )
    useEffect( () => {
        console.log( 'before' )
        const timer = setInterval( () => {
            setBackgroundIndex( { ...backgroundIndex, isVisible: false } )
            setTimeout( () => {
                const newIndex = ( backgroundIndex.index + 1 ) % imgs.length
                setBackgroundIndex( { index: newIndex, isVisible: true } )
            }, 4000 );
            console.log( 'hey' )
        }, 4100 );
        return () => {
            clearInterval( timer )
        }
    }, [backgroundIndex] )

    const [removing, setRemoving] = useState( false )

    const navigateHandler = ( event ) => {
        setRemoving( prev => !prev )
        setTimeout( () => {
            history.push( '/pokemons' )
        }, 1000 );
    }

    return (
        // <div className={`${s.loadLandingPage} ${( removing ) ? s.removing : ''}`}>
        <AnimatedPage removing={removing} >
            <div
                className={s.wrapper}
                onClick={navigateHandler}
            >

                <div
                    className={s.background}
                >
                    {/* <div className={s.backdrop} /> */}

                    {backgroundIndex.isVisible &&
                        <img
                            className={s.image}
                            alt=''
                            src={imgs[backgroundIndex.index]}
                        />}
                </div>

                <div className={s.section}>
                    <p className={s.text}>
                        Welcome to PokeHenry
                    </p>
                </div>

            </div>

            <div className={s.click}>
                <p onClick={navigateHandler}>
                    Click anywhere to continue
                </p>
            </div>

        </AnimatedPage>
        // </div>

    );
}

export default LandingPage