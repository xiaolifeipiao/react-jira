/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-26 17:56:45
@LastEditTime: 2022-01-26 17:59:00
@LastEditors: xiaolifeipiao
@FilePath: \src\store\index.tsx
 */

import { configureStore } from '@reduxjs/toolkit';

export const rootReducer = {};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
