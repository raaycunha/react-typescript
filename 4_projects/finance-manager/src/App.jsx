import './App.css'
import AppRoutes from './components/AppRoutes'
import { FinanceProvider } from './context/FinanceContext'

function App() {
  return (
    <FinanceProvider>
      <AppRoutes />
    </FinanceProvider>
  )
}

export default App
