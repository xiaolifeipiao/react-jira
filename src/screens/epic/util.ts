/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-14 13:59:03
@LastEditTime: 2022-02-14 13:59:04
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\epic\util.ts
 */
import { useProjectIdInUrl } from 'screens/kanban/util';

export const useEpicSearchParams = () => ({ projectId: useProjectIdInUrl() });

export const useEpicsQueryKey = () => ['epics', useEpicSearchParams()];
