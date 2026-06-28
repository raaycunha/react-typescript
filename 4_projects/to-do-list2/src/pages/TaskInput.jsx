import {useState, useEffect} from 'react'

const TaskInput = ({ onAddTask, taskForEdit, onSaveEdit }) => {
  const [taskText, setTaskText] = useState('')
  const [priority, setPriority] = useState('low')
  useEffect(() => {
    if (taskForEdit) {
      setTaskText(taskForEdit.taskText)
      setPriority(taskForEdit.priority)
    } else {
      setTaskText('')
      setPriority('low')
    }
  }, [taskForEdit])
  const nameUser = localStorage.getItem('user_login')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!taskText.trim() || priority === '') return
    taskForEdit ? onSaveEdit(taskForEdit.id, taskText, priority) : onAddTask(taskText, priority)
    setTaskText('')
    setPriority('low')
  }
  return (
    <section className="container-form">
      <h3>Hello {nameUser}, Bem-vindo ao To-do List!</h3>
      <form id='frm' onSubmit={handleSubmit}>
        <div className="box-input">
        <input type="text" 
          name="task" 
          id="inTask"
          placeholder='Digite sua tarefa...'
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText} />
        </div>
        <div className="box-input">
          <label htmlFor='inPriority'>Prioridade:</label>
          <select 
            id="inPriority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option disabled>Selecione a prioridade da tarefa</option>
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </select>
        </div>
        <button type='submit'>{taskForEdit ? 'Salvar Edição' : 'Adicionar'}</button>
      </form>
    </section>
  )
}

export default TaskInput
