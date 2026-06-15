import './App.css'
import Welcome from './components/Welcome'
import BomDia from './components/BomDia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import UserInfoForm from './components/UserInfoForm'
import Button from './components/Button'
import PaiFuncao from './components/PaiFuncao'
import RenderCondicional from './components/RenderCondicional'
import Logged from './components/Logged'
import RenderNulo from './components/RenderNulo'
import NumberList from './components/NumberList'
import BotaoInline from './components/BotaoInline'
import BotaoAzul from './components/BotaoAzul'
import Exercises from './components/Exercises'

function App() {
  const allTask = [
    {text: 'Fazer tal coisa', id: 0}, 
    {text: 'Fazer outra coisa', id: 1}
  ]
  return (
    <>
      {/* 0.1 - Criação de componentes */}
      <Welcome />
      {/* 0.2 - Expressões do JSX */}
      <BomDia />
      {/* 0.3 - Componente dentro de componente */}
      <Pai />
      {/* 0.4 - Props */}
      <Descricao name='Ray' age={18} city='Belo Horizonte'/>
      {/* 0.5 - Desestruturação de Props */}
      <Cachorro nome='Shark' raca='Pastor Alemão' />
      {/* 0.6 - useState -> Hook */}
      <Counter />
      {/* 0.7 - Múltiplos Estados */}
      <UserInfoForm />
      {/* 0.8 - Eventos */}
      <Button />
      {/* 0.9 - Passando funções de manipulação de eventos como props */}
      <PaiFuncao />
      {/* 0.11 - Renderização Condicional */}
      <RenderCondicional user='Gustavo' />
      {/* 0.12 - Expressão Ternaria */}
      <Logged loggedIn={true} />
      <Logged loggedIn={false} />
      {/* 0.13 - Render Nulo */}
      <RenderNulo warning='Temos um aviso.' />
      {/* 0.14 - Listas Chaves */}
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      {/* 0.15 - Estilos por atributo (inline) */}
      <BotaoInline />
      {/* 0.16 - Estilos globais */}
      <BotaoAzul />
      {/* 0.17 - Exercicios */}
      <Exercises name='Ray' tasks={allTask} />
      <Exercises />
    </>
  )
}

export default  App