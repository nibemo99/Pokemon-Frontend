import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import s from '../Styles/Bg.module.css'

export const Bg = ( { location } ) => {

    console.log( location.pathname, location.pathname.length )
    let background = ''
    if ( location.pathname.length !== 9 ) {
        background = 'yellow'
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    }

    const animations = {
        initial: { opacity: 0, },
        animate: { opacity: 1, },
        exit: { opacity: 0 },
    }


    return (
        <div className={`${s.container} ${s.gray}`}>
            <AnimatePresence mode='wait'>
                {
                    ( location.pathname.length !== 9 ) &&
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
            </AnimatePresence>
        </div>
    )
}
