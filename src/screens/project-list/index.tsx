/**
@Author: xiaolifeipiao
@Description: 搜索列表查询组件
@version: 0.0.0
@Date: 2022-01-03 19:49:06
@LastEditTime: 2022-02-14 12:40:47
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
import { useProjectModal, useProjectsSearchParams } from './util';
import { ButtonNoPadding, ErrorBox, Row, ScreenContainer } from 'components/lib';

export const ProjectListScreen = () => {
  // 状态提升可以让组件共享状态，但是容易造成 prop drilling
  // 基本类型，可以放到依赖里；组件状态，可以放到依赖里；非组件状态的对象，绝不可以放到依赖里
  // https://codesandbox.io/s/keen-wave-tlz9s?file=/src/App.js
  useDocumentTitle('项目列表', false);

  const [param, setParam] = useProjectsSearchParams();
  const { isLoading, error, data: list } = useProjects(useDebounce(param, 1000));
  const { data: users } = useUsers();

  const { open } = useProjectModal();

  return (
    <ScreenContainer>
      <Row between={true}>
        <h1>项目列表</h1>
        <ButtonNoPadding onClick={open} type="link">
          创建项目
        </ButtonNoPadding>
      </Row>

      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? <ErrorBox error={error} /> : null}

      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </ScreenContainer>
  );
};

export default ProjectListScreen;

ProjectListScreen.whyDidYouRender = true;
// 和下面class等价;
// class Text extends React.Component<any, any> {
//   static whyDidYouRender = true;
// }
// const Container = styled.div`
//   padding: 3.2rem;
// `;
