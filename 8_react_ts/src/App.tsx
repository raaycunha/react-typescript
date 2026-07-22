import AxiosPost from "./components/AxiosPost";
import ButtonTheme from "./components/ButtonTheme";
import Carrinho from "./components/Carrinho";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import FormLogin from "./components/FormLogin";
import Greeting from "./components/Greeting";
import ListaDeCompras from "./components/ListaDeCompras";
import LocalStorage from "./components/LocalStorage";
import Login from "./components/Login";
import TaskList from "./components/TaskList";
import TextInput from "./components/TextInput";
import Toggle from "./components/Toggle";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* React & TypeScript */}
      {/* 1 - Componente funcional */}
      <Greeting name="Ray" />
      {/* 2 - Hooks com tipos */}
      <Counter />
      {/* 3 - Manipulação de eventos com tipos */}
      <TextInput />
      {/* 4 - Custom Hook */}
      <Toggle />
      {/* 5 - Exercicios */}
      <FormLogin />
      <ListaDeCompras />
      <LocalStorage />
      {/* 6 - useReducer */}
      <Carrinho />
      <TaskList />
      <Counter2 />
      <Login />
      {/* 7 - useContext */}
      <ThemeProvider>
        <ButtonTheme />
      </ThemeProvider>
      {/* 8 - Axios */}
      <AxiosPost />
    </div>
  );
}

export default App;
