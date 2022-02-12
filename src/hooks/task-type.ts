/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 19:40:18
@LastEditTime: 2022-02-12 21:25:56
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\task-type.ts
 */

import { useHttp } from 'hooks';
import { useQuery } from 'react-query';
import { TaskType } from 'types/task-type';

export const useTaskTypes = () => {
  const client = useHttp();

  return useQuery<TaskType[]>(['taskTypes'], () => client('taskTypes'));
};
