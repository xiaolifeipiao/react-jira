/**
@Author: xiaolifeipiao
@Description: useProject
@version: 0.0.0
@Date: 2022-01-19 15:20:03
@LastEditTime: 2022-01-22 15:09:23
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-projects.ts
 */
import { useHttp } from 'hooks';
import { useEffect } from 'react';
import { Project } from '../screens/project-list/list';
import { useAsync } from './use-async';
import { cleanObject } from 'utils/index';

export const useProjects = (param?: Partial<Project>) => {
  // 使用自定义的useHttp
  const client = useHttp();
  // 使用自定义useAsync
  const { run, ...result } = useAsync<Project[]>();
  useEffect(() => {
    run(client('projects', { data: cleanObject(param || {}) }));
  }, [param]);
  return result;
};

// 编辑
export const useEditProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) => {
    return run(
      client(`projects/${params.id}`, {
        data: params,
        method: 'PATCH',
      })
    );
  };
  return {
    mutate,
    ...asyncResult,
  };
};

// 添加
export const useAddProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<Project>) => {
    return run(
      client(`projects/${params.id}`, {
        data: params,
        method: 'POST',
      })
    );
  };
  return {
    mutate,
    ...asyncResult,
  };
};
