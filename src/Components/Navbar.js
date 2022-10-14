import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTo } from '../Redux/Actions'
import s from '../Styles/Navbar.module.css'
import { motion } from "framer-motion";

const Navbar = ( { pokemonsPerPage } ) => {
    const dispatch = useDispatch()

    const currentPage = useSelector( state => state.currentPage )



    // Functions
    const handlePrevious = ( event ) => {
        if ( !pokemonsPerPage.length ) return
        if ( currentPage !== 1 ) {
            dispatch( setPageTo( currentPage - 1 ) )
        }
    }
    const handleNext = ( event ) => {
        if ( pokemonsPerPage.length ) dispatch( setPageTo( currentPage + 1 ) )
    }
    const handlePage = ( event ) => {
        if ( !pokemonsPerPage.length ) return
        const number = Number( event.target.innerText )
        dispatch( setPageTo( number ) )
    }

    // Animations
    const animations = {
        whileHover: {
            scale: 1.2,
            backgroundColor: '#B3541E',
            color: 'white'
        },
        whileTap: {
            scale: 0.9,
        },
    }


    return (
        <div className={s.navbar}>
            <motion.svg
                variants={animations}
                whileHover='whileHover'
                whileTap='whileTap'
                onClick={handlePrevious}
                className={s.icons}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
            </motion.svg>

            <motion.button
                variants={animations}
                whileHover='whileHover'
                whileTap='whileTap'
                onClick={handlePage}
                className={`${s.button} ${( currentPage === 1 ) ? ( s.selected ) : ''}`}
            >
                {( currentPage >= 4 ) ? ( currentPage - 2 ) : '1'}
            </motion.button>

            <motion.button
                variants={animations}
                whileHover='whileHover'
                whileTap='whileTap'
                onClick={handlePage}
                className={`${s.button} ${( currentPage === 2 ) ? ( s.selected ) : ''}`}
            >
                {( currentPage >= 4 ) ? ( currentPage - 1 ) : '2'}
            </motion.button>

            <motion.button
                variants={animations}
                whileHover='whileHover'
                whileTap='whileTap'
                onClick={handlePage}
                className={`${s.button} ${( currentPage > 2 ) ? ( s.selected ) : ''}`}
            >
                {( currentPage >= 4 ) ? ( currentPage ) : '3'}
            </motion.button>

            <motion.button
                variants={animations}
                whileHover='whileHover'
                whileTap='whileTap'
                onClick={handlePage}
                className={`${s.button} `}
            >
                {( currentPage >= 4 ) ? ( currentPage + 1 ) : '4'}
            </motion.button>

            <motion.button
                variants={animations}
                whileHover='whileHover'
                whileTap='whileTap'
                onClick={handlePage}
                className={`${s.button} `}
            >
                {( currentPage >= 4 ) ? ( currentPage + 2 ) : '5'}
            </motion.button>

            <motion.svg
                variants={animations}
                whileHover='whileHover'
                whileTap='whileTap'
                onClick={handleNext}
                className={s.icons}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </motion.svg>
        </div>
    )
}

export default Navbar