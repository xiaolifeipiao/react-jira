/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 21:50:25
@LastEditTime: 2022-02-12 21:50:26
@LastEditors: xiaolifeipiao
@FilePath: \src\components\task-type-select.tsx
 */
import React from 'react';
import { IdSelect } from 'components/id-select';
import { useTaskTypes } from 'hooks/task-type';

export const TaskTypeSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: taskTypes } = useTaskTypes();
  return <IdSelect options={taskTypes || []} {...props} />;
};
