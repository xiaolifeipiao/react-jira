/**
@Author: xiaolifeipiao
@Description: 搜索框
@version: 0.0.0
@Date: 2022-01-03 19:58:06
@LastEditTime: 2022-01-17 22:02:09
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\search-panel.tsx
 */

import { Form, Input, Select } from 'antd';
export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps['param']) => void;
}
export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <Form action="">
      <div>
        {/* // 浅拷贝等价
        setParam(Object.assign({}, param, { name: e.target.value })); */}
        <Input
          type="text"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        ></Input>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <Select.Option value={''}>负责人</Select.Option>
          {users.map((user) => (
            <Select.Option value={user.id} key={user.id}>
              {user.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </Form>
  );
};
export default SearchPanel;
