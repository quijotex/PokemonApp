import { useState } from 'react'


const PokemonByName = ({ setName, setIsName, pokemonList }) => {
    const [ nameType, setNameType ] = useState("")
   

   const searchName = () => {

    const pokemon = nameType.toLocaleLowerCase()
    for(let i = 0; i < pokemonList.length; i++){
        if(pokemonList[i].name === pokemon){
           setName(pokemonList[i].url);  
           setIsName(true);
        }
        
    }
  setNameType("")
   }

   console.log(nameType)

    return(
        <>
       <div className='search-name'>
        <input  id="InputId" type="text" name='pokemon' placeholder="Search by Pokémon's name" value={nameType} onChange={(e) => setNameType(e.target.value)}/>
        <button onClick={searchName}><i className='bx bx-search bx-md'></i></button>
        </div>

       
        </>
    )
}

export default PokemonByName