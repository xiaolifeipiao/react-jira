/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-09 00:00:56
@LastEditTime: 2022-02-09 00:00:56
@LastEditors: xiaolifeipiao
@FilePath: \src\types\Task.ts
 */
export interface Task {
  id: number;
  name: string;
  // 经办人
  processorId: number;
  projectId: number;
  // 任务组
  epicId: number;
  kanbanId: number;
  // bug or task
  typeId: number;
  note: string;
}
