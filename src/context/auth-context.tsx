/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-06 22:45:18
@LastEditTime: 2022-02-12 18:07:00
@LastEditors: xiaolifeipiao
@FilePath: \src\context\auth-context.tsx
 */
import React, { ReactNode, useCallback } from 'react';
import * as auth from 'auth-provider';
import { User } from 'screens/project-list/search-panel';
import { http } from 'utils/http';
import { useMount } from 'hooks';
import { useAsync } from 'hooks/use-async';
import { FullPageErrorFallback, FullPageLoading } from 'components/lib';
import { useQueryClient } from 'react-query';

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
const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

// 浏览器刷新初始化
const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http('me', { token });
    user = data.user;
  }
  return user;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const [user, setUser] = useState<User | null>(null);
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    run,
    setData: setUser,
  } = useAsync<User | null>();

  const queryClient = useQueryClient();
  const login = (from: AuthForm) => auth.login(from).then(setUser);
  const register = (from: AuthForm) => auth.register(from).then(setUser);
  const logout = () =>
    auth.logout().then(() => {
      setUser(null);
      queryClient.clear();
    });

  // 刷新初始化
  useMount(
    useCallback(() => {
      run(bootstrapUser());
    }, [])
  );
  //初始化和加载时
  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }
  // 发生错误信息是me请求失败
  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }

  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth必须在AuthProvider中使用');
  }
  return context;
};
