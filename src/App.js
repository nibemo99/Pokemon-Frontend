import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import s from './Styles/App.module.css'
import Pokemons from './Pages/Pokemons'
import PokemonDetail from './Pages/PokemonDetail'
import { Bg } from "./Pages/Bg";
import NotFound from "./Pages/NotFound";
import CreatePage from "./Pages/CreatePage";


function App () {
  const location = useLocation()



  return (
    <div className={s.appContainer} style={{ position: 'relative' }}>
      <Bg location={location} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/pokemons" component={Pokemons} />
        <Route path="/pokemons/:id" component={PokemonDetail} />
        <Route path="/create" component={CreatePage} />
        <Route
          path="*"
        //  component={NotFound}
        >
          <Redirect to="/pokemons/404" />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
