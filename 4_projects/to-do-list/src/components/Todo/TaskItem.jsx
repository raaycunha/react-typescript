import React from 'react'

const TaskItem = ({ item, onToggle, onDelete }) => {
  return (
    <div className={`box-task ${item.checked ? 'checked' : ''}`} onClick={() => onToggle(item)}>
      <p>{item.task}</p>
      <button className='btn-delete' onClick={(e) => {
        e.stopPropagation()
        onDelete(item.id)
      }}>Remover</button>
    </div>
  )
}

export default TaskItem
