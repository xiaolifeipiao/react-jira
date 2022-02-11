/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-09 00:18:37
@LastEditTime: 2022-02-09 00:18:37
@LastEditors: xiaolifeipiao
@FilePath: \src\types\project.ts
 */
export interface Project {
  id: number;
  name: string;
  personId: number;
  pin: boolean;
  organization: string;
  created: number;
}
