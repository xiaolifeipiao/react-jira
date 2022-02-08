/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-06 22:45:18
@LastEditTime: 2022-02-08 17:42:59
@LastEditors: xiaolifeipiao
@FilePath: \src\context\auth-context.tsx
 */

import React, { ReactNode, useCallback } from 'react';
import * as auth from 'auth-provider';
import { User } from 'screens/project-list/search-panel';
import { http } from 'utils/http';
import { FullPageErrorFallback, FullPageLoading } from 'components/lib';
import * as authStore from 'store/auth-slice';
import { bootstrap, selectUser } from 'store/auth-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useAsync } from 'hooks/use-async';
import { useMount } from 'hooks';

export interface AuthForm {
  username: string;
  password: string;
}

export const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http('me', { token });
    user = data.user;
  }
  return user;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { error, isLoading, isIdle, isError, run } = useAsync<User | null>();
  const dispatch: (...args: unknown[]) => Promise<User> = useDispatch();

  useMount(() => {
    run(dispatch(bootstrap()));
  });

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />;
  }

  return <div>{children}</div>;
};

export const useAuth = () => {
  const dispatch: (...args: unknown[]) => Promise<User> = useDispatch();
  const user = useSelector(selectUser);
  const login = useCallback(
    (form: AuthForm) => dispatch(authStore.login(form)),
    [dispatch]
  );
  const register = useCallback(
    (form: AuthForm) => dispatch(authStore.register(form)),
    [dispatch]
  );
  const logout = useCallback(() => dispatch(authStore.logout()), [dispatch]);
  return {
    user,
    login,
    register,
    logout,
  };
};
