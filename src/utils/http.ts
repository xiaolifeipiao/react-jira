/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-15 17:08:49
@LastEditTime: 2022-01-15 18:46:50
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\http.ts
 */

import qs from 'qs';
import * as auth from 'auth-provider';
import { type } from 'os';

const baseApiUrl = process.env.REACT_APP_API_URL;

export interface Config extends RequestInit {
  token?: string;
  data?: object;
}

//axios和fetch的表现不一样，axios可以直接在返回状态不为2xx是抛出异常
// Config = {}加上默认值
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : ' ',
      'Content-Type': data ? 'application/json' : ' ',
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${baseApiUrl}/${endpoint}`, config).then(async (res) => {
    if (res.status === 401) {
      await auth.logout();
      window.location.reload();
      return Promise.reject({ message: '请重新登录' });
    }
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      // 手动抛出异常
      return Promise.reject(data);
    }
  });
};
