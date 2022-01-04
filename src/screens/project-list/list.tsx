/**
@Author: xiaolifeipiao
@Description: 搜索列表
@version: 0.0.0
@Date: 2022-01-03 19:56:42
@LastEditTime: 2022-01-04 21:32:09
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\list.tsx
 */
import React from 'react';
import { User } from './search-panel';

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}
interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                '未知'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
