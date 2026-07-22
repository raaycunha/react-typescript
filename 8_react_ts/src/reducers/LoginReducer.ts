import type { LoginAction, LoginState } from "../types/login";

export const LoginReducer = (
  state: LoginState,
  action: LoginAction,
): LoginState => {
  switch (action.type) {
    case "LOGIN_START": {
      return { ...state, loading: true };
    }
    case "SUCCESS": {
      return { status: "authenticated", loading: false };
    }
    case "ERROR": {
      return { status: "error", loading: false };
    }
    case "TRY_AGAIN": {
      return { status: "idle", loading: false };
    }
    case "LOGOUT": {
      return { status: "idle", loading: false };
    }
    default:
      return state;
  }
};
