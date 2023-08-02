
const PokemonByName = ({ setName, setIsName, pokemonList}) => {
 
   const submit = (e) => {
    e.preventDefault()

    for(let i = 0; i < pokemonList.length; i++){
        if(pokemonList[i].name === e.target.value){
            setName(pokemonList[i].url)
            setIsName(true)
        }
    }

   }


    return(
        <>
        <form onSubmit={submit}>
        <input  type="text" placeholder="Type Pokemon's name" onChange={(e) => submit(e)}/>
        <button type="submit">Search</button>
        </form>

       
        </>
    )
}

export default PokemonByName