import './App.css'
import AppRoutes from './components/AppRoutes'
import { StoreProvider } from './context/StoreContext'

function App() {
  return (
    <>
      <StoreProvider>
        <AppRoutes />
      </StoreProvider>
    </>
  )
}

export default App
