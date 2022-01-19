/**
@Author: xiaolifeipiao
@Description: useUsers
@version: 0.0.0
@Date: 2022-01-19 15:31:00
@LastEditTime: 2022-01-19 15:47:37
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-Users.ts
 */
import { useHttp, useMount } from 'hooks';
import { User } from 'screens/project-list/search-panel';
import { cleanObject } from 'utils';
import { useAsync } from './use-async';

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();
  useMount(() => {
    run(client('users', { data: cleanObject(param || {}) }));
  });
  return result;
};
