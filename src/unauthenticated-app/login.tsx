/**
@Author: xiaolifeipiao
@Description: 登录
@version: 0.0.0
@Date: 2022-01-06 23:37:14
@LastEditTime: 2022-01-06 23:58:59
@LastEditors: xiaolifeipiao
@FilePath: \src\unauthenticated-app\login.tsx
 */
import { useAuth } from 'context/auth-context';
import React, { FormEvent, FormEventHandler } from 'react';

export const LoginScreen = () => {
  const { login } = useAuth();
  //  HTMLFormElement extends Element
  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <form onSubmit={handelSubmit}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={'username'}></input>
      </div>
      <div>
        <label htmlFor="username">密码</label>
        <input type="password" id={'username'}></input>
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
