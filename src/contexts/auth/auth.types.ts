import { User } from "firebase/auth";
import { ReactNode } from "react";

export interface IAuth {
  children: ReactNode;
}

export type AuthValuesTypes = {
  user: User | null;
  register: (
    email: string,
    password: string,
    displayName: string,
    photoURL: string
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAdmin: () => boolean;
};
