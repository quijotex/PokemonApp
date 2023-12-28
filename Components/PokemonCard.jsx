import axios from "axios"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../src/assets/Images/pokeball.png'

const PokemonCard = ( { url }) => {
//PokemonCard or SearchByName's state
const [ pokemonDetail, setPokemonDetail ] = useState({})
const [ colorBackground, setColorBackground ] = useState({})
   

useEffect(() => {

    axios
    .get(url)
    .then(resp => {setPokemonDetail(resp?.data);
    setColorBackground(resp?.data?.types)})
    .catch(error => console.error(error))

}, [])
  
const colors = () => {
    let color = ''
    for(let col in colorBackground) {
        if(colorBackground[col].slot === 1) {
        color = colorBackground[col].type.name
        }
    }
       
       if(color === 'grass' ) {
            return 'rgb(72, 208, 176)'
       } else if (color === 'fire') {
             return 'rgb(251, 108, 108)'
       } else if (color === 'water') {
            return 'rgb(112, 183, 250)'
       } else if (color === 'bug') {
            return 'rgb(139, 195, 74)'
       } else if(color === 'flying') {
            return 'rgb(218,222,155)'
       } else if (color === 'normal') {
            return 'rgb(115, 81, 89)'
       } else if (color === 'poison') {
            return 'rgb(91, 45, 134)'
       } else if (color === 'electric') {
            return 'rgb(226, 224, 45)'
       } else if (color === 'fairy') {
            return 'rgb(152, 24, 68)'
       } else if (color === 'ground' || color === 'psychic') {
            return 'rgb(255, 235, 59)'
       } else if (color === 'fighting') {
            return 'rgb(151, 63, 38)'
       } else if (color === 'rock') {
            return 'rgb(70, 24, 11)'
       } else if (color === 'ghost') {
            return 'rgb(49, 51, 106)'
       } else if (color === 'ice') {
             return 'rgb(134, 210, 244)'
       } else if ( color === 'dragon') {
            return 'rgb(68, 138, 148)'
       } else if (color === 'dark') {
            return 'rgb(3, 7, 6)'
       } else if (color === 'steel') {
             return 'rgb(93, 115, 108)'
       }
    
    }
   
    return(
        <main>
        <div className="pokemon-card">  
        <Link className="link" style={{background: `${colors()}`}} to={`/pokedex/${pokemonDetail.id}`}>
       
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