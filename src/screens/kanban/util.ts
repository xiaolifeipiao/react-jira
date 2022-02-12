/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 18:44:46
@LastEditTime: 2022-02-12 23:53:58
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\kanban\util.ts
 */
import { useUrlQueryParam } from 'hooks/url';
import { useProject } from 'hooks/use-projects';
import { useTask } from 'hooks/use-task';
import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router';

// 拿到id
export const useProjectIdInUrl = () => {
  const { pathname } = useLocation();
  const id = pathname.match(/projects\/(\d+)/)?.[1];
  return Number(id);
};

export const useProjectInUrl = () => {
  return useProject(useProjectIdInUrl());
};

export const useKanbanSearchParams = () => ({ projectId: useProjectIdInUrl() });
export const useKanbansQueryKey = () => ['kanbans', useKanbanSearchParams()];

export const useTasksSearchParams = () => {
  const [param] = useUrlQueryParam(['name', 'typeId', 'processorId', 'tagId']);
  const projectId = useProjectIdInUrl();
  return useMemo(
    () => ({
      projectId,
      typeId: Number(param.typeId) || undefined,
      processorId: Number(param.processorId) || undefined,
      tagId: Number(param.tagId) || undefined,
      name: param.name,
    }),
    [projectId, param]
  );
};
export const useTasksQueryKey = () => ['tasks', useTasksSearchParams()];

export const useTasksModal = () => {
  const [{ editingTaskId }, setEditingTaskId] = useUrlQueryParam(['editingTaskId']);
  const { data: editingTask, isLoading } = useTask(Number(editingTaskId));
  const startEdit = useCallback(
    (id: number) => {
      setEditingTaskId({ editingTaskId: id });
    },
    [setEditingTaskId]
  );
  const close = useCallback(() => {
    setEditingTaskId({ editingTaskId: '' });
  }, [setEditingTaskId]);
  return {
    editingTaskId,
    editingTask,
    startEdit,
    close,
    isLoading,
  };
};
