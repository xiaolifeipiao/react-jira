/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 18:40:21
@LastEditTime: 2022-02-12 22:34:19
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-task.ts
 */
import { useHttp } from 'hooks';
import { QueryKey, useMutation, useQuery } from 'react-query';
import { Task } from 'types/task';
import { useAddConfig } from './use-optimistic-options';

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
