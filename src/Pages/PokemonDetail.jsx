import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import logo from "../assets/Images/Logo.png"
import ProgressBar from 'react-bootstrap/ProgressBar';

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
        .catch(error => console.error(error))
    }, [])

    const goBack = () => {
        navigate('/pokedex')
    }
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
               
                        <div className='pokemon-detail__spinner'/>
                        <div className="button-back">
                        <button onClick={goBack}><i className='bx bx-arrow-back' ></i></button> 
                        </div>
                 
            <Row className="poke">
            <div className="container-banner">
                        <img className="poke-img" src={logo} alt=""/>
                        <div className="encounter-games">
                                 <div className="encounter-info">
                                     <button className="button-encounter" onClick={encounter}><i className='bx bx-location-plus' ></i>Encounters</button>
                                     <div className={`modal ${isOpen? "is-Open" : "" }`} >
                                     <div className="see-none">
                                            <ul className="encounters">{seePokemon.map(see => <li className="round-li" key={see?.location_area?.url}>{see?.location_area?.name}</li>)}</ul>
                                            <button className="modals-button" onClick={() => setIsOpen(false)}>Close</button>
                                        </div>
                                     </div>
                                     <div className={`unseen ${isUnseen? "is-Unseen" : ""}`}>
                                        <div className="see-none see-none--size">
                                            <p className="encounters encounters--text">This Pokémon has never seen before in wild state</p>
                                            <button className="modals-button" onClick={() => setIsUnseen(false)}>Close</button>
                                         </div>
                                    </div>
                             </div>
                         </div>
                </div>
                <Row className="row-info" >
                    <Col className="col col-info">
                      <div className="col__first">
                       <h3>{pokemonDetail?.height} <span>Height</span></h3>
                        <img src={pokemonDetail?.sprites?.other?.['official-artwork']?.front_default} alt=""/>
                        <h3>{pokemonDetail?.weight}<span>Weight </span></h3>
                       </div> 
                        <div className="col__second">
                                <div className="col__second-title">
                                    <h2 className="detail__tittle">{pokemonDetail?.name} </h2>
                                    
                                    <p># {pokemonDetail?.id}</p>
                                </div>
                        </div>
                    </Col>
                </Row>
                <Row className="row-type">
                    <Col className="col col-size" lg={5}>
                    <h2 className="detail__tittle">Type</h2>
                        <ul className="list--size">
                            {pokemonDetail?.types?.map(type => 
                            <li className="round-li" key={type?.type?.name}>{type?.type?.name}</li>)}
                        </ul>
                    </Col >
                        <Col className="col col-size" lg={5} >
                            <h2 className="detail__tittle">Abilities</h2>
                            <ul className="list--size">{pokemonDetail?.abilities?.map(ability => 
                                <li className="round-li" key={ability?.ability?.name}>{ability?.ability?.name}</li>)}
                            </ul>
                        </Col>
                </Row>
                <Row>
                    <Col className="col col__stats">
                    <h2 className="detail__tittle">Base Stats</h2>
                       <div>
                          <ProgressBar label={pokemonDetail?.stats?.[0]?.base_stat} variant="success" now={pokemonDetail?.stats?.[0]?.base_stat}/> 
                          <p>Hp</p>
                            <ProgressBar label={pokemonDetail?.stats?.[1]?.base_stat} variant="info" now={pokemonDetail?.stats?.[1]?.base_stat} />
                            <p>Attack</p>
                            <ProgressBar label={pokemonDetail?.stats?.[2]?.base_stat} variant="warning" now={pokemonDetail?.stats?.[2]?.base_stat} />
                            <p>Defense</p>
                            <ProgressBar label={pokemonDetail?.stats?.[5]?.base_stat} variant="danger" now={pokemonDetail?.stats?.[5]?.base_stat} />
                            <p>Speed</p> 
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col className="col"> 
                 
                 <div className="games-info">
                    <h2 className="detail__tittle">Appeareances in those game versions</h2>
                 <ul>
                     {pokemonDetail?.game_indices?.map(game => 
                     <li  className="round-li" key={game?.version?.name}>{game?.version?.name}</li>)}
                 </ul>
                 </div>
              
             </Col>
                </Row>
                <Row>
                    <Col  className="col">
                    <h2 className="detail__tittle">Movements</h2>
                        <ul>{pokemonDetail?.moves?.map(move => 
                        <li className="round-li" key={move?.move?.name}>{move?.move?.name}</li>)}
                        </ul>
                
                    </Col>
                </Row>
            
            </Row>
            </Container>
       </main>
    )
}
export default PokemonDetail