/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-06 22:43:47
@LastEditTime: 2022-02-08 19:20:39
@LastEditors: xiaolifeipiao
@FilePath: \src\context\index.tsx
 */
import React, { ReactNode } from 'react';
import { AuthProvider } from './auth-context';
import { QueryClient, QueryClientProvider } from 'react-query';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>;
    </QueryClientProvider>
  );
};
