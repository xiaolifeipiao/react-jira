/**
@Author: xiaolifeipiao
@Description: 搜索列表查询组件
@version: 0.0.0
@Date: 2022-01-03 19:49:06
@LastEditTime: 2022-01-25 14:32:27
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\index.tsx
 */
import React from 'react';
import { useDebounce, useDocumentTitle } from '../../hooks/index';
import { SearchPanel } from './search-panel';
import { List } from './list';
import styled from '@emotion/styled';
import { useProjects } from 'hooks/use-projects';
import { useUsers } from 'hooks/use-Users';
import { Button, Typography } from 'antd';
import { useProjectsSearchParams } from './util';
import { Row } from 'components/lib';

export const ProjectListScreen = (props: { projectButton: JSX.Element }) => {
  // 状态提升可以让组件共享状态，但是容易造成 prop drilling
  // 基本类型，可以放到依赖里；组件状态，可以放到依赖里；非组件状态的对象，绝不可以放到依赖里
  // https://codesandbox.io/s/keen-wave-tlz9s?file=/src/App.js
  useDocumentTitle('项目列表', false);
  const [param, setParam] = useProjectsSearchParams();
  const {
    isLoading,
    error,
    data: list,
    retry,
  } = useProjects(useDebounce(param, 1000));
  const { data: users } = useUsers();

  return (
    <Container>
      <Row between={true}>
        <h1>项目列表</h1>
        {props.projectButton}
      </Row>

      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : null}
      <List
        projectButton={props.projectButton}
        refresh={retry}
        loading={isLoading}
        dataSource={list || []}
        users={users || []}
      />
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
