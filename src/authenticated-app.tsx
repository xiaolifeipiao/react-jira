/**
@Author: xiaolifeipiao
@Description: grad和flex的使用场景  
@version: 0.0.0
@Date: 2022-01-06 23:47:14
@LastEditTime: 2022-01-18 17:21:37
@LastEditors: xiaolifeipiao
@FilePath: \src\authenticated-app.tsx
 */

/**
 * grad和flex各自的使用场景
 * 1.要考虑是一维布局还是二维布局
 * 一般来说一维布局用flex,二维布局用grid
 * 2. 是从内容出发还是从布局出发
 * 从内容出发：你先有一组内容（数量一般不固定），然后希望他们均匀的分布在容器中，由内容自己的大小决定占据的空间
 * 从布局出发：先规划网格（数量一般比较固定），然后再把元素往里面填充
 *从内容出发：flex
 从布局出发：grid
 */

import styled from '@emotion/styled';
import { Row } from 'components/lib';
import { useAuth } from 'context/auth-context';
import React from 'react';
import ProjectListScreen from 'screens/project-list';
import { ReactComponent as SoftwareLogo } from 'assets/software-logo.svg';
import { Dropdown, Menu } from 'antd';
import { userInfo } from 'os';

export const AuthenticatedApp = () => {
  const { logout, user } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={'18rem'} color="rgb(38,132,255)"></SoftwareLogo>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={'logout'}>
                  <a onClick={logout}>登出</a>
                </Menu.Item>
              </Menu>
            }
          >
            <a onClick={(e) => e.preventDefault()}>Hi，{user?.name}</a>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

// 页面头部导航条样式
const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  /* grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas:
    'header header header'
    'nav main aside'
    'footer footer footer';
  grid-gap: 10rem; */
  height: 100vh;
`;
// 工程列表主要页面外边盒子样式
const Main = styled.main`
  /* grid-area: main; */
  /* height: calc(100vh - 6rem); */
`;

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
