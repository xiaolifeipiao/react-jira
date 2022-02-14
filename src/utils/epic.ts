/**
@Author: xiaolifeipiao
@Description: 任务组
@version: 0.0.0
@Date: 2022-02-12 23:40:54
@LastEditTime: 2022-02-14 13:57:13
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\epic.ts
 */
import { useHttp } from 'hooks';
import { useAddConfig, useDeleteConfig } from 'hooks/use-optimistic-options';
import { QueryKey, useMutation, useQuery } from 'react-query';
import { Epic } from 'types/epic';

export const useEpics = (param?: Partial<Epic>) => {
  const client = useHttp();

  return useQuery<Epic[]>(['epics', param], () => client('epics', { data: param }));
};

export const useAddEpic = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: Partial<Epic>) =>
      client(`epics`, {
        data: params,
        method: 'POST',
      }),
    useAddConfig(queryKey)
  );
};

export const useDeleteEpic = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    ({ id }: { id: number }) =>
      client(`epics/${id}`, {
        method: 'DELETE',
      }),
    useDeleteConfig(queryKey)
  );
};
