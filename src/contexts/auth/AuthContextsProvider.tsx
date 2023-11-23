import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthValuesTypes, IAuth } from "./auth.types";
import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { log } from "console";
import { notify } from "../../components/Toastify";
import { ADMINS, API_categories } from "../../utils/consts";
import axios from "axios";

export const authContext = createContext<AuthValuesTypes | null>(null);

export function useAuth() {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("Забыли обернуть");
  }
  return context;
}

const AuthContextsProvider = ({ children }: IAuth) => {
  const [user, setUser] = useState<User | null>(null);
  
    async function getCategories(){
        let res = await axios.get(API_categories)
        console.log(res)
    }
    
  async function register(
    email: string,
    password: string,
    displayName: string,
    photoURL: string
  ) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser!, { displayName, photoURL });
    } catch (error: any) {
      notify(error.code.split("/")[1], "error");
    }
  }

  async function login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      notify(error.code.split("/")[1], "error");
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  async function logout() {
    try {
      await signOut(auth);
    } catch (e: any) {
      notify(e.code.split("/")[1], "error");
    }
  }

  function isAdmin() {
    if (!user) {
      return false;
    }
    return ADMINS.includes(user.email!);
  }

  return (
    <authContext.Provider value={{ register, user, logout, login, isAdmin }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextsProvider;
