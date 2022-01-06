/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-06 22:45:18
@LastEditTime: 2022-01-07 00:01:25
@LastEditors: xiaolifeipiao
@FilePath: \src\context\auth-context.tsx
 */
import React, { ReactNode, useState } from 'react';
import * as auth from 'auth-provider';
import { User } from 'screens/project-list/search-panel';

interface AuthForm {
  username: string;
  password: string;
}
interface AuthContextProps {
  user: User | null;
  register: (from: AuthForm) => Promise<void>;
  login: (from: AuthForm) => Promise<void>;
  logout: () => Promise<void>;
}
const AuthContext = React.createContext<AuthContextProps | undefined>(
  undefined
);
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (from: AuthForm) => auth.login(from).then(setUser);
  const register = (from: AuthForm) => auth.register(from).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth必须在AuthProvider中使用');
  }
  return context;
};
