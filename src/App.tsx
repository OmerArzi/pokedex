import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/Layout/Layout';
import AllPokemons from "./components/Pokemon/AllPokemon/AllPokemons"
import FullSinglePokemon from './components/Pokemon/FullSinglePokemon/FullSinglepokemon'
import { allPokemonToLocalStorage } from './service/service';

function App() {

  useEffect(() => {
    allPokemonToLocalStorage();
  }, [])
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/PokeHome' />} />
          <Route path="/PokeHome" element={<AllPokemons />} />
          <Route path='/:pokeName' element={<FullSinglePokemon />} />
        </Routes>

      </Layout>
    </BrowserRouter>
  );
}

export default App;
