import { createSlice } from '@reduxjs/toolkit';

/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-26 18:01:47
@LastEditTime: 2022-01-26 18:09:11
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\project-list-slice.ts
 */
interface State {
  projectModalOpen: Boolean;
}

const initialState: State = {
  projectModalOpen: false,
};

export const projectListSlice = createSlice({
  name: 'projectListSlice',
  initialState,
  reducers: {
    openProjectModal(state, action) {
      state.projectModalOpen = true;
    },
    closeProjectModal(state, action) {
      state.projectModalOpen = false;
    },
  },
});
