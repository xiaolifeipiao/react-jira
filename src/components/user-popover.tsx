/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-14 14:14:35
@LastEditTime: 2022-02-14 14:14:35
@LastEditors: xiaolifeipiao
@FilePath: \src\components\user-popover.tsx
 */

import styled from '@emotion/styled';
import { Divider, List, Popover, Typography } from 'antd';
import { useUsers } from 'hooks/use-Users';

export const UserPopover = () => {
  const { data: users, refetch } = useUsers();

  const content = (
    <ContentContainer>
      <Typography.Text type={'secondary'}>组员列表</Typography.Text>
      <List>
        {users?.map((user) => (
          <List.Item key={user.id}>
            <List.Item.Meta title={user.name} />
          </List.Item>
        ))}
      </List>
      <Divider />
    </ContentContainer>
  );

  return (
    <Popover onVisibleChange={() => refetch()} placement={'bottom'} content={content}>
      <span>组员</span>
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;
