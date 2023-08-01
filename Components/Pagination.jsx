const Pagination = ({ pokemonsPerPage, totalPokemons, paginate}) => {
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
        pageNumbers.push(i);
    }

    return(
        <nav>
        <ul  className="pagination-num">
            {pageNumbers.map(num => (
                <li key={num}>
                    <a onClick={() => paginate(num)} href="/#/pokedex">
                        {num}
                    </a>
                </li>
            ))}
        </ul>
        </nav>
    )
}
export default Pagination