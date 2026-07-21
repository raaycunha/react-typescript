import './App.css'
import Counter from './components/Counter'
import FormLogin from './components/FormLogin'
import Greeting from './components/Greeting'
import ListaDeCompras from './components/ListaDeCompras'
import LocalStorage from './components/LocalStorage'
import TextInput from './components/TextInput'
import Toggle from './components/Toggle'

function App() {
  return (
    <>
      {/* 1 - Componente funcional com TS */}
      <Greeting name='Ray' />
      {/* 2 - Hooks com tipos */}
      <Counter />
      {/* 3 - Manipulação de eventos com tipos */}
      <TextInput />
      {/* 4 - Custom Hook com TS */}
      <Toggle />
      {/* Exercicios */}
      <FormLogin />
      <ListaDeCompras />
      <LocalStorage />
    </>
  )
}

export default App
