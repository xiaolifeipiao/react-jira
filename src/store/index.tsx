/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-26 17:56:45
@LastEditTime: 2022-01-27 16:04:58
@LastEditors: xiaolifeipiao
@FilePath: \src\store\index.tsx
 */

import { configureStore } from '@reduxjs/toolkit';
import { projectListSlice } from 'screens/project-list/project-list-slice';

export const rootReducer = {
  projectList: projectListSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
