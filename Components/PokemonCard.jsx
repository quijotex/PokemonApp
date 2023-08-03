import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../public/pokeball.png'

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
        <div className="pokemon-card">  
        <Link className="link" to={`/pokedex/${pokemonDetail.id}`}>
       
         <div className="pokemon-card__text">
        <h2><span>{pokemonDetail?.name}</span></h2>
        
        <ul className="types circle">
            <span>Types:</span> 
            {pokemonDetail?.types?.map(type => 
            <li key={type?.type?.name}>{type?.type?.name}</li>
        )}
        </ul>
        <p className="circle circle--small"><span>hp:</span> {pokemonDetail?.stats?.[0]?.base_stat}</p>
        <p className="circle circle--medium"><span>Attack:</span> {pokemonDetail?.stats?.[1]?.base_stat}</p>
        <p className="circle circle--medium"><span>Defense: </span>{pokemonDetail?.stats?.[2]?.base_stat}</p>
        <p className="circle circle--medium"><span>Speed:</span> {pokemonDetail?.stats?.[5]?.base_stat}</p>
        </div>
        <img className="img-poke img-poke--ball" src={Pokeball} alt=""/>
        <img className="img-poke img-poke--over" src={pokemonDetail?.sprites?.other?.['official-artwork']?.front_default} alt="Not available"/>
     
     
        </Link> 
     
        </div> 
    
        </main>
    )
}

export default PokemonCard