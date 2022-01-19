/**
@Author: xiaolifeipiao
@Description: 注册
@version: 0.0.0
@Date: 2022-01-06 23:37:26
@LastEditTime: 2022-01-19 17:03:23
@LastEditors: xiaolifeipiao
@FilePath: \src\unauthenticated-app\register.tsx
 */
import { Button, Form, Input } from 'antd';
import { useAuth } from 'context/auth-context';
import { useAsync } from 'hooks/use-async';
import React, { FormEvent, FormEventHandler } from 'react';
import { LongButton } from 'unauthenticated-app';

export const RegisterScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { register } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  //  HTMLFormElement extends Element
  // const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const username = (event.currentTarget.elements[0] as HTMLInputElement)
  //     .value;
  //   const password = (event.currentTarget.elements[1] as HTMLInputElement)
  //     .value;
  //   register({ username, password });
  // };
  const handelSubmit = async ({
    cpassword,
    ...values
  }: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    if (cpassword !== values.password) {
      onError(new Error('请确认两次输入密码相同'));
    }
    try {
      await run(register(values));
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
      <Form.Item
        name={'cpassword'}
        rules={[{ required: true, message: '请确认密码' }]}
      >
        <Input placeholder={'确认密码'} type="password" id={'cpassword'} />
      </Form.Item>
      <Form.Item>
        <LongButton loading={isLoading} htmlType={'submit'} type={'primary'}>
          注册
        </LongButton>
      </Form.Item>
    </Form>
  );
};
