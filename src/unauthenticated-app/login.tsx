/**
@Author: xiaolifeipiao
@Description: 登录
@version: 0.0.0
@Date: 2022-01-06 23:37:14
@LastEditTime: 2022-01-19 16:56:46
@LastEditors: xiaolifeipiao
@FilePath: \src\unauthenticated-app\login.tsx
 */
import { useAuth } from 'context/auth-context';
import React from 'react';
import { Form, Input } from 'antd';
import { LongButton } from 'unauthenticated-app';
import { useAsync } from 'hooks/use-async';

export const LoginScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { login } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
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

  const handelSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      await run(login(values));
      console.log('dasdas');
    } catch (e: any) {
      onError(e);
    }
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
        <Input placeholder={'密码'} type="password" id={'password'} />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} htmlType={'submit'} type={'primary'}>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};
