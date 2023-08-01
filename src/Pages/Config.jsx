import { useNavigate } from "react-router-dom"

const Config = ({ pokemonsPerPage, setPokemonsPerPage }) => {

        const navigate = useNavigate();

 //Adjust pages as the user wants to
   const adjustPage = (e) => {
        e.preventDefault()
        setPokemonsPerPage(e.target.value)
}
//Go back to /pokedex

const goBack = () => {
    navigate('/pokedex')
}

    return(
        <>
         <label htmlFor="adjustPage">See Pokemons per page:</label>
        <select id="adjustPage" value={pokemonsPerPage} onChange={(e) => adjustPage(e)}>
            <option value="4">4 by page</option>
            <option value="8">8 by page</option>
            <option value="12">12 by page</option>
            <option value="16">16 by page</option>
            <option value="20">20 by page</option>
        </select>

        <button onClick={goBack}>Back</button>
        </>
    )

}
export default Config