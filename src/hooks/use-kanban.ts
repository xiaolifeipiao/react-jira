/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 18:35:13
@LastEditTime: 2022-02-14 12:59:04
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-kanban.ts
 */

import { useHttp } from 'hooks';
import { QueryKey, useMutation, useQuery } from 'react-query';
import { useAddConfig, useDeleteConfig, useReorderKanbanConfig } from './use-optimistic-options';
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

export const useDeleteKanban = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    ({ id }: { id: number }) =>
      client(`kanbans/${id}`, {
        method: 'DELETE',
      }),
    useDeleteConfig(queryKey)
  );
};

export interface SortProps {
  // 要重新排序的 item
  fromId: number;
  // 目标 item
  referenceId: number;
  // 放在目标item的前还是后
  type: 'before' | 'after';
  fromKanbanId?: number;
  toKanbanId?: number;
}

export const useReorderKanban = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation((params: SortProps) => {
    return client('kanbans/reorder', {
      data: params,
      method: 'POST',
    });
  }, useReorderKanbanConfig(queryKey));
};
