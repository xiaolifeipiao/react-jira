/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-24 15:59:11
@LastEditTime: 2022-01-27 16:34:45
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\project-modal.tsx
 */

import React from 'react';
import { Button, Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  projectListActions,
  selectProjectModalOpen,
} from './project-list-slice';

export const ProjectModal = () => {
  const dispatch = useDispatch();
  const projectModalOpen = useSelector(selectProjectModalOpen);
  return (
    <Drawer
      onClose={() => dispatch(projectListActions.closeProjectModal())}
      visible={projectModalOpen}
      width={'100%'}
    >
      <h1>project modal</h1>
      <Button onClick={() => dispatch(projectListActions.closeProjectModal())}>
        关闭
      </Button>
    </Drawer>
  );
};
