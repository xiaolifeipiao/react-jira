/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-24 16:10:17
@LastEditTime: 2022-02-08 18:41:23
@LastEditors: xiaolifeipiao
@FilePath: \src\components\project-popover.tsx
 */
import styled from '@emotion/styled';
import { Popover, Typography, List, Divider } from 'antd';
import { useProjects } from 'hooks/use-projects';
import React from 'react';
import { useProjectModal } from 'screens/project-list/util';
import { ButtonNoPadding } from './lib';

export const ProjectPopover = () => {
  const { open } = useProjectModal();
  const { data: projects, isLoading } = useProjects();
  const pinnedProjects = projects?.filter((project) => project.pin);
  const content = (
    <ContentContainer>
      <Typography.Text type="secondary">收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map((project) => (
          <List.Item>
            <List.Item.Meta title={project.name}></List.Item.Meta>
          </List.Item>
        ))}
      </List>
      <Divider />
      <ButtonNoPadding onClick={open} type="link">
        创建项目
      </ButtonNoPadding>
    </ContentContainer>
  );
  return (
    <Popover placement="bottom" content={content}>
      <span> 项目</span>
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;
