import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import logo from "../assets/Images/Logo.png"

const PokemonDetail = () => {

    const [ pokemonDetail, setPokemonDetail ] = useState({})
    const [ seePokemon, setSeePokemon ] = useState([])
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isUnseen, setIsUnseen ] = useState(false)
   

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
    let quick = []
        axios
        .get(baseURL)
        .then(resp => {quick = resp?.data; setSeePokemon(quick)}).then(() => {
           if(quick.length === 0){
            setIsUnseen(true)
            } else { 
            setIsOpen(true)}
           })
        .catch(error => console.error(error))
    }
   
    return(
        <main>
            <Container>
            <div className='pokedex__spinner'/>
            <Row>
                <img src={logo} alt=""/>
                <Col lg={10}>
            
            <img src={pokemonDetail?.sprites?.other?.['official-artwork']?.front_default} alt=""/>
            <h2>{pokemonDetail?.name} </h2>
            <h3>Height: {pokemonDetail?.height}</h3>
            <p># {pokemonDetail?.id}</p>
            <h3>Weight: {pokemonDetail?.weight}</h3>
            </Col>
            <Col lg={2}>
            <button onClick={encounter}>Encounters</button>
            <div className={`modal ${isOpen? "is-Open" : "" }`} >
                <button onClick={() => setIsOpen(false)}>x</button>
                <ul className="encounters">{seePokemon.map(see => <li key={see?.location_area?.url}>{see?.location_area?.name}</li>)}</ul>
            </div>
            <div className={`unseen ${isUnseen? "is-Unseen" : ""}`}>
                <button onClick={() => setIsUnseen(false)}>x</button>
                <p >It has never seen before in wild state</p>
            </div>
            </Col>
            <ul>Type: 
                {pokemonDetail?.types?.map(type => 
                <li key={type?.type?.name}>{type?.type?.name}</li>)}
            </ul>

            <ul>Abilities: {pokemonDetail?.abilities?.map(ability => 
                <li key={ability?.ability?.name}>{ability?.ability?.name}</li>)}
            </ul>
            <p>hp: {pokemonDetail?.stats?.[0]?.base_stat}</p>
            <p>Attack: {pokemonDetail?.stats?.[1]?.base_stat}</p>
            <p>Defense: {pokemonDetail?.stats?.[2]?.base_stat}</p>
            <p>Speed: {pokemonDetail?.stats?.[5]?.base_stat}</p>
            <ul>Movements: {pokemonDetail?.moves?.map(move => 
                <li key={move?.move?.name}>{move?.move?.name}</li>)}
            </ul>
          
           
            <ul>Appeareances in those game versions: 
                {pokemonDetail?.game_indices?.map(game => 
                <li key={game?.version?.name}>{game?.version?.name}</li>)}
            </ul>
            </Row>
            </Container>
       </main>
    )
}
export default PokemonDetail