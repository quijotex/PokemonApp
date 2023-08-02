import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PokemonCard from '../../Components/PokemonCard'
import Pagination from '../../Components/Pagination'
import PokemonTypes from '../../Components/PokemonTypes'
import PokemonByName from '../../Components/PokemonByName'

const Pokedex = ({ pokemonsPerPage }) => {

//All Pokemons state
    const [ pokemonList, setPokemonList ] = useState([])
//Page state
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ isPaginated, setIsPaginated ] = useState(false)
//Only search by name
    const [ name, setName ] = useState([])
    const [ isName, setIsName ] = useState(false)

//Either types or all pokemons
    const [ isPokemonType, setIsPokemonType ] = useState(true)
    const [ pokemonType, setPokemonType ] = useState([])

//Executing useNavigate
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

 //Pagination per types

const currentPokemonsType = pokemonType.slice(indexOfFirstPokemon, indexOfLastPokemon)

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

       
      <div className={ `pagination ${isName? "is-Invisible" : ""}`}>
      <Pagination pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemonList.length } paginate={paginate} totalPokemonsType={pokemonType.length} isPaginated={isPaginated}/>
      </div>  

        <div>
            <span>
                <PokemonTypes setIsPokemonType={setIsPokemonType} setPokemonType={setPokemonType} setIsPaginated={setIsPaginated}/>
           </span>
           <span>
                <PokemonByName setIsName={setIsName} setName={setName} pokemonList={pokemonList}/>
           </span>
        </div>
        <ul>
            {isName? <PokemonCard url={name} /> : isPokemonType ?       currentPokemons?.map(element => 
                <li key={element.name}>
                    <PokemonCard url={element.url}/>
                </li>) : 
                currentPokemonsType?.map(type => 
                <li key={type?.pokemon?.url}>
                <PokemonCard url={type?.pokemon?.url}/>
                 </li> )
            }
        </ul>

            <button onClick={configPage}>Config</button>
        
        
        </main>
    )
} 


export default Pokedex