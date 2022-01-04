/**
@Author: xiaolifeipiao
@Description: 搜索列表查询组件
@version: 0.0.0
@Date: 2022-01-03 19:49:06
@LastEditTime: 2022-01-04 16:48:26
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\index.jsx
 */
import React, { useState, useEffect } from 'react';
import * as qs from 'qs';
import { cleanObject } from '../../utils/index';
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

  useEffect(() => {
    fetch(`${baseApiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        }
      }
    );
  }, [param]);

  useEffect(() => {
    fetch(`${baseApiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  }, []);
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};

export default ProjectListScreen;
