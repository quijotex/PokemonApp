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
    navigate(-1)
}

    return(
        <div className="settings">
            <button onClick={goBack}>Back</button>
            <h1>Settings</h1>
            <div className="settings__items">
         <label htmlFor="adjustPage">Pokémons per page:</label>
        <select id="adjustPage" value={pokemonsPerPage} onChange={(e) => adjustPage(e)}>
            <option value="4">4 by page</option>
            <option value="8">8 by page</option>
            <option value="12">12 by page</option>
            <option value="16">16 by page</option>
            <option value="20">20 by page</option>
        </select>
        </div>

       
        </div>
    )

}
export default Config