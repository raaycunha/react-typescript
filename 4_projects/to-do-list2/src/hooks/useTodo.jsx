import { useState, useEffect } from 'react'

export const useTodo = () => {
  const [taskList, setTaskList] = useState(() => {
    const data = localStorage.getItem('tasks')
    return data ? JSON.parse(data) : []
  })
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  }, [taskList])
  const addTask = (taskText, priority) => {
    const newTask = { 
        id: crypto.randomUUID(),
        taskText,
        priority,
        checked: false
      }
      setTaskList((currentTasks) => [...currentTasks, newTask])
  }
  const handleDelete = (idTarget) => {
    const newList = taskList.filter(item => item.id !== idTarget)
    setTaskList(newList)
  }
  const handleChecked = (idTarget) => {
    const newList = taskList.map(item => {
      if (idTarget === item.id) {
        return { ...item, checked: !item.checked }
      } else return item
    })
    setTaskList(newList)
  }
  const [taskEdit, setTaskEdit] = useState(null)
  const handleIniciarEdit = (task) => {
    setTaskEdit(task)
  }
  const handleSalvarEdit = (id, text, newPriority) => {
    setTaskList(taskList.map(task =>
      task.id === id ? { ...task, taskText: text, priority: newPriority } : task
    ))
    setTaskEdit(null)
  }
  return {
    taskList,
    setTaskList,
    addTask,
    handleDelete,
    handleChecked,
    taskEdit,
    handleIniciarEdit,
    handleSalvarEdit
  }
}