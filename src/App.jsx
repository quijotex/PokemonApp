import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Pokedex from "./Pages/Pokedex";
import PokemonDetail from "./Pages/PokemonDetail";
import NotFound from "./Pages/NotFound";
import ProtectedRoute from "../Components/ProtectedRoute";

function App() {
  //Single Page Application (SAP)
  //Todo el proyecto ocupa un solo archivo html sin importar que haya mas de una vista

  //Rutas protegidas: dependiendo de algo se da o no acceso a un aparte del sitio web. Es una mezcla entre redireccionamiento y rutas anidadas
  

  return (
    <>
      <HashRouter>
       
        <Routes>
        
        <Route path="/" element={ <Home/>}/>  

        <Route element={<ProtectedRoute/>}> 
            
          
        </Route>
        <Route path="/pokedex" element={ <Pokedex/>}/> 
            <Route path="/pokedex/:id" element={ <PokemonDetail/>}/>

       
        <Route path="/not_found" element={<NotFound/>}/>
        

     
     
        </Routes>

     
      </HashRouter>

    </>
  );
}

export default App;