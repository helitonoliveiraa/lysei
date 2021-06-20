import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';
import { parseCookies, setCookie } from 'nookies';
import Router from 'next/router';

import { api } from '../services/api';

type SignInData = {
  email: string;
  password: string;
};

type User = {
  email: string;
  password: string;
};

type AuthContextData = {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
  user: User;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({
  children,
}: AuthContextProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'lysei:token': token } = parseCookies();
  }, []);

  async function signIn({ email, password }: SignInData) {
    const { data } = await api.post('sessions', {
      email,
      password,
    });

    setCookie(undefined, 'lysei:token', data.token, {
      maxAge: 60 * 60 * 24, // 24 hours
    });

    api.defaults.headers.Authorization = `Bearer ${data.token}`;

    setUser(data);

    Router.push('/home');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
