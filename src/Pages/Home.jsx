import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../store/slices/name.slice'



const Home = () => {

  

      const submit = (e) => {
        e.preventDefault()
       console.log(e)
      }

      const succesfullRegister = () => {
        if(trainer !== null){
          navigate('/pokemon')
        } else {
         alert('Introduce your name')
        }
      }
    return (
        <main>
            <h1>Bienvenido a esta Pokedex</h1>
            <form onSubmit={submit}>
              <label htmlFor='nameId'>Give your name to start</label>
            <input name="trainer" type='text' id="nameId" placeholder='Type your name' ></input>
            <button type='submit'>Click</button>
            </form>
           
            <Link to="/pokemon">Ir al listado de pokemones</Link>

            <Link to="/pokemon">
                <button>Ir al listado</button>
            </Link>
        
          
        </main>
    )
}

export default Home
