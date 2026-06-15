import {useState} from 'react'

const Exercises = ({ name, tasks }) => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <div>
        <h1>Olá, {name && name.length > 0 ? name + '!' : 'Tudo bem?'}</h1>
      </div>
      <div>
        <h1>Você clicou {counter} vezes no botão!</h1>
        <button onClick={() => setCounter(counter + 1)}>Clique aqui!</button>
     </div>
      <div>
        {tasks && tasks.length > 0 ? (
          <ol>
            {tasks.map(task => (
              <li key={task.id}>{task.text}</li>
            ))}
          </ol> 
        ) : (
          <p>Não há tarefas a mostrar.</p>
        )}
      </div>
    </div>
  )
}

export default Exercises