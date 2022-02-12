/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 18:35:13
@LastEditTime: 2022-02-12 22:38:27
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-kanban.ts
 */

import { useHttp } from 'hooks';
import { QueryKey, useMutation, useQuery } from 'react-query';
import { useAddConfig } from './use-optimistic-options';
import { Kanban } from 'types/kanban';

export const useKanbans = (param?: Partial<Kanban>) => {
  const client = useHttp();

  return useQuery<Kanban[]>(['kanbans', param], () => client('kanbans', { data: param }));
};

export const useAddKanban = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: Partial<Kanban>) =>
      client(`kanbans`, {
        data: params,
        method: 'POST',
      }),
    useAddConfig(queryKey)
  );
};
