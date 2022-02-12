/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-02-12 23:13:26
@LastEditTime: 2022-02-12 23:14:27
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\kanban\create-task.tsx
 */
import { Card, Input } from 'antd';
import { useAddTask } from 'hooks/use-task';
import { useEffect, useState } from 'react';
import { useProjectIdInUrl, useTasksQueryKey } from './util';

export const CreateTask = ({ kanbanId }: { kanbanId: number }) => {
  const [name, setName] = useState('');
  const { mutateAsync: addTask } = useAddTask(useTasksQueryKey());
  const projectId = useProjectIdInUrl();
  const [inputMode, setInputMode] = useState(false);

  const submit = async () => {
    await addTask({ projectId, name, kanbanId });
    setInputMode(false);
    setName('');
  };

  const toggle = () => setInputMode((mode) => !mode);

  useEffect(() => {
    if (!inputMode) {
      setName('');
    }
  }, [inputMode]);

  if (!inputMode) {
    return <div onClick={toggle}>+创建事务</div>;
  }

  return (
    <Card>
      <Input
        onBlur={toggle}
        placeholder={'需要做些什么'}
        autoFocus={true}
        onPressEnter={submit}
        value={name}
        onChange={(evt) => setName(evt.target.value)}
      />
    </Card>
  );
};
