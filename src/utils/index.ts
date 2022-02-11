/**
@Author: xiaolifeipiao
@Description: 清理对象的空值
@version: 0.0.0
@Date: 2022-01-04 16:22:46
@LastEditTime: 2022-02-09 00:06:00
@LastEditors: xiaolifeipiao
@FilePath: \src\utils\index.ts
 */
//处理0被判断为false
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === '';
// 避免对传入的对象进行污染,浅拷贝和深拷贝
// { [key: string]: unknown })限制 键值对
export const cleanObject = (object?: { [key: string]: unknown }) => {
  // Object.assign({}, object)
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

// 点击logo重置路由
export const resetRoute = () => (window.location.href = window.location.origin);
