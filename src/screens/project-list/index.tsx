/**
@Author: xiaolifeipiao
@Description: 搜索列表查询组件
@version: 0.0.0
@Date: 2022-01-03 19:49:06
@LastEditTime: 2022-01-21 17:10:05
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\index.tsx
 */
import React, { useState } from 'react';
import { useDebounce, useDocumentTitle } from '../../hooks/index';
import { SearchPanel } from './search-panel';
import { List } from './list';
import styled from '@emotion/styled';
import { useProjects } from 'hooks/use-projects';
import { useUsers } from 'hooks/use-Users';
import { Typography } from 'antd';
import { useUrlQueryParam } from 'hooks/url';
import { useProjectsSearchParams } from './util';

export const ProjectListScreen = () => {
  // 状态提升可以让组件共享状态，但是容易造成 prop drilling
  // 基本类型，可以放到依赖里；组件状态，可以放到依赖里；非组件状态的对象，绝不可以放到依赖里
  // https://codesandbox.io/s/keen-wave-tlz9s?file=/src/App.js
  useDocumentTitle('项目列表', false);
  const [param, setParam] = useProjectsSearchParams();
  const {
    isLoading,
    error,
    data: list,
  } = useProjects(useDebounce(param, 1000));
  const { data: users } = useUsers();

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  );
};

export default ProjectListScreen;

ProjectListScreen.whyDidYouRender = true;
// 和下面class等价;
// class Text extends React.Component<any, any> {
//   static whyDidYouRender = true;
// }
const Container = styled.div`
  padding: 3.2rem;
`;
