/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-26 17:56:45
@LastEditTime: 2022-02-08 17:45:51
@LastEditors: xiaolifeipiao
@FilePath: \src\store\index.ts
 */

import { configureStore } from '@reduxjs/toolkit';
import { projectListSlice } from 'screens/project-list/project-list-slice';
import { authSlice } from './auth-slice';

export const rootReducer = {
  projectList: projectListSlice.reducer,
  auth: authSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: authSlice,
  //     },
  //   }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
