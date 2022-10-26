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
        const timer = setInterval( () => {
            setBackgroundIndex( { ...backgroundIndex, isVisible: false } )
            setTimeout( () => {
                const newIndex = ( backgroundIndex.index + 1 ) % imgs.length
                setBackgroundIndex( { index: newIndex, isVisible: true } )
            }, 3000 );
        }, 3200 );
        return () => {
            clearInterval( timer )
        }
    }, [backgroundIndex] )

    const changeLanguage = ( event ) => {
        console.log( '.' )
        if ( language === 'es' ) {
            left = '55%'
            // i18n.changeLanguage( 'en' );
            localStorage.setItem( "lng", 'en' );
            setLanguage( 'en' )
        }
        else if ( language === 'en' ) {
            left = '20%'
            // i18n.changeLanguage( 'es' );
            localStorage.setItem( "lng", 'es' );
            setLanguage( 'es' )
        }
        console.log( localStorage.getItem( 'lng' ) )
    }

    const [language, setLanguage] = useState( localStorage.getItem( 'lng' ) || 'en' )
    let left = ( language === 'en' ) ? '55%' : '20%'

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
                            initial={{ scale: 1, opacity: 0 }}
                            animate={{ scale: 1.1, opacity: 1 }}
                            exit={{ scale: 1.2, opacity: 0, }}
                            transition={{ duration: 3 }}
                            className={s.image}
                            alt=''
                            src={imgs[backgroundIndex.index]}
                        />}
                </div>

                <div className={s.section}>
                    <p className={s.text}>
                        Welcome to PokeWiki
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