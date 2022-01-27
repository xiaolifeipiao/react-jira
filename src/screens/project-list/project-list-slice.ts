import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-26 18:01:47
@LastEditTime: 2022-01-27 16:50:21
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\project-list-slice.ts
 */
interface State {
  projectModalOpen: boolean;
}

const initialState: State = {
  projectModalOpen: false,
};

export const projectListSlice = createSlice({
  name: 'projectListSlice',
  initialState,
  reducers: {
    openProjectModal(state) {
      state.projectModalOpen = true;
    },
    closeProjectModal(state) {
      state.projectModalOpen = false;
    },
  },
});

export const projectListActions = projectListSlice.actions;

export const selectProjectModalOpen = (state: RootState) =>
  state.projectList.projectModalOpen;
