import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router';
import s from '../Styles/NotFound.module.css'

const obj = {
    borderBottom: '3px solid',
    borderImage: 'linear-gradient(90deg, transparent 20%, blue, transparent)',
    borderImageSlice: '1'
}

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div
            className={s.wrapper}
        >
            <h1 className={s.title} >404</h1>
            <motion.button
                whileHover={{ scale: 1.4 }}
                className={s.button}
                onClick={() => navigate( "/pokemons" )}
            >
                Go back
            </motion.button>
        </div>
    )
}




export default NotFound


