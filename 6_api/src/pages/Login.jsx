import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { loginUser } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setPassword('')
      return
    } else {
      const userInfo = {
        user: username,
        pass: password,
      }
      loginUser(userInfo)
      navigate('/layout', { replace: true })
      setUsername('')
      setPassword('')
    }
  }
  return (
    <div className='container-login'>
      <form id='frm' onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        <div className='box-input'>
          <input type="text" 
            id="username"
            placeholder='Digite seu username..'
            title='Digite seu username'
            required minLength={1}
            onChange={(e) => setUsername(e.target.value)}
            value={username} 
          />
        </div>
        <div className='box-input'>
          <input type="password" 
            id="password"
            placeholder='Digite a sua senha..'
            title='Digite a sua senha'
            required minLength={1}
            onChange={(e) => setPassword(e.target.value)}
            value={password} 
          />
        </div>
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Login