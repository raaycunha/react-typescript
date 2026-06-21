import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState('')
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    if (user.trim() === '') return
    navigate('/home')
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text"
        name="user" 
        id="inUser"
        placeholder='Digite seu nome'
        onChange={(e) => setUser(e.target.value)}
        value={user} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Login
