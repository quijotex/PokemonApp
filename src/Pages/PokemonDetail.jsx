import { useParams, useNavigate  } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const PokemonDetail = () => {

    const [pokemonDetail, setPokemonDetail ] = useState({})
    
    const navigate = useNavigate()

    const { id } = useParams()
    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resp => setPokemonDetail(resp.data))
        .catch(error => {console.error(error)
            //redireccion
            navigate("/not_found")
        })
    }, [id])

   

    return(
        <main>
            <h1>Detalle del Pokemon</h1>
            <h2>Nombre: {pokemonDetail?.name} </h2>
            <img src={pokemonDetail?.sprites?.other?.dream_world?.front_default} alt=""/>
            <p>Altura: {pokemonDetail?.height}</p>
            <p>Peso: {pokemonDetail?.weight}</p>
            
       </main>
    )
}
export default PokemonDetail