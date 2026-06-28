import {useState} from 'react'
import {useTodo} from '../../hooks/useTodo'
import TaskInput from '../../pages/TaskInput'
import TaskList from './TaskList'

const TodoPage = () => {
  const { 
    taskList, 
    setTaskList, 
    addTask, 
    handleDelete, 
    handleChecked, 
    taskEdit, 
    handleIniciarEdit, 
    handleSalvarEdit 
  } = useTodo()
  return (
    <main className='main-container'>
      <TaskInput 
        onAddTask={addTask}
        taskForEdit={taskEdit}
        onSaveEdit={handleSalvarEdit}
      />
      <TaskList 
        allTask={taskList} 
        onDelete={handleDelete} 
        onToggle={handleChecked} 
        onEdit={handleIniciarEdit}
      />
    </main>
  )
}

export default TodoPage
