import './App.css'
import AppRoutes from './components/AppRoutes'
import { Link } from 'react-router-dom'
import Layout from './components/Layout'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  )
}

export default App
