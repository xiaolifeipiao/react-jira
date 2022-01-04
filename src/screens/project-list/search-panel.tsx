/**
@Author: xiaolifeipiao
@Description: 搜索框
@version: 0.0.0
@Date: 2022-01-03 19:58:06
@LastEditTime: 2022-01-04 21:30:57
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\search-panel.tsx
 */
export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
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
    <form action="">
      <div>
        {/* // 浅拷贝等价
        setParam(Object.assign({}, param, { name: e.target.value })); */}
        <input
          type="text"
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
        ></input>
        <select
          value={param.personId}
          onChange={(e) =>
            setParam({
              ...param,
              personId: e.target.value,
            })
          }
        >
          <option value={''}>负责人</option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
export default SearchPanel;
