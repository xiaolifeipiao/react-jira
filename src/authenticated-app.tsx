/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-06 23:47:14
@LastEditTime: 2022-01-07 00:07:04
@LastEditors: xiaolifeipiao
@FilePath: \src\authenticated-app.tsx
 */
import { useAuth } from 'context/auth-context';
import React from 'react';
import ProjectListScreen from 'screens/project-list';

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectListScreen />
    </div>
  );
};
