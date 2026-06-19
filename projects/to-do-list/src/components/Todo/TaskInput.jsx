import {useState} from 'react'

const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('')
  const handleButtonClick = () => {
    if (!taskText.trim()) return
    onAddTask(taskText)
    setTaskText('')
  }
  return (
    <div className="box-input">
      <input type="text" 
      name="task" 
      id="inTask"
      placeholder='Adicione uma nova tarefa'
      title='Adicione uma nova tarefa'
      onChange={(e) => setTaskText(e.target.value)}
      value={taskText} />
      <button id='btnAdd' onClick={handleButtonClick}>Adicionar</button>
    </div>
  )
}

export default TaskInput
