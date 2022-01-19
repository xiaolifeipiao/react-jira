/**
@Author: xiaolifeipiao
@Description: 搜索列表查询组件
@version: 0.0.0
@Date: 2022-01-03 19:49:06
@LastEditTime: 2022-01-19 18:29:33
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

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const debouncedParam = useDebounce(param, 1000);
  const { isLoading, error, data: list } = useProjects(debouncedParam);
  const { data: users } = useUsers();
  useDocumentTitle('项目列表', false);
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

const Container = styled.div`
  padding: 3.2rem;
`;
