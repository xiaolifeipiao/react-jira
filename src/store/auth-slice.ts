/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-27 16:53:52
@LastEditTime: 2022-02-08 16:11:42
@LastEditors: xiaolifeipiao
@FilePath: \src\store\auth-slice.ts
 */
import { createSlice } from '@reduxjs/toolkit';
import { User } from 'screens/project-list/search-panel';
import * as auth from 'auth-provider';
import { AuthForm, bootstrapUser } from 'context/auth-context';
import { AppDispatch, RootState } from 'store';

interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

const { setUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export const login = (from: AuthForm) => (dispatch: AppDispatch) =>
  auth.login(from).then((user) => dispatch(setUser(user)));

export const register = (from: AuthForm) => (dispatch: AppDispatch) =>
  auth.register(from).then((user) => dispatch(setUser(user)));

export const logout = () => (dispatch: AppDispatch) =>
  auth.logout().then(() => dispatch(setUser(null)));

export const bootstrap = () => (dispatch: AppDispatch) =>
  bootstrapUser().then((user) => dispatch(setUser(user)));
