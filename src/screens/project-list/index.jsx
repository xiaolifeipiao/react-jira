/**
@Author: xiaolifeipiao
@Description: 搜索列表查询组件
@version: 0.0.0
@Date: 2022-01-03 19:49:06
@LastEditTime: 2022-01-04 14:13:40
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\index.jsx
 */
import React from 'react';
import { SearchPanel } from './search-panel';
import { List } from './list';

const baseApiUrl = process.env.REACT_APP_API_URL;

const [param, setParam] = useState({
  name: '',
  personId: '',
});
const [list, setList] = useState([]);

useEffect(() => {
  fetch(`${baseApiUrl}/projects`).then(async (res) => {
    if (res.ok) {
      setList(await res.json());
    }
  });
}, [param]);

export const ProjectListScreen = () => {
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} />
      <List list={list} />
    </div>
  );
};
