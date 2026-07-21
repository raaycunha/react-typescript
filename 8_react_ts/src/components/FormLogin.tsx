import { useState } from 'react'

const FormLogin = () => {
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, input: string) => {
    if (input === 'username') setUserName(e.target.value)
    else setPassword(e.target.value)
  }
  const handleSubmit = () => {
    alert(`Seja bem-vindo ${userName}! Sua senha é: ${password}`)
    setUserName('')
    setPassword('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="box-input">
        <label htmlFor="inUsername">Username:</label>
        <input type="text" 
        id="inUsername"
        minLength={1}
        value={userName}
        onChange={(e) => handleChange(e, 'username')} />
      </div>
      <div className="box-input">
        <label htmlFor="inPass">Senha:</label>
        <input type="password" 
        id="inPass"
        minLength={1}
        value={password}
        onChange={(e) => handleChange(e, 'password')} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormLogin
