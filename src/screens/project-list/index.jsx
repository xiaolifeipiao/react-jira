/**
@Author: xiaolifeipiao
@Description: 搜索列表查询组件
@version: 0.0.0
@Date: 2022-01-03 19:49:06
@LastEditTime: 2022-01-03 20:01:44
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\index.jsx
 */
import { SearchPanel } from './search-panel';
import { List } from './list';

export const ProjectListScreen = () => {
  return (
    <div>
      <SearchPanel />
      <List />
    </div>
  );
};
