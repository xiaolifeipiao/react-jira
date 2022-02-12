/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 19:00:27
@LastEditTime: 2022-02-12 23:15:31
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\kanban\kanban-column.tsx
 */
import { useTaskTypes } from 'hooks/task-type';
import { useTasks } from 'hooks/use-task';
import React from 'react';
import { Kanban } from 'types/kanban';
import { useTasksSearchParams } from './util';
import taskIcon from 'assets/task.svg';
import bugIcon from 'assets/bug.svg';
import styled from '@emotion/styled';
import { Card } from 'antd';
import { CreateTask } from './create-task';

export const KanbanColumn = ({ kanban }: { kanban: Kanban }) => {
  const { data: allTasks } = useTasks(useTasksSearchParams());
  const tasks = allTasks?.filter((task) => task.kanbanId === kanban.id);
  return (
    <Container>
      <h3>{kanban.name}</h3>
      <TasksContainer>
        {tasks?.map((task) => (
          <Card style={{ marginBottom: '0.5rem' }} key={task.id}>
            <div> {task.name}</div>
            <TaskTypeIcon id={task.typeId} />
          </Card>
        ))}
        <CreateTask kanbanId={kanban.id} />
      </TasksContainer>
    </Container>
  );
};

const TaskTypeIcon = ({ id }: { id: number }) => {
  const { data: taskTypes } = useTaskTypes();
  const name = taskTypes?.find((taskType) => taskType.id === id)?.name;
  if (!name) {
    return null;
  }
  return <img alt={'task-icon'} src={name === 'task' ? taskIcon : bugIcon} />;
};

export const Container = styled.div`
  min-width: 27rem;
  border-radius: 6px;
  background-color: rgb(244, 245, 247);
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0.7rem 1rem;
  margin-right: 1.5rem;
`;

const TasksContainer = styled.div`
  overflow: scroll;
  display: 1;
  ::-webkit-scrollbar {
    display: none;
  }
`;
