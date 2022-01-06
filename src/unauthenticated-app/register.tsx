/**
@Author: xiaolifeipiao
@Description: 注册
@version: 0.0.0
@Date: 2022-01-06 23:37:26
@LastEditTime: 2022-01-07 00:01:07
@LastEditors: xiaolifeipiao
@FilePath: \src\unauthenticated-app\register.tsx
 */
import { useAuth } from 'context/auth-context';
import React, { FormEvent, FormEventHandler } from 'react';

export const RegisterScreen = () => {
  const { register } = useAuth();
  //  HTMLFormElement extends Element
  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    register({ username, password });
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
      <button type="submit">注册</button>
    </form>
  );
};
