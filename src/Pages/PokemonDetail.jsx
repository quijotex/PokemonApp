import { useParams, useNavigate, Link  } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const PokemonDetail = () => {

    const [pokemonDetail, setPokemonDetail ] = useState({})
    const [ seePokemon, setSeePokemon ] = useState([])
    const navigate = useNavigate()

    const { id } = useParams()
    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resp => setPokemonDetail(resp.data))
        .catch(error => {console.error(error)
            navigate("/not_found")
        })
    }, [])

   const encounter = () => {
        const baseURL = pokemonDetail?.location_area_encounters
    axios
    .get(baseURL)
    .then(resp => setSeePokemon(resp?.data))
    .catch(error => console.error(error))

    if(seePokemon.length !== 0){
        console.log(seePokemon)
    } else {
        alert("It has never seen before in wild state")
    }
   }

    return(
        <main>
            <h2>{pokemonDetail?.name} </h2>
            <img src={pokemonDetail?.sprites?.other?.['official-artwork']?.front_default} alt=""/>
            <h3>Height: {pokemonDetail?.height}</h3>
            <h3>Weight: {pokemonDetail?.weight}</h3>
            <p># {pokemonDetail?.id}</p>
            <ul>Type: 
                {pokemonDetail?.types?.map(type => 
                <li key={type?.type?.name}>{type?.type?.name}</li>)}
            </ul>

            <ul>Abilities: {pokemonDetail?.abilities?.map(ability => 
                <li key={ability?.ability?.name}>{ability?.ability?.name}</li>)}
            </ul>
            <ul>Movements: {pokemonDetail?.moves?.map(move => 
                <li key={move?.move?.name}>{move?.move?.name}</li>)}
            </ul>
            <button onClick={encounter}>Encounters</button>
            
       </main>
    )
}
export default PokemonDetail