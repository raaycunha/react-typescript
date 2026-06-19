import {useContext} from 'react'
import {MyContext} from '../contexts/MyContext'

const ComponentChildren = () => {
  const {message, setMessage} = useContext(MyContext)
  return (
    <div>
      <button onClick={() => setMessage('New message!')}>Alterar mensagem</button>
      <h1>Mensagem: {message}</h1>
    </div>
  )
}

export default ComponentChildren