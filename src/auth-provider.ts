/**
@Author: xiaolifeipiao
@Description: jwt的使用token
@version: 0.0.0
@Date: 2022-01-06 22:25:37
@LastEditTime: 2022-01-19 16:07:53
@LastEditors: xiaolifeipiao
@FilePath: \src\auth-provider.ts
 */

import { User } from 'screens/project-list/search-panel';

const baseApiUrl = process.env.REACT_APP_API_URL;
// 在真实环境中，如果使用firebase这种三方auth服务，则不用自己自己开发
const localStorageKey = '__auth_provider_token_';
export const getToken = () => window.localStorage.getItem(localStorageKey);
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || ' ');
  return user;
};
// 登录
export const login = (data: { username: string; password: string }) => {
  return fetch(`${baseApiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    } else {
      return Promise.reject(await res.json());
    }
  });
};
// 注册
export const register = (data: { username: string; password: string }) => {
  return fetch(`${baseApiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      return handleUserResponse(await res.json());
    } else {
      return Promise.reject(await res.json());
    }
  });
};
// 登出
export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
