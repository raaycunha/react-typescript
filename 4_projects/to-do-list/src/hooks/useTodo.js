import {useState, useEffect} from 'react'

export const useTodo = () => {
  const [taskList, setTaskList] = useState(() => {
    const data = localStorage.getItem('tasks')
    return data ? JSON.parse(data) : []
  })
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  },[taskList])
  const createTask = (taskText) => {
    const newTask = {
      id: crypto.randomUUID(),
      task: taskText,
      checked: false
    }
    setTaskList([...taskList, newTask])
  }
  const boxDelete = (idRemove) => {
    const newList = taskList.filter(item => item.id !== idRemove)
    setTaskList(newList)
  }
  const handleToggleChecked = (itemTarget) => {
    const newList = taskList.map(item => {
      if (itemTarget.id === item.id) {
        return { ...item, checked: !item.checked }
      } else return item
    })
    setTaskList(newList)
  }
  return {
    taskList,
    createTask,
    boxDelete,
    handleToggleChecked
  }
}