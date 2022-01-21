/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-21 17:04:41
@LastEditTime: 2022-01-21 17:24:45
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\util.ts
 */
import { useUrlQueryParam } from 'hooks/url';
import { useMemo } from 'react';

export const useProjectsSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(['name', 'personId']);
  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param]
    ),
    setParam,
  ] as const;
};
