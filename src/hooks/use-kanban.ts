/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 18:35:13
@LastEditTime: 2022-02-12 18:39:24
@LastEditors: xiaolifeipiao
@FilePath: \src\hooks\use-kanban.ts
 */

import { useHttp } from 'hooks';
import { useQuery } from 'react-query';
import { kanban } from 'types/kanban';

export const useKanbans = (param?: Partial<kanban>) => {
  const client = useHttp();
  return useQuery<kanban[]>(['kanbans', param], () => client('kanbans', { data: param }));
};
