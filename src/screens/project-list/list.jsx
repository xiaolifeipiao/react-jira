/**
@Author: xiaolifeipiao
@Description: 搜索列表
@version: 0.0.0
@Date: 2022-01-03 19:56:42
@LastEditTime: 2022-01-04 16:57:37
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\list.jsx
 */
import React from 'react';
export const List = ({ list, users }) => {
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
