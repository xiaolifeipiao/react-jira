/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-21 17:14:35
@LastEditTime: 2022-01-21 17:17:25
@LastEditors: xiaolifeipiao
@FilePath: \src\components\user-select.tsx
 */
import { useUsers } from 'hooks/use-Users';
import React from 'react';
import { IdSelect } from './id-select';

export const UserSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: users } = useUsers();
  return <IdSelect options={users || []} {...props} />;
};
