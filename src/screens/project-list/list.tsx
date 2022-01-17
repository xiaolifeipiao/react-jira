/**
@Author: xiaolifeipiao
@Description: 搜索列表
@version: 0.0.0
@Date: 2022-01-03 19:56:42
@LastEditTime: 2022-01-17 21:56:15
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\list.tsx
 */
import { Table } from 'antd';
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
    <Table
      pagination={false}
      columns={[
        {
          title: '名称',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: '负责人',
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  '未知'}
              </span>
            );
          },
        },
      ]}
      dataSource={list}
    />
  );
};

export default List;
