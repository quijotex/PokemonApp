import { Navigate } from "react-router-dom";
import Pokedex from "../src/Pages/Pokedex";


const ProtectedRoute = () => {


    const data = localStorage.getItem("userName")
 
    if( data !== null) {
        return <Pokedex/>
        
    } else {
        return <Navigate to="/" />
    }

}

export default ProtectedRoute