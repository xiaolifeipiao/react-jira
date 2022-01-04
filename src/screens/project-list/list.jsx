/**
@Author: xiaolifeipiao
@Description: 搜索列表
@version: 0.0.0
@Date: 2022-01-03 19:56:42
@LastEditTime: 2022-01-04 14:05:50
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\list.jsx
 */
import React from 'react';
export const List = ({ list }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <table>
        {list.map((project) => (
          <tr>
            <td>{project.name}</td>
            <td>{project.personName}</td>
          </tr>
        ))}
      </table>
    </table>
  );
};
