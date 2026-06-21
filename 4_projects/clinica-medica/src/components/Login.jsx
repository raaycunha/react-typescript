import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = () => {
    if (username.trim() === '' || password === '') return
    alert(`Prazer ${username}, seja bem-vindo(a) a Clinica Hermes!`)
    setUsername('')
    setPassword('')
    navigate('/dashboard')
  }
  return (
    <div className='container-login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="box-input">
            <label htmlFor="#inUser">Nome:</label>
            <input type="text" 
            name="username" 
            id="inUser"
            placeholder='Digite seu nome...'
            title='Digite o seu nome'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required minLength={3} />
          </div>
          <div className="box-input">
            <label htmlFor="#inPass">Senha:</label>
            <input type="password" 
            name="pass" 
            id="inPass"
            placeholder='Digite sua senha...'
            title='Digite a sua senha'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required minLength={6} />
          </div>
          <button type="submit">Enviar Formulário</button>
        </form>
    </div>
  )
}

export default Login
