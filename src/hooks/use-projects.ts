/**
@Author: xiaolifeipiao
@Description: useProject
@version: 0.0.0
@Date: 2022-01-19 15:20:03
@LastEditTime: 2022-02-12 15:08:05
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-projects.ts
 */
import { useHttp } from 'hooks';
import { QueryKey, useMutation, useQuery } from 'react-query';
import { Project } from 'types/project';
import { cleanObject } from 'utils/index';
import { useAddConfig, useDeleteConfig, useEditConfig } from './use-optimistic-options';

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();

  return useQuery<Project[]>(['projects', cleanObject(param)], () =>
    client('projects', { data: param })
  );
};

export const useEditProject = (queryKey: QueryKey) => {
  const client = useHttp();
  return useMutation(
    (params: Partial<Project>) =>
      client(`projects/${params.id}`, {
        method: 'PATCH',
        data: params,
      }),
    useEditConfig(queryKey)
  );
};

export const useAddProject = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    (params: Partial<Project>) =>
      client(`projects`, {
        data: params,
        method: 'POST',
      }),
    useAddConfig(queryKey)
  );
};

export const useDeleteProject = (queryKey: QueryKey) => {
  const client = useHttp();

  return useMutation(
    ({ id }: { id: number }) =>
      client(`projects/${id}`, {
        method: 'DELETE',
      }),
    useDeleteConfig(queryKey)
  );
};

export const useProject = (id?: number) => {
  const client = useHttp();
  return useQuery<Project>(['project', { id }], () => client(`projects/${id}`), {
    enabled: Boolean(id),
  });
};
