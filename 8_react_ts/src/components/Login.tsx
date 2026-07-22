import { useReducer, useState } from "react";
import { LoginReducer } from "../reducers/LoginReducer";
import type { LoginState } from "../types/login";

const stateInitial: LoginState = {
  status: "idle",
  loading: false,
};

const Login = () => {
  const [state, dispatch] = useReducer(LoginReducer, stateInitial);
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN_START",
    });
    const userNameClean = userName.trim();
    const passwordClean = password.trim();
    if (userNameClean.length > 0 && passwordClean.length > 0) {
      setTimeout(() => {
        localStorage.setItem("login_user", JSON.stringify(userNameClean));
        dispatch({
          type: "SUCCESS",
        });
      }, 1000);
    } else {
      setTimeout(() => {
        dispatch({
          type: "ERROR",
        });
      }, 1000);
    }
    setUserName("");
    setPassword("");
  };
  return (
    <div className="m-3">
      {state.status === "error" && (
        <div>
          <h1>Usuário ou senha inválidos</h1>
          <button
            onClick={() => {
              dispatch({
                type: "LOGIN_START",
              });
              setTimeout(() => {
                dispatch({
                  type: "TRY_AGAIN",
                });
              }, 1000);
            }}
          >
            {state.loading ? "Carregando..." : "Tente novamente"}
          </button>
        </div>
      )}
      {state.status === "authenticated" && (
        <div>
          <h1>Login realizado com sucesso!</h1>
          <button
            onClick={() => {
              localStorage.removeItem("login_user");
              dispatch({
                type: "LOGIN_START",
              });
              setTimeout(() => {
                dispatch({
                  type: "LOGOUT",
                });
              }, 1000);
            }}
          >
            {state.loading ? "Carregando..." : "Logout"}
          </button>
        </div>
      )}
      {state.status === "idle" && (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="inUser"
              placeholder="Digite seu userName..."
              value={userName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUserName(e.target.value)
              }
            />
          </div>
          <div>
            <input
              type="password"
              id="inPass"
              placeholder="Digite sua senha..."
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <button type="submit">
            {state.loading ? "Carregando..." : "Logar"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
