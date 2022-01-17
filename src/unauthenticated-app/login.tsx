/**
@Author: xiaolifeipiao
@Description: 登录
@version: 0.0.0
@Date: 2022-01-06 23:37:14
@LastEditTime: 2022-01-17 21:31:19
@LastEditors: xiaolifeipiao
@FilePath: \src\unauthenticated-app\login.tsx
 */
import { useAuth } from 'context/auth-context';
import React, { FormEvent, FormEventHandler } from 'react';
import { Button, Form, Input } from 'antd';

export const LoginScreen = () => {
  const { login } = useAuth();
  //  HTMLFormElement extends Element
  // 原生写法
  // const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const username = (event.currentTarget.elements[0] as HTMLInputElement)
  //     .value;
  //   const password = (event.currentTarget.elements[1] as HTMLInputElement)
  //     .value;
  //   login({ username, password });
  // };

  const handelSubmit = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <Form onFinish={handelSubmit}>
      <Form.Item
        name={'username'}
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder={'用户名'} type="text" id={'username'} />
      </Form.Item>
      <Form.Item
        name={'password'}
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input placeholder={'密码'} type="password" id={'username'} />
      </Form.Item>
      <Form.Item>
        <Button htmlType={'submit'} type={'primary'}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
