import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import LandingPage from "./Pages/LandingPage";
import s from './Styles/App.module.css'
import Pokemons from './Pages/Pokemons'
import PokemonDetail from './Pages/PokemonDetail'
import { Bg } from "./Pages/Bg";


function App () {
  const location = useLocation()



  return (
    <div className={s.appContainer} style={{ position: 'relative' }}>
      <Bg />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:id" element={<PokemonDetail />} />
        </Routes>
      </AnimatePresence>

    </div>
  );
}

export default App;
