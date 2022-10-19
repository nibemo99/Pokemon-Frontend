// import React from 'react'
// import { motion } from "framer-motion";

// const animations = {
//     initial: { opacity: 0, },
//     animate: { opacity: 1, },
//     exit: { opacity: 0, },
// }

// const AnimatedLoading = ( { children } ) => {
//     return (
//         <motion.div
//             variants={animations}
//             initial='initial'
//             animate='animate'
//             exit='exit'
//             transition={{ duration: 0.3 }}
//         >
//             {children}
//         </motion.div>
//     )
// }

// export default AnimatedLoading
import React from 'react'
import s from '../Styles/Animations.module.css'

const AnimatedLoading = ( { children, removing } ) => {
    return (
        <div
        // className={`${s.loadLandingPage} ${( removing ) ? s.removingLandingPage : ''}`}
        >
            {children}
        </div>
    )
}

export default AnimatedLoading