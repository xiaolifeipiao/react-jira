/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 23:40:04
@LastEditTime: 2022-02-12 23:40:04
@LastEditors: xiaolifeipiao
@FilePath: \src\components\epic-select.tsx
 */
import { IdSelect } from './id-select';
import { useEpics } from 'utils/epic';

export const EpicSelect = (props: React.ComponentProps<typeof IdSelect>) => {
  const { data: epics } = useEpics();
  return <IdSelect options={epics || []} {...props} />;
};
