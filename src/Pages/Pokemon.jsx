import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Pokemon = () => {

    const [ pokemonList, setPokemonList ] = useState([])

useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then(resp => setPokemonList(resp.data.results))
    .catch(error => console.error(error))
}, [])

//el link

    return(
        <main>
          <h2>Soy un pokemon</h2>

        
        <ul>    
        { pokemonList?.map(pokemon => 
          
            <Link to={`/pokemon/${pokemon.name}`} key={pokemon.url}>
           <li>
            {pokemon.name}
           </li>
           </Link>)  
           
           }
        </ul>


          
        </main>
    )
} 


export default Pokemon