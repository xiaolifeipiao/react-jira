/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-21 13:49:17
@LastEditTime: 2022-02-12 23:06:32
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\kanban\index.tsx
 */
import styled from '@emotion/styled';
import { Spin } from 'antd';
import { ScreenContainer } from 'components/lib';
import { useDocumentTitle } from 'hooks';
import { useKanbans } from 'hooks/use-kanban';
import { useTasks } from 'hooks/use-task';
import React from 'react';
import { CreateKanban } from './create-kanban';
import { KanbanColumn } from './kanban-column';
import { SearchPanel } from './search-panel';
import { useKanbanSearchParams, useProjectInUrl, useTasksSearchParams } from './util';

export const KanbanScreen = () => {
  useDocumentTitle('看板列表');

  const { data: currentProject } = useProjectInUrl();
  // 指定默认值data: kanbans = []或者使用时kanbans？.
  const { data: kanbans = [], isLoading: kanbanIsLoading } = useKanbans(useKanbanSearchParams());
  const { isLoading: taskIsLoading } = useTasks(useTasksSearchParams());
  const isLoading = taskIsLoading || kanbanIsLoading;
  return (
    <ScreenContainer>
      <h1>{currentProject?.name}看板</h1>
      <SearchPanel />
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <ColumnContainer>
          {kanbans?.map((kanban) => (
            <KanbanColumn kanban={kanban} key={kanban.id} />
          ))}
          <CreateKanban />
        </ColumnContainer>
      )}
    </ScreenContainer>
  );
};

export const ColumnContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  flex: 1;
`;
