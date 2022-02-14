/**
@Author: xiaolifeipiao
@Description: 任务类型
@version: 0.0.0
@Date: 2022-02-12 23:41:45
@LastEditTime: 2022-02-14 13:57:24
@LastEditors: xiaolifeipiao
@FilePath: \src\types\epic.ts
 */
export interface Epic {
  id: number;
  name: string;
  projectId: number;
  // 开始时间
  start: number;
  // 结束时间
  end: number;
}
