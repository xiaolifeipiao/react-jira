/**
@Author: xiaolifeipiao
@Description: 搜索列表
@version: 0.0.0
@Date: 2022-01-03 19:56:42
@LastEditTime: 2022-01-18 17:08:58
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\list.tsx
 */
import { Table } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { User } from './search-panel';

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
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
          title: '部门',
          dataIndex: 'organization',
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
        {
          title: '创建时间',
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format('YYYY-MM-DD')
                  : '无'}
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
