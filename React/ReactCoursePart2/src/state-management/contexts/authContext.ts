import { AuthAction } from "../reducers/authReducer";
import { Dispatch } from "react";
import React from "react";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;