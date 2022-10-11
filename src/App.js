import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import LandingPage from "./Pages/LandingPage";
import s from './Styles/App.module.css'
import Page1 from './Pages/Page1'
import Page2 from './Pages/Page2'


function App () {
  const location = useLocation()



  return (
    <div >
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
