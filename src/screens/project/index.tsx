/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-19 22:26:17
@LastEditTime: 2022-01-21 14:57:34
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project\index.tsx
 */
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { EpicScreen } from 'screens/epic';
import { KanbanScreen } from 'screens/kanban';

export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to={'kanban'}>看板</Link>
      <Link to={'epic'}>任务组</Link>
      <Routes>
        {/* prokjects/:projectId/kanban  */}
        <Route path={'/kanban'} element={<KanbanScreen />}></Route>
        <Route path={'/epic'} element={<EpicScreen />}></Route>
        {/* <Navigate to={window.location.pathname + '/kanban'} /> */}
        {/* index 默认路由 */}
        <Route index element={<KanbanScreen />} />
      </Routes>
    </div>
  );
};
