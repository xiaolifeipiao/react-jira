/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-24 16:10:17
@LastEditTime: 2022-02-08 17:48:47
@LastEditors: xiaolifeipiao
@FilePath: \src\components\project-popover.tsx
 */
import styled from '@emotion/styled';
import { Popover, Typography, List, Divider } from 'antd';
import { useProjects } from 'hooks/use-projects';
import React from 'react';
import { useDispatch } from 'react-redux';
import { projectListActions } from 'screens/project-list/project-list-slice';
import { ButtonNoPadding } from './lib';

export const ProjectPopover = () => {
  const dispatch = useDispatch();
  const { data: projects, isLoading } = useProjects();
  const pinnedProjects = projects?.filter((project) => project.pin);

  const content = (
    <ContentContainer>
      <Typography.Text type="secondary">收藏项目</Typography.Text>
      <List>
        {pinnedProjects?.map((project) => (
          <List.Item key={project.id}>
            <List.Item.Meta title={project.name}></List.Item.Meta>
          </List.Item>
        ))}
      </List>
      <Divider />
      <ButtonNoPadding
        onClick={() => dispatch(projectListActions.openProjectModal())}
        type={'link'}
      >
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
