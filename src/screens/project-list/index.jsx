/**
@Author: xiaolifeipiao
@Description: 搜索列表查询组件
@version: 0.0.0
@Date: 2022-01-03 19:49:06
@LastEditTime: 2022-01-04 19:56:37
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\index.jsx
 */
import React, { useState, useEffect } from 'react';
import * as qs from 'qs';
import { cleanObject } from '../../utils/index';
import { useMount, useDebounce } from '../../hooks/index';
import { SearchPanel } from './search-panel';
import { List } from './list';

export const ProjectListScreen = () => {
  const baseApiUrl = process.env.REACT_APP_API_URL;
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedParam = useDebounce(param, 1000);

  useEffect(() => {
    fetch(
      `${baseApiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debouncedParam]);

  useMount(() => {
    fetch(`${baseApiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};

export default ProjectListScreen;
