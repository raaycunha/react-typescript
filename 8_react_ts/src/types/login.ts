export type LoginStatus = "idle" | "authenticated" | "error";
export interface LoginState {
  status: LoginStatus;
  loading: boolean;
}

export type LoginAction =
  | { type: "LOGIN_START" }
  | { type: "SUCCESS" }
  | { type: "ERROR" }
  | { type: "TRY_AGAIN" }
  | { type: "LOGOUT" };
