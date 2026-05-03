import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase.init";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  return <AuthContext>{children}</AuthContext>;
};

export default AuthProvider;
