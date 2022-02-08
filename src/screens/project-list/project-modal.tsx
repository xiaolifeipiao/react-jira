/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-24 15:59:11
@LastEditTime: 2022-02-08 18:38:09
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\project-modal.tsx
 */

import React from 'react';
import { Button, Drawer } from 'antd';
import { useProjectModal } from './util';

export const ProjectModal = () => {
  const { projectModalOpen, close } = useProjectModal();
  return (
    <Drawer onClose={close} visible={projectModalOpen} width={'100%'}>
      <h1>project modal</h1>
      <Button onClick={close}>关闭</Button>
    </Drawer>
  );
};
