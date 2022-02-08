/**
@Author: xiaolifeipiao
@Description: 
@version: 0.0.0
@Date: 2022-01-21 17:04:41
@LastEditTime: 2022-02-08 21:39:09
@LastEditors: xiaolifeipiao
@FilePath: \src\screens\project-list\util.ts
 */
import { useUrlQueryParam } from 'hooks/url';
import { useProject } from 'hooks/use-projects';
import { useMemo } from 'react';

export const useProjectsSearchParams = () => {
  const [param, setParam] = useUrlQueryParam(['name', 'personId']);
  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param]
    ),
    setParam,
  ] as const;
};

export const useProjectModal = () => {
  const [{ projectCreate }, setProjectCreate] = useUrlQueryParam([
    'projectCreate',
  ]);
  // 编辑
  const [{ editingProjectId }, setEditingProjectId] = useUrlQueryParam([
    'editingProjectId',
  ]);
  const { data: editingProject, isLoading } = useProject(
    Number(editingProjectId)
  );
  const open = () => setProjectCreate({ projectCreate: true });
  const close = () => {
    setProjectCreate({ projectCreate: '' });
    setEditingProjectId({ editingProjectId: '' });
  };
  const startEdit = (id: number) =>
    setEditingProjectId({ editingProjectId: id });
  // 返回三个以上使用对象，三个一下【】
  // return [projectCreate === 'true', open, close] as const;
  return {
    projectModalOpen: projectCreate === 'true' || Boolean(editingProject),
    open,
    close,
    startEdit,
    editingProject,
    isLoading,
  };
};
