import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PokemonCard = ( { url }) => {
//PokemonCard or SearchByName's state
const [ pokemonDetail, setPokemonDetail ] = useState({})
    
   

useEffect(() => {

    axios
    .get(url)
    .then(resp => setPokemonDetail(resp?.data))
    .catch(error => console.error(error))

}, [])
  

    return(
        <main>
        
        <Link to={`/pokedex/${pokemonDetail.id}`}>
        <h2>{pokemonDetail?.name}</h2>
        
        <ul>
            Types: 
            {pokemonDetail?.types?.map(type => 
            <li key={type?.type?.name}>{type?.type?.name}</li>
        )}
        </ul>
        <p>hp: {pokemonDetail?.stats?.[0]?.base_stat}</p>
        <p>Attack: {pokemonDetail?.stats?.[1]?.base_stat}</p>
        <p>Defense: {pokemonDetail?.stats?.[2]?.base_stat}</p>
        <p>Speed: {pokemonDetail?.stats?.[5]?.base_stat}</p>
        <img src={pokemonDetail?.sprites?.other?.['official-artwork']?.front_default} alt=""/>
        </Link> 

    
        </main>
    )
}

export default PokemonCard