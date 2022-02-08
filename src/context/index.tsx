/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-06 22:43:47
@LastEditTime: 2022-02-08 17:40:52
@LastEditors: xiaolifeipiao
@FilePath: \src\context\index.tsx
 */
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { AuthProvider } from './auth-context';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
};
