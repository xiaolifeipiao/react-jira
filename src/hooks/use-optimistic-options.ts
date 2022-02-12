/**
@Author: xiaolifeipiao
@Description: 抽象乐观更新
@version: 0.0.0
@Date: 2022-02-08 23:53:35
@LastEditTime: 2022-02-12 15:33:52
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-optimistic-options.ts
 */
import { QueryKey, useQueryClient } from 'react-query';

export const useConfig = (queryKey: QueryKey, callback: (target: any, old?: any[]) => any[]) => {
  const queryClient = useQueryClient();
  return {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
    async onMutate(target: any) {
      const previousItems = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, (old?: any[]) => {
        return callback(target, old);
      });
      return { previousItems };
    },
    onError(error: any, newItem: any, context: any) {
      queryClient.setQueryData(queryKey, context.previousItems);
    },
  };
};

export const useDeleteConfig = (queryKey: QueryKey) =>
  useConfig(queryKey, (target, old) => old?.filter((item) => item.id !== target.id) || []);

export const useEditConfig = (queryKey: QueryKey) =>
  useConfig(
    queryKey,
    (target, old) =>
      old?.map((item) => (item.id === target.id ? { ...item, ...target } : item)) || []
  );

export const useAddConfig = (queryKey: QueryKey) =>
  useConfig(queryKey, (target, old) => (old ? [...old, target] : []));
