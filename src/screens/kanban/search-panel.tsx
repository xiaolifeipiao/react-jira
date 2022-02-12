/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 21:48:22
@LastEditTime: 2022-02-12 21:49:56
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\kanban\search-panel.tsx
 */
import React from 'react';
import { useTasksSearchParams } from 'screens/kanban/util';
import { Row } from 'components/lib';
import { Button, Input } from 'antd';
import { UserSelect } from 'components/user-select';
import { useSetUrlSearchParam } from 'hooks/url';
import { TaskTypeSelect } from 'components/task-type-select';

export const SearchPanel = () => {
  const searchParams = useTasksSearchParams();
  const setSearchParams = useSetUrlSearchParam();
  const reset = () => {
    setSearchParams({
      typeId: undefined,
      processorId: undefined,
      tagId: undefined,
      name: undefined,
    });
  };

  return (
    <Row marginBottom={4} gap={true}>
      <Input
        style={{ width: '20rem' }}
        placeholder={'任务名'}
        value={searchParams.name}
        onChange={(evt) => setSearchParams({ name: evt.target.value })}
      />
      <UserSelect
        defaultOptionName={'经办人'}
        value={searchParams.processorId}
        onChange={(value) => setSearchParams({ processorId: value })}
      />
      <TaskTypeSelect
        defaultOptionName={'类型'}
        value={searchParams.typeId}
        onChange={(value) => setSearchParams({ typeId: value })}
      />
      <Button onClick={reset}>清除筛选器</Button>
    </Row>
  );
};
