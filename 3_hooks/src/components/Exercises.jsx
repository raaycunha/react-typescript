import {useEffect} from 'react'

const ExerciseOne = ({ user }) => {
  useEffect(() => {
    if (user && user.name) document.title = `${user.name} - ${user.work || 'Sem profissão'}`
  }, [user])
  if (!user) return <p>Carregando informações do usuário...</p>

  return (
    <div>
      <h3>Exercicio 1</h3>
      <h1><strong>Nome: </strong>{user.name}</h1>
      <p><strong>Profissão: </strong>{user.work || 'Sem profissão'}</p>
    </div>
  )
}

const ExerciseTwo = () => {
  
}

const Exercises = () => {
  const userInfo = {
    name: 'Ray',
    work: 'Developer'
  }
  return (
    <div>
      <ExerciseOne user={userInfo} />
    </div>
  )
}

export default Exercises