const Pagination = ({ pokemonsPerPage, totalPokemons, paginate, totalPokemonsType, isPaginated }) => {
    const pageNumbers = [];

    if(isPaginated){
        for(let i=1; i<= Math.ceil(totalPokemonsType / pokemonsPerPage); i++) {
            pageNumbers.push(i);
        }
    } else {
    for(let i=1; i<= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }
}

    return(
        <>
         <ul  className="pagination-num">
            {pageNumbers.map(num => (
                <li key={num}>
                    <a onClick={() => paginate(num)} href="/#/pokedex">
                        {num}
                    </a>
                </li>
            ))}
        </ul> 
       
       

        </>
    )
}
export default Pagination