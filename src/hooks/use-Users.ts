/**
@Author: xiaolifeipiao
@Description: useUsers
@version: 0.0.0
@Date: 2022-01-19 15:31:00
@LastEditTime: 2022-02-12 15:56:27
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-Users.ts
 */
import { useHttp } from 'hooks';
import { useQuery } from 'react-query';
import { User } from 'screens/project-list/search-panel';

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  return useQuery<User[]>(['users', param], () => client('users', { data: param }));
};
