import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PokemonCard from '../../Components/PokemonCard'
import Paginate from '../../Components/Paginate'
import PokemonTypes from '../../Components/PokemonTypes'
import PokemonByName from '../../Components/PokemonByName'
import ButtonSwitch from '../../Components/ButtonSwitch'

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
//Render searchers
    const [isOn, setIsOn] = useState(false);

//Executing useNavigate
    const navigate = useNavigate()

//Exit button
    const goBack = () => {
        navigate(-1)
    }

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


//Redirect config page
const configPage = () => {
        navigate('/pokedex/config')
}

    return(
        <main className='pokedex'>
            <div className='pokedex__exit'>
                <button onClick={goBack}><i className='bx bx-log-in bx-md' ></i></button>
            </div>
          <div className='pokedex__spinner'/>
            <h1 className='pokedex__title'>Pokédex</h1>
            <p className='pokedex__subtitle'>Welcome <strong>{user}</strong>, here you can find your favorite Pokémon</p>
        <div className='container-switch'>
           <h3>Type</h3> 
                <ButtonSwitch setIsOn={setIsOn} isOn={isOn}/>
           <h3>Pokémon</h3>
         </div>
            {isOn? 
                <PokemonByName setIsName={setIsName} setName={setName} pokemonList={pokemonList} name={name}/>
                :
                <PokemonTypes setIsPokemonType={setIsPokemonType} setPokemonType={setPokemonType} setIsPaginated={setIsPaginated}/>           
            }
            <ul>
                {isName? <PokemonCard url={name} /> : isPokemonType ?           currentPokemons?.map(element => 
                    <li key={element.name}>
                        <PokemonCard url={element.url}/>
                    </li>) : 
                    currentPokemonsType?.map(type => 
                    <li key={type?.pokemon?.url}>
                    <PokemonCard url={type?.pokemon?.url}/>
                    </li> )
                }
            </ul>
            <button className="config" onClick={configPage}><i className='bx bx-cog bx-md' ></i></button>
            <div className={ `pagination ${isName? "is-Invisible" : ""}`}>
                <Paginate pokemonsPerPage={pokemonsPerPage} totalPokemons=    {pokemonList.length } setCurrentPage={setCurrentPage} totalPokemonsType={pokemonType.length} isPaginated={isPaginated}/>
            </div>  
        </main>
    )
} 


export default Pokedex