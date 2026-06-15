import {useState} from 'react'

function UserInfoForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const sendForm = (e) => {
        e.preventDefault()
        console.log(name, email)
        setName('')
        setEmail('')
    }
  return (
    <div>222
      <form onSubmit={sendForm}>
        <input type="text" value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Digite seu nome' />
        <input type="email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Digite seu e-mail' />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}

export default UserInfoForm
