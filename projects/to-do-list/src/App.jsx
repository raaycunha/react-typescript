import Layout from './components/Layout'
import TaskInput from './components/Todo/TaskInput'
import TaskItem from './components/Todo/TaskItem'
import { useTodo } from './hooks/useTodo'
import './App.css'

function App() {
  const { taskList, createTask, boxDelete, handleToggleChecked } = useTodo()
  return (
    <>
      <Layout>
        <TaskInput onAddTask={createTask} />
        <section className="container-task">
          {taskList.length > 0 && taskList.map((item, index) => (
            <TaskItem
              key={item.id} 
              item={item} 
              onToggle={handleToggleChecked} 
              onDelete={boxDelete} />
          ))}
        </section>
      </Layout>
    </>
  )
}

export default App
