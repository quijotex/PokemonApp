import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react'
import Home from "./Pages/Home";
import Pokedex from "./Pages/Pokedex";
import PokemonDetail from "./Pages/PokemonDetail";
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "../Components/ProtectedRoute";
import Config from "./Pages/Config";

function App() {

  const [ pokemonsPerPage, setPokemonsPerPage ] = useState(20)
  

  return (
    <>
      <HashRouter>
       
        <Routes>
        
        <Route path="/" element={ <Home/>}/>  

        <Route element={<ProtectedRoute/>}> 
            
          
        </Route>
        <Route path="/pokedex" element={ <Pokedex pokemonsPerPage={pokemonsPerPage}/>}/> 
        <Route path="/pokedex/:id" element={ <PokemonDetail/>}/>
        <Route path="/pokedex/config" element={ <Config pokemonsPerPage={pokemonsPerPage} setPokemonsPerPage={setPokemonsPerPage}/>}/>
       
        <Route path="/not_found" element={<NotFound/>}/>
        

     
     
        </Routes>

     
      </HashRouter>

    </>
  );
}

export default App;