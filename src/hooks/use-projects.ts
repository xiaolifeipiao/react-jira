/**
@Author: xiaolifeipiao
@Description: useProject
@version: 0.0.0
@Date: 2022-01-19 15:20:03
@LastEditTime: 2022-02-08 20:03:44
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-projects.ts
 */
import { useHttp } from 'hooks';
import { useCallback, useEffect } from 'react';
import { Project } from '../screens/project-list/list';
import { useAsync } from './use-async';
import { cleanObject } from 'utils/index';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useProjects = (param?: Partial<Project>) => {
  // 使用自定义的useHttp
  const client = useHttp();
  // 使用react-query改造
  return useQuery<Project[]>(['projects', param], () =>
    client('projects', { data: param })
  );
  // 使用自定义useAsync
  // const { run, ...result } = useAsync<Project[]>();
  // const fetchProjects = useCallback(
  //   () => client('projects', { data: cleanObject(param || {}) }),
  //   [param, client]
  // );
  // useEffect(() => {
  //   run(fetchProjects(), { retry: fetchProjects });
  // }, [param, run, fetchProjects]);
  // return result;
};

// 编辑
export const useEditProject = () => {
  // const { run, ...asyncResult } = useAsync();
  // const mutate = (params: Partial<Project>) => {
  //   return run(
  //     client(`projects/${params.id}`, {
  //       data: params,
  //       method: 'PATCH',
  //     })
  //   );
  // };
  // return {
  //   mutate,
  //   ...asyncResult,
  // };
  const client = useHttp();
  const queryClient = useQueryClient();
  return useMutation(
    (params: Partial<Project>) =>
      client(`projects/${params.id}`, {
        method: 'PATCH',
        data: params,
      }),
    { onSuccess: () => queryClient.invalidateQueries('projects') }
  );
};

// 添加
export const useAddProject = () => {
  const client = useHttp();
  const queryClient = useQueryClient();
  return useMutation(
    (params: Partial<Project>) =>
      client(`projects/${params.id}`, {
        data: params,
        method: 'POST',
      }),
    {
      onSuccess: () => queryClient.invalidateQueries('projects'),
    }
  );
  // const { run, ...asyncResult } = useAsync();
  // const mutate = (params: Partial<Project>) => {
  //   return run(
  //     client(`projects/${params.id}`, {
  //       data: params,
  //       method: 'POST',
  //     })
  //   );
  // };
  // return {
  //   mutate,
  //   ...asyncResult,
  // };
};
