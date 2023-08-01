import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PokemonCard from '../../Components/PokemonCard'
import Pagination from '../../Components/Pagination'

const Pokedex = ({ pokemonsPerPage }) => {

    const [ pokemonList, setPokemonList ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {

    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=1281&offset=0")
    .then(resp => setPokemonList(resp?.data?.results))
    .catch(error => console.error(error))
  
}, [])

 const user = localStorage.getItem('userName')

 //Get pokemons
 const indexOfLastPokemon = currentPage * pokemonsPerPage;
 const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
 const currentPokemons = pokemonList.slice(indexOfFirstPokemon, indexOfLastPokemon)

 //Change page
 const paginate = (pageNumber) => setCurrentPage(pageNumber)

//Redirect config page
const configPage = () => {
        navigate('/pokedex/config')
}

    return(
        <main>

            <h1>Pokedex</h1>
          <h2>Welcome {user}, here you can find your favorite pokemon</h2>

       

      <Pagination pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemonList.length} paginate={paginate}/>
        <ul>
            {currentPokemons?.map(element => 
        
                <li key={element.name}>
                    <PokemonCard url={element.url} />
                </li>) 
            }
        </ul>

            <button onClick={configPage}>Config</button>
        
        
        </main>
    )
} 


export default Pokedex