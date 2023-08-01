import axios from 'axios'
import { useEffect, useState } from 'react'
import PokemonCard from '../../Components/PokemonCard'

const Pokedex = () => {

    const [ pokemonList, setPokemonList ] = useState([])
   

useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=128&offset=0")
    .then(resp => setPokemonList(resp?.data?.results))
    
    .catch(error => console.error(error))
   
}, [])

 const user = localStorage.getItem('userName')


    return(
        <main>
          <h2>Welcome {user}</h2>

      
        <ul>
            { pokemonList?.map(element => 
        
                <li key={element.name}>
                    <PokemonCard url={element.url} />
                </li>
            
                )}
        </ul>


          
        </main>
    )
} 


export default Pokedex