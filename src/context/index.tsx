/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-06 22:43:47
@LastEditTime: 2022-01-06 23:24:37
@LastEditors: xiaolifeipiao
@FilePath: \src\context\index.tsx
 */
import React, { Children, ReactNode } from 'react';
import { AuthProvider } from './auth-context';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
