import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState  } from 'react'
import { setName } from '../store/slices/name.slice'
import pokemon from '/Pokemon.png'
import ash from '../assets/Images/Ash.png'

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
        <main className='home'>
          <div className='home__pokeball'>
          </div>
          <div className='home__items'>
            <div className='items__title'>
            <h1>Hello trainer!</h1>
            </div>
            <img src={ash} alt=''/>
            <form onSubmit={submit}>
              <label htmlFor='nameId'>Give your name to start</label>
            <input value={userName} onChange={e => setUserName(e.target.value)} type='text' id="nameId" placeholder='Type your name' />
            <button type='submit'>Click</button>
            </form>
            </div>
        </main>
    )
}

export default Home
