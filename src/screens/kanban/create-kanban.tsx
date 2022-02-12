/**
@Author: xiaolifeipiao
@Description: 创建看板
@version: 0.0.0
@Date: 2022-02-12 22:30:30
@LastEditTime: 2022-02-12 23:01:00
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\kanban\create-kanban.tsx
 */
import { useState } from 'react';
import { useKanbansQueryKey, useProjectIdInUrl } from './util';
import { Container } from 'screens/kanban/kanban-column';
import { Input } from 'antd';
import { useAddKanban } from 'hooks/use-kanban';

export const CreateKanban = () => {
  const [name, setName] = useState('');
  const projectId = useProjectIdInUrl();
  const { mutateAsync: addKanban } = useAddKanban(useKanbansQueryKey());

  const submit = async () => {
    await addKanban({ name, projectId });
    setName('');
  };

  return (
    <Container>
      <Input
        size={'large'}
        placeholder={'新建看板名称'}
        onPressEnter={submit}
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
    </Container>
  );
};
