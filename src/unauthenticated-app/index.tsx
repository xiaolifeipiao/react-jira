/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-06 23:37:03
@LastEditTime: 2022-01-17 21:45:04
@LastEditors: xiaolifeipiao
@FilePath: \src\unauthenticated-app\index.tsx
 */
import { Card } from 'antd';
import React, { useState } from 'react';
import { LoginScreen } from './login';
import { RegisterScreen } from './register';

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  console.log(isRegister);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card>
        {isRegister ? <LoginScreen /> : <RegisterScreen />}
        <button onClick={() => setIsRegister(!isRegister)}>
          切换到{isRegister ? '注册' : '登录'}
        </button>
      </Card>
    </div>
  );
};
