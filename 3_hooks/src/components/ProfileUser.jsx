import {useEffect, useState} from 'react'

const ProfileUser = ({ userId }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const searchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const dataUser = await response.json()
        setUser(dataUser)
      } catch (err) {
        alert('Ocorreu um erro ao buscar o usuário.')
        console.error('Erro detalhado:', err)
      }
    }
    if (userId) searchUser()
  }, [userId])

  return (
    <div>
      {user ? (
      <div>
        <h1>{user.name}</h1> 
        <p>{user.email}</p>
      </div>
      ) : <p>Digite o ID de um usuário válido!</p>
      }
    </div>
  )
}

export default ProfileUser