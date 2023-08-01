import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState  } from 'react'
import { setName } from '../store/slices/name.slice'


const Home = () => {

  const [ userName, setUserName] = useState("")

  const navigate = useNavigate()
  const dispatch = useDispatch()

     const submit = (e) => {
      e.preventDefault()
      
      if(userName !== "" ){
        dispatch( setName(userName))
        navigate('/pokedex')
        localStorage.setItem("userName", userName)
      } else {
        alert('Introduce your name')
        }
      }

      
    return (
        <main>
            <h1>Hello trainer!</h1>
            <form onSubmit={submit}>
              <label htmlFor='nameId'>Give your name to start</label>
            <input value={userName} onChange={e => setUserName(e.target.value)} type='text' id="nameId" placeholder='Type your name' />
            <button type='submit'>Click</button>
            </form>
        </main>
    )
}

export default Home
