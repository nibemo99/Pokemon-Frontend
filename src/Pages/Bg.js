import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import s from '../Styles/Bg.module.css'

export const Bg = ( { location } ) => {

    console.log( location.pathname, typeof location.pathname )

    const animations = {
        initial: { opacity: 0, },
        animate: { opacity: 1, },
        exit: { opacity: 0 },
    }

    return (
        <div className={`${s.container} ${s.gray}`}>
            <AnimatePresence mode='wait'>
                {
                    ( location.pathname.length > 9 && location.pathname.includes( '/pokemons' ) ) &&
                    (
                        <motion.div
                            className={`${s.container} ${s.yellow}`}
                            variants={animations}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            transition={{ duration: 2 }}
                        >
                        </motion.div>
                    )
                }

                {
                    ( !location.pathname.includes( '/pokemons' ) ) &&
                    (
                        <motion.div
                            className={`${s.container} ${s.red}`}
                            variants={animations}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            transition={{ duration: 2 }}
                        >
                        </motion.div>
                    )
                }

            </AnimatePresence>
        </div>
    )
}
