/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-21 13:49:17
@LastEditTime: 2022-02-14 13:37:28
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\kanban\index.tsx
 */
import styled from '@emotion/styled';
import { Spin } from 'antd';
import { Drag, Drop, DropChild } from 'components/drag-and-drop';
import { ScreenContainer } from 'components/lib';
import { useDocumentTitle } from 'hooks';
import { useKanbans, useReorderKanban } from 'hooks/use-kanban';
import { useReorderTask, useTasks } from 'hooks/use-task';
import React, { useCallback } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { CreateKanban } from './create-kanban';
import { KanbanColumn } from './kanban-column';
import { SearchPanel } from './search-panel';
import { TaskModal } from './task-modal';
import {
  useKanbanSearchParams,
  useKanbansQueryKey,
  useProjectInUrl,
  useTasksQueryKey,
  useTasksSearchParams,
} from './util';

export const KanbanScreen = () => {
  useDocumentTitle('看板列表');

  const { data: currentProject } = useProjectInUrl();
  // 指定默认值data: kanbans = []或者使用时kanbans？.
  const { data: kanbans = [], isLoading: kanbanIsLoading } = useKanbans(useKanbanSearchParams());
  const { isLoading: taskIsLoading } = useTasks(useTasksSearchParams());
  const isLoading = taskIsLoading || kanbanIsLoading;
  const onDragEnd = useDragEnd();
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ScreenContainer>
        <h1>{currentProject?.name}看板</h1>
        <SearchPanel />
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <ColumnContainer>
            <Drop type="COLUMN" direction="horizontal" droppableId="kanban">
              <DropChild style={{ display: 'flex' }}>
                {kanbans?.map((kanban, index) => (
                  <Drag key={kanban.id} draggableId={'kanban' + kanban.id} index={index}>
                    <KanbanColumn kanban={kanban} key={kanban.id} />
                  </Drag>
                ))}
              </DropChild>
            </Drop>
            <CreateKanban />
          </ColumnContainer>
        )}
        <TaskModal />
      </ScreenContainer>
    </DragDropContext>
  );
};
export const useDragEnd = () => {
  const { data: kanbans } = useKanbans(useKanbanSearchParams());
  const { mutate: reorderKanban } = useReorderKanban(useKanbansQueryKey());
  const { mutate: reorderTask } = useReorderTask(useTasksQueryKey());
  const { data: allTasks = [] } = useTasks(useTasksSearchParams());
  return useCallback(
    ({ source, destination, type }: DropResult) => {
      // console.log(source, destination, type);
      if (!destination) {
        return;
      }
      // 看板排序
      if (type === 'COLUMN') {
        const fromId = kanbans?.[source.index].id;
        const toId = kanbans?.[destination.index].id;
        if (!fromId || !toId || fromId === toId) {
          return;
        }
        const type = destination.index > source.index ? 'after' : 'before';
        reorderKanban({ fromId, referenceId: toId, type });
      }
      // task排序
      if (type === 'ROW') {
        const fromKanbanId = +source.droppableId;
        const toKanbanId = +destination.droppableId;
        const fromTask = allTasks.filter((task) => task.kanbanId === fromKanbanId)[source.index];
        const toTask = allTasks.filter((task) => task.kanbanId === toKanbanId)[destination.index];
        if (fromTask?.id === toTask?.id) {
          return;
        }
        reorderTask({
          fromId: fromTask?.id,
          referenceId: toTask?.id,
          fromKanbanId,
          toKanbanId,
          type:
            fromKanbanId === toKanbanId && destination.index > source.index ? 'after' : 'before',
        });
      }
    },
    [kanbans, reorderKanban, allTasks, reorderTask]
  );
};

export const ColumnContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  flex: 1;
`;
