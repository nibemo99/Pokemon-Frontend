import { Route, Routes, useLocation } from "react-router";
import LandingPage from "./Pages/LandingPage";
import s from './Styles/App.module.css'
import Pokemons from './Pages/Pokemons'
import PokemonDetail from './Pages/PokemonDetail'
import { Bg } from "./Pages/Bg";
import NotFound from "./Pages/NotFound";
import Create from "./Pages/Create";


function App () {
  const location = useLocation()



  return (
    <div className={s.appContainer} style={{ position: 'relative' }}>
      <Bg location={location} />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<PokemonDetail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
