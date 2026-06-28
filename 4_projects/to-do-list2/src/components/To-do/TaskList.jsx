import {useState} from 'react'

const TaskList = ({ allTask, onDelete, onToggle, onEdit }) => {
  const handleClassDiv = (item) => {
    return `box-task ${item.checked ? 'checked' : ''} ${item.priority}`
  }
  return (
    <section className="container-tasks">
        {allTask && allTask.map(item => (
          <div className={handleClassDiv(item)}
          onClick={() => onToggle(item.id)} key={item.id}>
            <p>{item.taskText}</p>
            <div className="box-btn">
              <button className='btn-edit' onClick={(e) => {
                e.stopPropagation()
                onEdit(item)
              }}>Editar</button>
              <button className='btn-delete' onClick={(e) => {
                e.stopPropagation()
                onDelete(item.id)
              }}>Excluir</button>
            </div>
          </div>
        ))}
    </section>
  )
}

export default TaskList