import { Link } from 'react-router-dom'



const Home = () => {

  //Cuando se use un botón dentro de un Link no usar espaciados o padding en el link porque si no habrá zonas donde no funcione
  
    return (
        <main>
            <h1>Bienvenido a esta Pokedex</h1>
            <Link to="/pokemon">Ir al listado de pokemones</Link>

            <Link to="/pokemon">
                <button>Ir al listado</button>
            </Link>
        
          
        </main>
    )
}

export default Home
