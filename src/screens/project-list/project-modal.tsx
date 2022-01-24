/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-24 15:59:11
@LastEditTime: 2022-01-24 16:08:52
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\project-modal.tsx
 */

import React from 'react';
import { Button, Drawer } from 'antd';

export const ProjectModal = (props: {
  projectModalOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Drawer
      onClose={props.onClose}
      visible={props.projectModalOpen}
      width={'100%'}
    >
      <h1>project modal</h1>
      <Button onClick={props.onClose}>关闭</Button>
    </Drawer>
  );
};
