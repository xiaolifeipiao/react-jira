/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-19 22:26:17
@LastEditTime: 2022-02-14 12:31:10
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project\index.tsx
 */
import styled from '@emotion/styled';
import { Menu } from 'antd';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { EpicScreen } from 'screens/epic';
import { KanbanScreen } from 'screens/kanban';

const useRouteType = () => {
  const units = useLocation().pathname.split('/');
  return units[units.length - 1];
};

export const ProjectScreen = () => {
  const routeType = useRouteType();
  return (
    <Container>
      <Aside>
        <Menu mode={'inline'} selectedKeys={[routeType]}>
          <Menu.Item key={'kanban'}>
            <Link to={'kanban'}>看板</Link>
          </Menu.Item>
          <Menu.Item key={'epic'}>
            <Link to={'epic'}>任务组</Link>
          </Menu.Item>
        </Menu>
      </Aside>
      <Main>
        <Routes>
          {/*projects/:projectId/kanban*/}
          <Route path={'kanban'} element={<KanbanScreen />} />
          {/*projects/:projectId/epic*/}
          <Route path={'epic'} element={<EpicScreen />} />
          <Route index element={<KanbanScreen />} />
        </Routes>
      </Main>
    </Container>
  );
};

const Aside = styled.aside`
  background-color: rgb(244, 245, 247);
  display: flex;
`;

const Main = styled.div`
  box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  overflow: hidden;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 16rem 1fr;
  width: 100%;
  /* overflow: hidden; */
`;
