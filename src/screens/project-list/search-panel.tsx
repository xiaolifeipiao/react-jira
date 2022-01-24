/**
@Author: xiaolifeipiao
@Description: 搜索框
@version: 0.0.0
@Date: 2022-01-03 19:58:06
@LastEditTime: 2022-01-22 23:36:02
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\search-panel.tsx
*/
/**
 * 使用此注释告诉 Babel 将 jsx 代码转换为 jsx 函数的调用，而不是 React.createElement
 * 16.x ： @jsx jsx
 * 17.x: @jsxImportSource @emotion/react
 *  */
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { Form, Input } from 'antd';
import { UserSelect } from 'components/user-select';
import { Project } from './list';
export interface User {
  id: number;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: Partial<Pick<Project, 'name' | 'personId'>>;
  setParam: (param: SearchPanelProps['param']) => void;
}
export const SearchPanel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <Form css={{ marginBottom: '2rem' }} layout={'inline'}>
      <Form.Item>
        {/* // 浅拷贝等价
        setParam(Object.assign({}, param, { name: e.target.value })); */}
        <Input
          type="text"
          placeholder="项目名"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        ></Input>
      </Form.Item>
      <Form.Item>
        <UserSelect
          defaultOptionName="负责人"
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        ></UserSelect>
      </Form.Item>
    </Form>
  );
};
export default SearchPanel;
