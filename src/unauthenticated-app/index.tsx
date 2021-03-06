/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-06 23:37:03
@LastEditTime: 2022-02-08 19:43:28
@LastEditors: xiaolifeipiao
@FilePath: \src\unauthenticated-app\index.tsx
 */
import React, { useState } from 'react';
import { LoginScreen } from './login';
import { RegisterScreen } from './register';
import { Button, Card, Divider, Typography } from 'antd';
import styled from '@emotion/styled';
import logo from 'assets/logo.svg';
import left from 'assets/left.svg';
import right from 'assets/right.svg';
import { ErrorBox } from 'components/lib';

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  console.log(isRegister);
  return (
    <Container>
      <Header />
      <Background />
      <ShowCard>
        <Title>{isRegister ? '请注册' : '请登录'}</Title>
        {error ? <ErrorBox error={error} /> : null}
        {isRegister ? (
          <RegisterScreen onError={setError} />
        ) : (
          <LoginScreen onError={setError} />
        )}
        <Divider />
        <Button type="link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? '已经有账号了？直接登录' : '没有账号？注册新账号'}
        </Button>
      </ShowCard>
    </Container>
  );
};

// 修改Button的长度
export const LongButton = styled(Button)`
  width: 100%;
`;
// 登录注册提示title
const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;
// 头部logo样式
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
// 背景图片样式
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;
// 登录背景样式
const ShowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
// 登录容器样式
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
