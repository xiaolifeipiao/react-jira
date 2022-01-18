/**
@Author: xiaolifeipiao
@Description: 注册
@version: 0.0.0
@Date: 2022-01-06 23:37:26
@LastEditTime: 2022-01-18 15:16:50
@LastEditors: xiaolifeipiao
@FilePath: \src\unauthenticated-app\register.tsx
 */
import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/auth-context';
import React, { FormEvent, FormEventHandler } from 'react';
import { LongButton } from 'unauthenticated-app';

export const RegisterScreen = () => {
  const { register } = useAuth();
  //  HTMLFormElement extends Element
  // const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const username = (event.currentTarget.elements[0] as HTMLInputElement)
  //     .value;
  //   const password = (event.currentTarget.elements[1] as HTMLInputElement)
  //     .value;
  //   register({ username, password });
  // };
  const handelSubmit = (values: { username: string; password: string }) => {
    register(values);
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
        <LongButton htmlType={'submit'} type={'primary'}>
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
};
