import './App.css'
import ComponentChildren from './components/ComponentChildren'
import Timer from './components/Timer'
import { MyContextProvider } from './contexts/MyContext'
import Container from './components/Container'
import ProfileUser from './components/ProfileUser'
import Exercises from './components/Exercises'

function App() {
  return (
    <>
      {/* 0.1 - useEffect */}
      <Timer />
      {/* 0.2 - useContext */}
      <MyContextProvider>
        <ComponentChildren />
      </MyContextProvider>
      {/* 0.3 - Slots e children props */}
      <Container>
        <h1>Titulo</h1>
        <p>Paragrafo</p>
        <Timer />
      </Container>
      {/* 0.4 - Sincronizar o estado com props */}
      {/* Prop -> Componente -> Chamada de API -> Resulta em um dado */}
      <ProfileUser />
      <ProfileUser userId={1} />
      <ProfileUser userId={2} />
      {/* 0.5 - Exercises */}
      <Exercises />
    </>
  )
}

export default App