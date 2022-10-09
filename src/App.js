import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import s from './Styles/App.module.css'
import { imgs } from './Utils/Backgrounds'
import { isVisible } from '@testing-library/user-event/dist/utils';


function App () {
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





  return (
    <div className={s.wrapper}>

      <div className={s.background}>
        {/* <div className={s.backdrop} /> */}

        <AnimatePresence>
          {backgroundIndex.isVisible &&
            <motion.img
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0, }}
              transition={{ duration: 3 }}
              className={s.image}
              alt=''
              src={imgs[backgroundIndex.index]}
            />}
        </AnimatePresence>
      </div>

      <div className={s.section}>
        <p className={s.text}>
          Welcome to PokeWiki
        </p>
      </div>

      <p className={s.click}>
        Click anywhere to continue
      </p>
    </div>
  );
}

export default App;
