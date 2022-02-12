/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 18:40:21
@LastEditTime: 2022-02-12 18:41:24
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-task.ts
 */
import { useHttp } from 'hooks';
import { useQuery } from 'react-query';
import { Task } from 'types/task';

export const useTasks = (param?: Partial<Task>) => {
  const client = useHttp();
  return useQuery<Task[]>(['tasks', param], () => client('tasks', { data: param }));
};
