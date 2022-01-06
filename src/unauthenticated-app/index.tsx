/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-06 23:37:03
@LastEditTime: 2022-01-07 00:13:21
@LastEditors: xiaolifeipiao
@FilePath: \src\unauthenticated-app\index.tsx
 */
import React, { useState } from 'react';
import { LoginScreen } from './login';
import { RegisterScreen } from './register';

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  console.log(isRegister);
  return (
    <div>
      {isRegister ? <LoginScreen /> : <RegisterScreen />}
      <button onClick={() => setIsRegister(!isRegister)}>
        切换到{isRegister ? '登录' : '注册'}
      </button>
    </div>
  );
};
