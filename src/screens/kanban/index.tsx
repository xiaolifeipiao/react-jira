/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-21 13:49:17
@LastEditTime: 2022-02-14 12:09:51
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\kanban\index.tsx
 */
import styled from '@emotion/styled';
import { Spin } from 'antd';
import { Drag, Drop, DropChild } from 'components/drag-and-drop';
import { ScreenContainer } from 'components/lib';
import { useDocumentTitle } from 'hooks';
import { useKanbans } from 'hooks/use-kanban';
import { useTasks } from 'hooks/use-task';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { CreateKanban } from './create-kanban';
import { KanbanColumn } from './kanban-column';
import { SearchPanel } from './search-panel';
import { TaskModal } from './task-modal';
import { useKanbanSearchParams, useProjectInUrl, useTasksSearchParams } from './util';

export const KanbanScreen = () => {
  useDocumentTitle('看板列表');

  const { data: currentProject } = useProjectInUrl();
  // 指定默认值data: kanbans = []或者使用时kanbans？.
  const { data: kanbans = [], isLoading: kanbanIsLoading } = useKanbans(useKanbanSearchParams());
  const { isLoading: taskIsLoading } = useTasks(useTasksSearchParams());
  const isLoading = taskIsLoading || kanbanIsLoading;
  return (
    <DragDropContext onDragEnd={() => {}}>
      <ScreenContainer>
        <h1>{currentProject?.name}看板</h1>
        <SearchPanel />
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <Drop type="COLUMN" direction="horizontal" droppableId="kanban">
            <ColumnContainer>
              {kanbans?.map((kanban, index) => (
                <Drag key={kanban.id} draggableId={'kanban' + kanban.id} index={index}>
                  <KanbanColumn kanban={kanban} key={kanban.id} />
                </Drag>
              ))}
              <CreateKanban />
            </ColumnContainer>
          </Drop>
        )}
        <TaskModal />
      </ScreenContainer>
    </DragDropContext>
  );
};

export const ColumnContainer = styled(DropChild)`
  display: flex;
  overflow-x: scroll;
  flex: 1;
`;
