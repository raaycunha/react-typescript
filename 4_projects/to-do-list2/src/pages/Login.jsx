import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import TaskInput from './TaskInput'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim() || !password.trim()) return
    localStorage.setItem('user_login', username)
    navigate('/to-do')
    setUsername('')
    setPassword('')
  }
  return (
    <div className='container-login'>
      <form className='form-login' onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="text" 
          name="user" 
          id="inUser"
          placeholder='Digite seu nome...'
          onChange={(e) => setUsername(e.target.value)}
          value={username} />
        <input type="password" 
          name="pass" 
          id="inPass"
          placeholder='Digite sua senha...'
          onChange={(e) => setPassword(e.target.value)}
          value={password} />
        <button type="submit">Logar</button>
      </form>
    </div>
  )
}

export default Login
