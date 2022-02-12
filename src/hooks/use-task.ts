/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 18:40:21
@LastEditTime: 2022-02-12 23:38:17
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-task.ts
 */
import { useHttp } from 'hooks';
import { QueryKey, useMutation, useQuery } from 'react-query';
import { Project } from 'types/project';
import { Task } from 'types/task';
import { useAddConfig, useDeleteConfig, useEditConfig } from './use-optimistic-options';

export const useTasks = (param?: Partial<Task>) => {
  const client = useHttp();
  return useQuery<Task[]>(['tasks', param], () => client('tasks', { data: param }));
};

export const useAddTask = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: Partial<Task>) =>
      client(`tasks`, {
        data: params,
        method: 'POST',
      }),
    useAddConfig(queryKey)
  );
};

export const useTask = (id?: number) => {
  const client = useHttp();
  return useQuery<Project>(['task', { id }], () => client(`tasks/${id}`), {
    enabled: Boolean(id),
  });
};

export const useEditTask = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation(
    (params: Partial<Task>) =>
      client(`tasks/${params.id}`, {
        method: 'PATCH',
        data: params,
      }),
    useEditConfig(queryKey)
  );
};

export const useDeleteTask = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    ({ id }: { id: number }) =>
      client(`tasks/${id}`, {
        method: 'DELETE',
      }),
    useDeleteConfig(queryKey)
  );
};
