import React from 'react'
import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0, y: '30px' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-15px' },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 1.2 },
}

const AnimatedDisplayer = ( { children } ) => {
    return (
        <motion.div
            variants={animations}
            initial='initial'
            animate='animate'
            exit='exit'
            whileHover='whileHover'
            whileTap='whileTap'
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedDisplayer