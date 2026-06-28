import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import TodoPage from './To-do/TodoPage'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/to-do' element={<TodoPage />} />
      </Routes>
    </div>
  )
}

export default AppRoutes